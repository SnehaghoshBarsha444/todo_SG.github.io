
const container = document.querySelector('.container');
const registerbtn = document.querySelector('.register-btn');
const loginbtn = document.querySelector('.login-btn');

registerbtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginbtn.addEventListener('click', () => {
    container.classList.remove('active');
});

// User data stored in LocalStorage
let users = JSON.parse(localStorage.getItem('users')) || [];

// Registration Functionality
document.getElementById('create-account-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const gender = document.getElementById('gender').value;

    const newUser = { username, email, password, gender };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    alert('Account created successfully!');
    window.location.href = 'profile.html';
});

// Login Functionality
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const user = users.find(user => user.email === email && user.password === password && user.gender === gender);

    // if (user) {
    //     alert('Login successful!');
    //     window.location.href = 'index1.html';
    // } else {
    //     alert('Invalid email or password.');
    // }

    if (user) {
        alert('Login successful!');
        window.localStorage.setItem('loggedInUser', user.username); // Store the username in localStorage
        window.location.href = 'profile.html';
    } else {
        alert('Invalid email or password.');
    }
});

// Display Username on index1.html
if (window.location.pathname.includes('profile.html')) {
    const loggedInUser = users[0]; // Assuming first user for demo
    if (loggedInUser) {
        document.body.innerHTML += `<h2>Welcome, ${loggedInUser.username}!</h2>`;
    }
} 


function handleGoogleCredentialResponse(response) {
    // Decode the JWT credential
    const decoded = parseJwt(response.credential);

    // Display user information or store it locally
    console.log(decoded);
    alert(`Welcome, ${decoded.name}!`);

    // Redirect to the profile page or perform other actions
    localStorage.setItem('googleUser', JSON.stringify(decoded));
    window.location.href = 'profile.html';
}

// Helper function to parse JWT token
function parseJwt(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
        atob(base64)
            .split('')
            .map(c => `%${('00' + c.charCodeAt(0).toString(16)).slice(-2)}`)
            .join('')
    );
    return JSON.parse(jsonPayload);
}
