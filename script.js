
let categories = [
    {
      title: "Personal",
      img: "girl3.png",
    },
    {
      title: "Work",
      img: "briefcase.png",
    },
    {
      title: "Shopping",
      img: "shopping.png",
    },
    {
      title: "Coding",
      img: "web-design.png",
    },
    {
      title: "Health",
      img: "healthcare.png",
    },
    {
      title: "Fitness",
      img: "dumbbell.png",
    },
    {
      title: "Education",
      img: "education.png",
    },
    {
      title: "Finance",
      img: "saving.png",
    },
  ];
  
  let tasks = [
    {
      id: 1,
      task: "Go to market",
      category: "Shopping",
      completed: false,
    },
    {
      id: 2,
      task: "Read a chapter of a book",
      category: "Personal",
      completed: false,
    },
    {
      id: 3,
      task: "Prepare presentation for meeting",
      category: "Work",
      completed: false,
    },
    {
      id: 4,
      task: "Complete coding challenge",
      category: "Coding",
      completed: false,
    },
    {
      id: 5,
      task: "Take a 30-minute walk",
      category: "Health",
      completed: false,
    },
    {
      id: 6,
      task: "Do a 20-minute HIIT workout",
      category: "Fitness",
      completed: false,
    },
    {
      id: 7,
      task: "Watch an educational video online",
      category: "Education",
      completed: false,
    },
    {
      id: 8,
      task: "Review monthly budget",
      category: "Finance",
      completed: false,
    },
    {
      id: 9,
      task: "Buy groceries for the week",
      category: "Shopping",
      completed: false,
    },
    {
      id: 10,
      task: "Write in a journal",
      category: "Personal",
      completed: false,
    },
    {
      id: 11,
      task: "Send emails to team members",
      category: "Work",
      completed: false,
    },
    {
      id: 12,
      task: "Work on a coding side project",
      category: "Coding",
      completed: false,
    },
    {
      id: 13,
      task: "Try a new healthy recipe",
      category: "Health",
      completed: false,
    },
    {
      id: 14,
      task: "Do yoga for 15 minutes",
      category: "Fitness",
      completed: false,
    },
    {
      id: 15,
      task: "Read an article about a new topic",
      category: "Education",
      completed: false,
    },
    {
      id: 16,
      task: "Set up automatic bill payments",
      category: "Finance",
      completed: false,
    },
    // Additional tasks for each category
    {
      id: 17,
      task: "Buy new clothes",
      category: "Shopping",
      completed: false,
    },
    {
      id: 18,
      task: "Meditate for 10 minutes",
      category: "Personal",
      completed: false,
    },
    {
      id: 19,
      task: "Prepare agenda for team meeting",
      category: "Work",
      completed: false,
    },
    {
      id: 20,
      task: "Learn a new programming language",
      category: "Coding",
      completed: false,
    },
    {
      id: 21,
      task: "Try a new recipe for lunch",
      category: "Health",
      completed: false,
    },
    {
      id: 22,
      task: "Go for a run",
      category: "Fitness",
      completed: false,
    },
    {
      id: 23,
      task: "Watch a documentary",
      category: "Education",
      completed: false,
    },
    {
      id: 24,
      task: "Read 'Principal of Management' book",
      category: "Education",
      completed: false,
    },
    {
      id: 25,
      task: "Review investment portfolio",
      category: "Finance",
      completed: false,
    },
    // Add more tasks for each category as desired
  ];
  
  // Define functions
  const saveLocal = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };
  
  const getLocal = () => {
    const tasksLocal = JSON.parse(localStorage.getItem("tasks"));
    if (tasksLocal) {
      tasks = tasksLocal;
    }
  };
  
  const toggleScreen = () => {
    screenWrapper.classList.toggle("show-category");
  };
  
  const updateTotals = () => {
    const categoryTasks = tasks.filter(
      (task) =>
        task.category.toLowerCase() === selectedCategory.title.toLowerCase()
    );
    numTasks.innerHTML = `${categoryTasks.length} Tasks`;
    totalTasks.innerHTML = tasks.length;
  };
  
  const renderCategories = () => {
    categoriesContainer.innerHTML = "";
    categories.forEach((category) => {
      const categoryTasks = tasks.filter(
        (task) => task.category.toLowerCase() === category.title.toLowerCase()
      );
      const div = document.createElement("div");
      div.classList.add("category");
      div.addEventListener("click", () => {
        screenWrapper.classList.toggle("show-category");
        selectedCategory = category;
        updateTotals();
        categoryTitle.innerHTML = category.title;
        categoryImg.src = `images/${category.img}`;
        renderTasks();
      });
  
      div.innerHTML = `
                    <div class="left">
                  <img src="images/${category.img}"
                   alt="${category.title}"
                    />
                  <div class="content">
                    <h1>${category.title}</h1>
                    <p>${categoryTasks.length} Tasks</p>
                  </div>
                </div>
                <div class="options">
                  <div class="toggle-btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                      />
                    </svg>
                  </div>
                </div>
      `;
  
      categoriesContainer.appendChild(div);
    });
  };
  
  const renderTasks = () => {
    tasksContainer.innerHTML = "";
    const categoryTasks = tasks.filter(
      (task) =>
        task.category.toLowerCase() === selectedCategory.title.toLowerCase()
    );
    if (categoryTasks.length === 0) {
      tasksContainer.innerHTML = `<p class="no-tasks">No tasks added for this category</p>`;
    } else {
      categoryTasks.forEach((task) => {
        const div = document.createElement("div");
        div.classList.add("task-wrapper");
        const label = document.createElement("label");
        label.classList.add("task");
        label.setAttribute("for", task.id);
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = task.id;
        checkbox.checked = task.completed;
        checkbox.addEventListener("change", () => {
          const index = tasks.findIndex((t) => t.id === task.id);
          tasks[index].completed = !tasks[index].completed;
          saveLocal();
        });
        div.innerHTML = `
        <div class="delete">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </div>
                `;
        label.innerHTML = `
                <span class="checkmark"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </span>
                <p>${task.task}</p>
          `;
        label.prepend(checkbox);
        div.prepend(label);
        tasksContainer.appendChild(div);
  
        const deleteBtn = div.querySelector(".delete");
        deleteBtn.addEventListener("click", () => {
          const index = tasks.findIndex((t) => t.id === task.id);
          tasks.splice(index, 1);
          saveLocal();
          renderTasks();
        });
      });
  
      renderCategories();
      updateTotals();
    }
  };
  
  const toggleAddTaskForm = () => {
    addTaskWrapper.classList.toggle("active");
    blackBackdrop.classList.toggle("active");
    addTaskBtn.classList.toggle("active");
  };
  
  const addTask = (e) => {
    e.preventDefault();
    const task = taskInput.value;
    const category = categorySelect.value;
  
    if (task === "") {
      alert("Please enter a task");
    } else {
      const newTask = {
        id: tasks.length + 1,
        task,
        category,
        completed: false,
      };
      taskInput.value = "";
      tasks.push(newTask);
      saveLocal();
      toggleAddTaskForm();
      renderTasks();
    }
  };
  
  // Initialize variables and DOM elements
  let selectedCategory = categories[0];
  const categoriesContainer = document.querySelector(".categories");
  const screenWrapper = document.querySelector(".wrapper");
  //const menuBtn = document.querySelector(".menu-btn");
  const backBtn = document.querySelector(".back-btn");
  const tasksContainer = document.querySelector(".tasks");
  const numTasks = document.getElementById("num-tasks");
  const categoryTitle = document.getElementById("category-title");
  const categoryImg = document.getElementById("category-img");
  const categorySelect = document.getElementById("category-select");
  const addTaskWrapper = document.querySelector(".add-task");
  const addTaskBtn = document.querySelector(".add-task-btn");
  const taskInput = document.getElementById("task-input");
  const blackBackdrop = document.querySelector(".black-backdrop");
  const addBtn = document.querySelector(".add-btn");
  const cancelBtn = document.querySelector(".cancel-btn");
  const totalTasks = document.getElementById("total-tasks");
  
  // Attach event listeners
  //menuBtn.addEventListener("click", toggleScreen);
  backBtn.addEventListener("click", toggleScreen);
  addTaskBtn.addEventListener("click", toggleAddTaskForm);
  blackBackdrop.addEventListener("click", toggleAddTaskForm);
  addBtn.addEventListener("click", addTask);
  cancelBtn.addEventListener("click", toggleAddTaskForm);
  
  // Render initial state
  getLocal();
  renderTasks();
  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category.title.toLowerCase();
    option.textContent = category.title;
    categorySelect.appendChild(option);
  });

 


