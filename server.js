const express = require('express');
const fetch = require('node-fetch');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables from config.env
dotenv.config({ path: './config.env' });

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware for security headers
app.use(helmet());

// Middleware for CORS
app.use(cors());

// Middleware for parsing JSON bodies
app.use(express.json());

// Rate limiting middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: "Too many requests, please try again later."
});
app.use(limiter);

app.post('/suggestions', async (req, res) => {
  const { prompt } = req.body;

  // Basic input validation
  if (!prompt || typeof prompt !== 'string' || prompt.trim() === '') {
    return res.status(400).json({ error: 'Invalid input' });
  }

  try {
    const response = await fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: `Suggest tasks for: ${prompt}`,
        max_tokens: 100,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch suggestions from OpenAI');
    }

    const data = await response.json();
    res.json(data.choices[0].text.trim());
  } catch (error) {
    console.error("Error fetching suggestions:", error);
    res.status(500).json({ error: "Failed to fetch suggestions" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});