/*

// API Key for OpenAI
const API_KEY = "proj_0sfTTLyfEDnYRQllk6sUdQBO";

// Categories and tasks
let categories = [
  {
    title: "Personal",
    img: "girl3.png",
  },
  {
    title: "Work",
    img: "briefcase.png",
  },
  {
    title: "Shopping",
    img: "shopping.png",
  },
  {
    title: "Coding",
    img: "web-design.png",
  },
  {
    title: "Health",
    img: "healthcare.png",
  },
  {
    title: "Fitness",
    img: "dumbbell.png",
  },
  {
    title: "Education",
    img: "education.png",
  },
  {
    title: "Finance",
    img: "saving.png",
  },
];

let tasks = [];

// Save tasks to localStorage
const saveLocal = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

// Retrieve tasks from localStorage
const getLocal = () => {
  const tasksLocal = JSON.parse(localStorage.getItem("tasks"));
  if (tasksLocal) {
    tasks = tasksLocal;
  }
};

// Update the totals for tasks
const updateTotals = () => {
  const categoryTasks = tasks.filter(
    (task) =>
      task.category.toLowerCase() === selectedCategory.title.toLowerCase()
  );
  numTasks.innerHTML = `${categoryTasks.length} Tasks`;
  totalTasks.innerHTML = tasks.length;
};

// Render categories
const renderCategories = () => {
  categoriesContainer.innerHTML = "";
  categories.forEach((category) => {
    const categoryTasks = tasks.filter(
      (task) => task.category.toLowerCase() === category.title.toLowerCase()
    );
    const div = document.createElement("div");
    div.classList.add("category");
    div.addEventListener("click", () => {
      screenWrapper.classList.toggle("show-category");
      selectedCategory = category;
      updateTotals();
      categoryTitle.innerHTML = category.title;
      categoryImg.src = `images/${category.img}`;
      renderTasks();
    });

    div.innerHTML = `
      <div class="left">
        <img src="images/${category.img}" alt="${category.title}" />
        <div class="content">
          <h1>${category.title}</h1>
          <p>${categoryTasks.length} Tasks</p>
        </div>
      </div>
      <div class="options">
        <div class="toggle-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
            />
          </svg>
        </div>
      </div>
    `;
    categoriesContainer.appendChild(div);
  });
};

// Render tasks
const renderTasks = () => {
  tasksContainer.innerHTML = "";
  const categoryTasks = tasks.filter(
    (task) =>
      task.category.toLowerCase() === selectedCategory.title.toLowerCase()
  );
  if (categoryTasks.length === 0) {
    tasksContainer.innerHTML = `<p class="no-tasks">No tasks added for this category</p>`;
  } else {
    categoryTasks.forEach((task) => {
      const div = document.createElement("div");
      div.classList.add("task-wrapper");
      const label = document.createElement("label");
      label.classList.add("task");
      label.setAttribute("for", task.id);
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = task.id;
      checkbox.checked = task.completed;
      checkbox.addEventListener("change", () => {
        const index = tasks.findIndex((t) => t.id === task.id);
        tasks[index].completed = !tasks[index].completed;
        saveLocal();
      });
      div.innerHTML = `
        <div class="delete">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </div>
      `;
      label.innerHTML = `
        <span class="checkmark">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </span>
        <p>${task.task}</p>
      `;
      label.prepend(checkbox);
      div.prepend(label);
      tasksContainer.appendChild(div);

      const deleteBtn = div.querySelector(".delete");
      deleteBtn.addEventListener("click", () => {
        const index = tasks.findIndex((t) => t.id === task.id);
        tasks.splice(index, 1);
        saveLocal();
        renderTasks();
      });
    });
    renderCategories();
    updateTotals();
  }
};

// Fetch suggestions from OpenAI API
const fetchSuggestions = async (category) => {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are a task management assistant.",
        },
        {
          role: "user",
          content: `Suggest 5 tasks for the category "${category}"`,
        },
      ],
    }),
  });

  const data = await response.json();
  return data.choices[0].message.content.split("\n").map((task, index) => ({
    id: tasks.length + index + 1,
    task: task.trim(),
    category,
    completed: false,
  }));
};

// Add suggestions to tasks
const addSuggestions = async () => {
  const suggestions = await fetchSuggestions(selectedCategory.title);
  tasks.push(...suggestions);
  saveLocal();
  renderTasks();
};

// Initialize variables and DOM elements
let selectedCategory = categories[0];
const categoriesContainer = document.querySelector(".categories");
const screenWrapper = document.querySelector(".wrapper");
const backBtn = document.querySelector(".back-btn");
const tasksContainer = document.querySelector(".tasks");
const numTasks = document.getElementById("num-tasks");
const categoryTitle = document.getElementById("category-title");
const categoryImg = document.getElementById("category-img");
const addTaskWrapper = document.querySelector(".add-task");
const addTaskBtn = document.querySelector(".add-task-btn");
const blackBackdrop = document.querySelector(".black-backdrop");
const addBtn = document.querySelector(".add-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const totalTasks = document.getElementById("total-tasks");
const suggestionBtn = document.getElementById("suggestion-btn");

// Attach event listeners
backBtn.addEventListener("click", togglescreen);
  backBtn.addEventListener("click", () => {
 screenWrapper.classList.toggle("show-category");
});

addTaskBtn.addEventListener("click", () => {
  addTaskWrapper.classList.add("show");
  blackBackdrop.classList.add("show");
});

blackBackdrop.addEventListener("click", () => {
  addTaskWrapper.classList.remove("show");
  blackBackdrop.classList.remove("show");
});

cancelBtn.addEventListener("click", () => {
  addTaskWrapper.classList.remove("show");
  blackBackdrop.classList.remove("show");
});

addBtn.addEventListener("click", () => {
  const input = document.getElementById("task");
  const taskText = input.value.trim();

  if (!taskText) return alert("Task cannot be empty!");
  
  const newTask = {
    id: tasks.length + 1,
    task: taskText,
    category: selectedCategory.title,
    completed: false,
  };

  tasks.push(newTask);
  saveLocal();
  renderTasks();

  input.value = "";
  addTaskWrapper.classList.remove("show");
  blackBackdrop.classList.remove("show");
});

// Handle suggestion button click
suggestionBtn.addEventListener("click", async () => {
  suggestionBtn.textContent = "Fetching...";
  suggestionBtn.disabled = true;

  try {
    await addSuggestions();
    alert("Suggestions added successfully!");
  } catch (error) {
    console.error("Error fetching suggestions:", error);
    alert("Failed to fetch suggestions. Please try again.");
  }

  suggestionBtn.textContent = "Get Suggestions";
  suggestionBtn.disabled = false;
});

// Load tasks from local storage and initialize
const init = () => {
  getLocal();
  renderCategories();
  updateTotals();
  renderTasks();
};

init();
*/