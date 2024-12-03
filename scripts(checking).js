// // let users = JSON.parse(localStorage.getItem('users')) || [];

// // document.getElementById('create-account-form').addEventListener('submit', function(event) {
// //     event.preventDefault();
    
// //     const username = document.getElementById('username').value;
// //     const email = document.getElementById('email').value;
// //     const password = document.getElementById('password').value;

// //     const newUser  = { username, email, password };
// //     users.push(newUser );
// //     localStorage.setItem('users', JSON.stringify(users));

// //     alert('Account created successfully!');
// //     window.location.href = 'index1.html';
// // });

// // document.getElementById('login-form').addEventListener('submit', function(event) {
// //     event.preventDefault();

// //     const email = document.getElementById('login-email').value;
// //     const password = document.getElementById('login-password').value;

// //     const user = users.find(user => user.email === email && user.password === password);

// //     if (user) {
// //         alert('Login successful!');
// //         window.location.href = 'index1.html';
// //     } else {
// //         alert('Invalid email or password.');
// //     }
// // });

// // // Display username on index1.html
// // if (window.location.pathname.includes('index1.html')) {
// //     const loggedInUser  = users[0]; // Assuming the first user is logged in for demonstration
// //     if (loggedInUser ) {
// //         document.body.innerHTML += `<h2>Welcome, ${loggedInUser .username}!</h2>`;
// //     }
// // }


// let categories = [
//     {
//       title: "Personal",
//       img: "girl3.png",
//     },
//     {
//       title: "Work",
//       img: "briefcase.png",
//     },
//     {
//       title: "Shopping",
//       img: "shopping.png",
//     },
//     {
//       title: "Coding",
//       img: "web-design.png",
//     },
//     {
//       title: "Health",
//       img: "healthcare.png",
//     },
//     {
//       title: "Fitness",
//       img: "dumbbell.png",
//     },
//     {
//       title: "Education",
//       img: "education.png",
//     },
//     {
//       title: "Finance",
//       img: "saving.png",
//     },
//   ];
  
//   let tasks = [
//     {
//       id: 1,
//       task: "Go to market",
//       category: "Shopping",
//       completed: false,
//     },
//     {
//       id: 2,
//       task: "Read a chapter of a book",
//       category: "Personal",
//       completed: false,
//     },
//     {
//       id: 3,
//       task: "Prepare presentation for meeting",
//       category: "Work",
//       completed: false,
//     },
//     {
//       id: 4,
//       task: "Complete coding challenge",
//       category: "Coding",
//       completed: false,
//     },
//     {
//       id: 5,
//       task: "Take a 30-minute walk",
//       category: "Health",
//       completed: false,
//     },
//     {
//       id: 6,
//       task: "Do a 20-minute HIIT workout",
//       category: "Fitness",
//       completed: false,
//     },
//     {
//       id: 7,
//       task: "Watch an educational video online",
//       category: "Education",
//       completed: false,
//     },
//     {
//       id: 8,
//       task: "Review monthly budget",
//       category: "Finance",
//       completed: false,
//     },
//     {
//       id: 9,
//       task: "Buy groceries for the week",
//       category: "Shopping",
//       completed: false,
//     },
//     {
//       id: 10,
//       task: "Write in a journal",
//       category: "Personal",
//       completed: false,
//     },
//     {
//       id: 11,
//       task: "Send emails to team members",
//       category: "Work",
//       completed: false,
//     },
//     {
//       id: 12,
//       task: "Work on a coding side project",
//       category: "Coding",
//       completed: false,
//     },
//     {
//       id: 13,
//       task: "Try a new healthy recipe",
//       category: "Health",
//       completed: false,
//     },
//     {
//       id: 14,
//       task: "Do yoga for 15 minutes",
//       category: "Fitness",
//       completed: false,
//     },
//     {
//       id: 15,
//       task: "Read an article about a new topic",
//       category: "Education",
//       completed: false,
//     },
//     {
//       id: 16,
//       task: "Set up automatic bill payments",
//       category: "Finance",
//       completed: false,
//     },
//     // Additional tasks for each category
//     {
//       id: 17,
//       task: "Buy new clothes",
//       category: "Shopping",
//       completed: false,
//     },
//     {
//       id: 18,
//       task: "Meditate for 10 minutes",
//       category: "Personal",
//       completed: false,
//     },
//     {
//       id: 19,
//       task: "Prepare agenda for team meeting",
//       category: "Work",
//       completed: false,
//     },
//     {
//       id: 20,
//       task: "Learn a new programming language",
//       category: "Coding",
//       completed: false,
//     },
//     {
//       id: 21,
//       task: "Try a new recipe for lunch",
//       category: "Health",
//       completed: false,
//     },
//     {
//       id: 22,
//       task: "Go for a run",
//       category: "Fitness",
//       completed: false,
//     },
//     {
//       id: 23,
//       task: "Watch a documentary",
//       category: "Education",
//       completed: false,
//     },
//     {
//       id: 24,
//       task: "Read 'Principal of Management' book",
//       category: "Education",
//       completed: false,
//     },
//     {
//       id: 25,
//       task: "Review investment portfolio",
//       category: "Finance",
//       completed: false,
//     },
//     // Add more tasks for each category as desired
//   ];
  
//   // Define functions
//   const saveLocal = () => {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   };
  
//   const getLocal = () => {
//     const tasksLocal = JSON.parse(localStorage.getItem("tasks"));
//     if (tasksLocal) {
//       tasks = tasksLocal;
//     }
//   };
  
//   const toggleScreen = () => {
//     screenWrapper.classList.toggle("show-category");
//   };
  
//   const updateTotals = () => {
//     const categoryTasks = tasks.filter(
//       (task) =>
//         task.category.toLowerCase() === selectedCategory.title.toLowerCase()
//     );
//     numTasks.innerHTML = `${categoryTasks.length} Tasks`;
//     totalTasks.innerHTML = tasks.length;
//   };
  
//   const renderCategories = () => {
//     categoriesContainer.innerHTML = "";
//     categories.forEach((category) => {
//       const categoryTasks = tasks.filter(
//         (task) => task.category.toLowerCase() === category.title.toLowerCase()
//       );
//       const div = document.createElement("div");
//       div.classList.add("category");
//       div.addEventListener("click", () => {
//         screenWrapper.classList.toggle("show-category");
//         selectedCategory = category;
//         updateTotals();
//         categoryTitle.innerHTML = category.title;
//         categoryImg.src = `images/${category.img}`;
//         renderTasks();
//       });
  
//       div.innerHTML = `
//                     <div class="left">
//                   <img src="images/${category.img}"
//                    alt="${category.title}"
//                     />
//                   <div class="content">
//                     <h1>${category.title}</h1>
//                     <p>${categoryTasks.length} Tasks</p>
//                   </div>
//                 </div>
//                 <div class="options">
//                   <div class="toggle-btn">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke-width="1.5"
//                       stroke="currentColor"
//                       class="w-6 h-6"
//                     >
//                       <path
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
//                       />
//                     </svg>
//                   </div>
//                 </div>
//       `;
  
//       categoriesContainer.appendChild(div);
//     });
//   };
  
//   // const renderTasks = () => {
//   //   tasksContainer.innerHTML = "";
//   //   const categoryTasks = tasks.filter(
//   //     (task) =>
//   //       task.category.toLowerCase() === selectedCategory.title.toLowerCase()
//   //   );
//   //   if (categoryTasks.length === 0) {
//   //     tasksContainer.innerHTML = `<p class="no-tasks">No tasks added for this category</p>`;
//   //   } else {
//   //     categoryTasks.forEach((task) => {
//   //       const div = document.createElement("div");
//   //       div.classList.add("task-wrapper");
//   //       const label = document.createElement("label");
//   //       label.classList.add("task");
//   //       label.setAttribute("for", task.id);
//   //       const checkbox = document.createElement("input");
//   //       checkbox.type = "checkbox";
//   //       checkbox.id = task.id;
//   //       checkbox.checked = task.completed;
//   //       checkbox.addEventListener("change", () => {
//   //         const index = tasks.findIndex((t) => t.id === task.id);
//   //         tasks[index].completed = !tasks[index].completed;
//   //         saveLocal();
//   //       });
//   //       div.innerHTML = `
//   //       <div class="delete">
//   //                 <svg
//   //                   xmlns="http://www.w3.org/2000/svg"
//   //                   fill="none"
//   //                   viewBox="0 0 24 24"
//   //                   stroke-width="1.5"
//   //                   stroke="currentColor"
//   //                   class="w-6 h-6"
//   //                 >
//   //                   <path
//   //                     stroke-linecap="round"
//   //                     stroke-linejoin="round"
//   //                     d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
//   //                   />
//   //                 </svg>
//   //               </div>
//   //               `;
//   //       label.innerHTML = `
//   //               <span class="checkmark"
//   //                 ><svg
//   //                   xmlns="http://www.w3.org/2000/svg"
//   //                   fill="none"
//   //                   viewBox="0 0 24 24"
//   //                   stroke-width="1.5"
//   //                   stroke="currentColor"
//   //                   class="w-6 h-6"
//   //                 >
//   //                   <path
//   //                     stroke-linecap="round"
//   //                     stroke-linejoin="round"
//   //                     d="M4.5 12.75l6 6 9-13.5"
//   //                   />
//   //                 </svg>
//   //               </span>
//   //               <p>${task.task}</p>
//   //         `;
//   //       label.prepend(checkbox);
//   //       div.prepend(label);
//   //       tasksContainer.appendChild(div);
  
//   //       const deleteBtn = div.querySelector(".delete");
//   //       deleteBtn.addEventListener("click", () => {
//   //         const index = tasks.findIndex((t) => t.id === task.id);
//   //         tasks.splice(index, 1);
//   //         saveLocal();
//   //         renderTasks();
//   //       });
//   //     });
  
//   //     renderCategories();
//   //     updateTotals();
//   //   }
//   // };

//   const renderTasks = () => {
//     // Clear previous tasks
//     tasksContainer.innerHTML = ""; 
//     // Filter tasks based on the selected category
//     const categoryTasks = tasks.filter(
//         (task) => task.category.toLowerCase() === selectedCategory.title.toLowerCase()
//     );

//     // Check if there are no tasks for the selected category
//     if (categoryTasks.length === 0) {
//         tasksContainer.innerHTML = `<p class="no-tasks">No tasks added for this category</p>`;
//     } else {
//         // Render each task
//         categoryTasks.forEach((task) => {
//             const div = document.createElement("div");
//             div.classList.add("task-wrapper");

//             // Create label for task
//             const label = document.createElement("label");
//             label.classList.add("task");
//             label.setAttribute("for", task.id);

//             // Create checkbox for task completion
//             const checkbox = document.createElement("input");
//             checkbox.type = "checkbox";
//             checkbox.id = task.id;
//             checkbox.checked = task.completed;
//             checkbox.addEventListener("change", () => {
//                 const index = tasks.findIndex((t) => t.id === task.id);
//                 tasks[index].completed = !tasks[index].completed; // Toggle completion
//                 saveLocal(); // Save the updated task list
//             });

//             // Create delete button
//             const deleteBtn = document.createElement("div");
//             deleteBtn.classList.add("delete");
//             deleteBtn.innerHTML = `
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
//                     <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
//                 </svg>
//             `;
//             // Add event listener for delete button
//             deleteBtn.addEventListener("click", () => {
//                 const index = tasks.findIndex((t) => t.id === task.id);
//                 tasks.splice(index, 1); // Remove task from array
//                 saveLocal(); // Save updated task list
//                 renderTasks(); // Re-render tasks
//             });

//             // Construct the label with the checkbox and task description
//             label.innerHTML = `
//                 <span class="checkmark">
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
//                         <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
//                     </svg>
//                 </span>
//                 <p>${task.task}</p>
//             `;
//             label.prepend(checkbox); // Add checkbox to label
//             div.appendChild(label); // Add label to task wrapper
//             div.appendChild(deleteBtn); // Add delete button to task wrapper
//             tasksContainer.appendChild(div); // Add task wrapper to tasks container
//         });

//         // Update categories and totals after rendering tasks
//         renderCategories();
//         updateTotals();
//     }
// };
  
//   const toggleAddTaskForm = () => {
//     addTaskWrapper.classList.toggle("active");
//     blackBackdrop.classList.toggle("active");
//     addTaskBtn.classList.toggle("active");
//   };
  
//   const addTask = (e) => {
//     e.preventDefault();
//     const task = taskInput.value;
//     const category = categorySelect.value;
  
//     if (task === "") {
//       alert("Please enter a task");
//     } else {
//       const newTask = {
//         id: tasks.length + 1,
//         task,
//         category,
//         completed: false,
//       };
//       taskInput.value = "";
//       tasks.push(newTask);
//       saveLocal();
//       toggleAddTaskForm();
//       renderTasks();
//     }
//   };
  
// //   const renderTasks = () => {
// //     tasksContainer.innerHTML = ""; // Clear previous tasks
// //     const categoryTasks = tasks.filter(
// //         (task) => task.category.toLowerCase() === selectedCategory.title.toLowerCase()
// //     );

// //     if (categoryTasks.length === 0) {
// //         tasksContainer.innerHTML = `<p class="no-tasks">No tasks added for this category</p>`;
// //     } else {
// //         categoryTasks.forEach((task) => {
// //             const div = document.createElement("div");
// //             div.classList.add("task-wrapper");
// //             const label = document.createElement("label");
// //             label.classList.add("task");
// //             label.setAttribute("for", task.id);
// //             const checkbox = document.createElement("input");
// //             checkbox.type = "checkbox";
// //             checkbox.id = task.id;
// //             checkbox.checked = task.completed;
// //             checkbox.addEventListener("change", () => {
// //                 const index = tasks.findIndex((t) => t.id === task.id);
// //                 tasks[index].completed = !tasks[index].completed;
// //                 saveLocal(); // Save the updated task list
// //             });

// //             label.innerHTML = `
// //                 <span class="checkmark"></span>
// //                 <p>${task.task}</p>
// //             `;
// //             label.prepend(checkbox);
// //             div.appendChild(label);
// //             tasksContainer.appendChild(div);
// //         });
// //     }
// // };

//   // Initialize variables and DOM elements
//   let selectedCategory = categories[0];
//   const categoriesContainer = document.querySelector(".categories");
//   const screenWrapper = document.querySelector(".wrapper");
//   const menuBtn = document.querySelector(".menu-btn");
//   const backBtn = document.querySelector(".back-btn");
//   const tasksContainer = document.querySelector(".tasks");
//   const numTasks = document.getElementById("num-tasks");
//   const categoryTitle = document.getElementById("category-title");
//   const categoryImg = document.getElementById("category-img");
//   const categorySelect = document.getElementById("category-select");
//   const addTaskWrapper = document.querySelector(".add-task");
//   const addTaskBtn = document.querySelector(".add-task-btn");
//   const taskInput = document.getElementById("task-input");
//   const blackBackdrop = document.querySelector(".black-backdrop");
//   const addBtn = document.querySelector(".add-btn");
//   const cancelBtn = document.querySelector(".cancel-btn");
//   const totalTasks = document.getElementById("total-tasks");
  
//   // Attach event listeners
//   menuBtn.addEventListener("click", toggleScreen);
//   backBtn.addEventListener("click", toggleScreen);
//   addTaskBtn.addEventListener("click", toggleAddTaskForm);
//   blackBackdrop.addEventListener("click", toggleAddTaskForm);
//   addBtn.addEventListener("click", addTask);
//   cancelBtn.addEventListener("click", toggleAddTaskForm);
  
//   // Render initial state
//   getLocal();
//   renderTasks();
//   // categories.forEach((category) => {
//   //   const option = document.createElement("option");
//   //   option.value = category.title.toLowerCase();
//   //   option.textContent = category.title;
//   //   categorySelect.appendChild(option);
//   //});
//   categories.forEach((category) => {
//     const div = document.createElement("div");
//     div.classList.add("category");
//     div.addEventListener("click", () => {
//         selectedCategory = category; // Set selected category
//         updateTotals(); // Update task count display
//         categoryTitle.innerHTML = category.title; // Update category title
//         renderTasks(); // Render tasks for the selected category
//     });
//     // Append category div to categoriesContainer
// });




const calendar = document.querySelector(".calendar"),
  date = document.querySelector(".date"),
  daysContainer = document.querySelector(".days"),
  prev = document.querySelector(".prev"),
  next = document.querySelector(".next"),
  todayBtn = document.querySelector(".today-btn"),
  gotoBtn = document.querySelector(".goto-btn"),
  dateInput = document.querySelector(".date-input"),
  eventDay = document.querySelector(".event-day"),
  eventDate = document.querySelector(".event-date"),
  eventsContainer = document.querySelector(".events"),
  addEventBtn = document.querySelector(".add-event"),
  addEventWrapper = document.querySelector(".add-event-wrapper "),
  addEventCloseBtn = document.querySelector(".close "),
  addEventTitle = document.querySelector(".event-name "),
  addEventFrom = document.querySelector(".event-time-from "),
  addEventTo = document.querySelector(".event-time-to "),
  addEventSubmit = document.querySelector(".add-event-btn ");

let today = new Date();
let activeDay;
let month = today.getMonth();
let year = today.getFullYear();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// const eventsArr = [
//   {
//     day: 13,
//     month: 11,
//     year: 2022,
//     events: [
//       {
//         title: "Event 1 lorem ipsun dolar sit genfa tersd dsad ",
//         time: "10:00 AM",
//       },
//       {
//         title: "Event 2",
//         time: "11:00 AM",
//       },
//     ],
//   },
// ];

const eventsArr = [];
getEvents();
console.log(eventsArr);

//function to add days in days with class day and prev-date next-date on previous month and next month days and active on today
function initCalendar() {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const prevLastDay = new Date(year, month, 0);
  const prevDays = prevLastDay.getDate();
  const lastDate = lastDay.getDate();
  const day = firstDay.getDay();
  const nextDays = 7 - lastDay.getDay() - 1;

  date.innerHTML = months[month] + " " + year;

  let days = "";

  for (let x = day; x > 0; x--) {
    days += `<div class="day prev-date">${prevDays - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDate; i++) {
    //check if event is present on that day
    let event = false;
    eventsArr.forEach((eventObj) => {
      if (
        eventObj.day === i &&
        eventObj.month === month + 1 &&
        eventObj.year === year
      ) {
        event = true;
      }
    });
    if (
      i === new Date().getDate() &&
      year === new Date().getFullYear() &&
      month === new Date().getMonth()
    ) {
      activeDay = i;
      getActiveDay(i);
      updateEvents(i);
      if (event) {
        days += `<div class="day today active event">${i}</div>`;
      } else {
        days += `<div class="day today active">${i}</div>`;
      }
    } else {
      if (event) {
        days += `<div class="day event">${i}</div>`;
      } else {
        days += `<div class="day ">${i}</div>`;
      }
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="day next-date">${j}</div>`;
  }
  daysContainer.innerHTML = days;
  addListner();
}

//function to add month and year on prev and next button
function prevMonth() {
  month--;
  if (month < 0) {
    month = 11;
    year--;
  }
  initCalendar();
}

function nextMonth() {
  month++;
  if (month > 11) {
    month = 0;
    year++;
  }
  initCalendar();
}

prev.addEventListener("click", prevMonth);
next.addEventListener("click", nextMonth);

initCalendar();

//function to add active on day
function addListner() {
  const days = document.querySelectorAll(".day");
  days.forEach((day) => {
    day.addEventListener("click", (e) => {
      getActiveDay(e.target.innerHTML);
      updateEvents(Number(e.target.innerHTML));
      activeDay = Number(e.target.innerHTML);
      //remove active
      days.forEach((day) => {
        day.classList.remove("active");
      });
      //if clicked prev-date or next-date switch to that month
      if (e.target.classList.contains("prev-date")) {
        prevMonth();
        //add active to clicked day afte month is change
        setTimeout(() => {
          //add active where no prev-date or next-date
          const days = document.querySelectorAll(".day");
          days.forEach((day) => {
            if (
              !day.classList.contains("prev-date") &&
              day.innerHTML === e.target.innerHTML
            ) {
              day.classList.add("active");
            }
          });
        }, 100);
      } else if (e.target.classList.contains("next-date")) {
        nextMonth();
        //add active to clicked day afte month is changed
        setTimeout(() => {
          const days = document.querySelectorAll(".day");
          days.forEach((day) => {
            if (
              !day.classList.contains("next-date") &&
              day.innerHTML === e.target.innerHTML
            ) {
              day.classList.add("active");
            }
          });
        }, 100);
      } else {
        e.target.classList.add("active");
      }
    });
  });
}

todayBtn.addEventListener("click", () => {
  today = new Date();
  month = today.getMonth();
  year = today.getFullYear();
  initCalendar();
});

dateInput.addEventListener("input", (e) => {
  dateInput.value = dateInput.value.replace(/[^0-9/]/g, "");
  if (dateInput.value.length === 2) {
    dateInput.value += "/";
  }
  if (dateInput.value.length > 7) {
    dateInput.value = dateInput.value.slice(0, 7);
  }
  if (e.inputType === "deleteContentBackward") {
    if (dateInput.value.length === 3) {
      dateInput.value = dateInput.value.slice(0, 2);
    }
  }
});

gotoBtn.addEventListener("click", gotoDate);

function gotoDate() {
  console.log("here");
  const dateArr = dateInput.value.split("/");
  if (dateArr.length === 2) {
    if (dateArr[0] > 0 && dateArr[0] < 13 && dateArr[1].length === 4) {
      month = dateArr[0] - 1;
      year = dateArr[1];
      initCalendar();
      return;
    }
  }
  alert("Invalid Date");
}

//function get active day day name and date and update eventday eventdate
function getActiveDay(date) {
  const day = new Date(year, month, date);
  const dayName = day.toString().split(" ")[0];
  eventDay.innerHTML = dayName;
  eventDate.innerHTML = date + " " + months[month] + " " + year;
}

//function update events when a day is active
function updateEvents(date) {
  let events = "";
  eventsArr.forEach((event) => {
    if (
      date === event.day &&
      month + 1 === event.month &&
      year === event.year
    ) {
      event.events.forEach((event) => {
        events += `<div class="event">
            <div class="title">
              <i class="fas fa-circle"></i>
              <h3 class="event-title">${event.title}</h3>
            </div>
            <div class="event-time">
              <span class="event-time">${event.time}</span>
            </div>
        </div>`;
      });
    }
  });
  if (events === "") {
    events = `<div class="no-event">
            <h3>No Events</h3>
        </div>`;
  }
  eventsContainer.innerHTML = events;
  saveEvents();
}

//function to add event
addEventBtn.addEventListener("click", () => {
  addEventWrapper.classList.toggle("active");
});

addEventCloseBtn.addEventListener("click", () => {
  addEventWrapper.classList.remove("active");
});

document.addEventListener("click", (e) => {
  if (e.target !== addEventBtn && !addEventWrapper.contains(e.target)) {
    addEventWrapper.classList.remove("active");
  }
});

//allow 50 chars in eventtitle
addEventTitle.addEventListener("input", (e) => {
  addEventTitle.value = addEventTitle.value.slice(0, 60);
});

function defineProperty() {
  var osccred = document.createElement("div");
  osccred.innerHTML =
    "A Project By <a href='https://www.youtube.com/channel/UCiUtBDVaSmMGKxg1HYeK-BQ' target=_blank>Open Source Coding</a>";
  osccred.style.position = "absolute";
  osccred.style.bottom = "0";
  osccred.style.right = "0";
  osccred.style.fontSize = "10px";
  osccred.style.color = "#ccc";
  osccred.style.fontFamily = "sans-serif";
  osccred.style.padding = "5px";
  osccred.style.background = "#fff";
  osccred.style.borderTopLeftRadius = "5px";
  osccred.style.borderBottomRightRadius = "5px";
  osccred.style.boxShadow = "0 0 5px #ccc";
  document.body.appendChild(osccred);
}

defineProperty();

//allow only time in eventtime from and to
addEventFrom.addEventListener("input", (e) => {
  addEventFrom.value = addEventFrom.value.replace(/[^0-9:]/g, "");
  if (addEventFrom.value.length === 2) {
    addEventFrom.value += ":";
  }
  if (addEventFrom.value.length > 5) {
    addEventFrom.value = addEventFrom.value.slice(0, 5);
  }
});

addEventTo.addEventListener("input", (e) => {
  addEventTo.value = addEventTo.value.replace(/[^0-9:]/g, "");
  if (addEventTo.value.length === 2) {
    addEventTo.value += ":";
  }
  if (addEventTo.value.length > 5) {
    addEventTo.value = addEventTo.value.slice(0, 5);
  }
});

//function to add event to eventsArr
addEventSubmit.addEventListener("click", () => {
  const eventTitle = addEventTitle.value;
  const eventTimeFrom = addEventFrom.value;
  const eventTimeTo = addEventTo.value;
  if (eventTitle === "" || eventTimeFrom === "" || eventTimeTo === "") {
    alert("Please fill all the fields");
    return;
  }

  //check correct time format 24 hour
  const timeFromArr = eventTimeFrom.split(":");
  const timeToArr = eventTimeTo.split(":");
  if (
    timeFromArr.length !== 2 ||
    timeToArr.length !== 2 ||
    timeFromArr[0] > 23 ||
    timeFromArr[1] > 59 ||
    timeToArr[0] > 23 ||
    timeToArr[1] > 59
  ) {
    alert("Invalid Time Format");
    return;
  }

  const timeFrom = convertTime(eventTimeFrom);
  const timeTo = convertTime(eventTimeTo);

  //check if event is already added
  let eventExist = false;
  eventsArr.forEach((event) => {
    if (
      event.day === activeDay &&
      event.month === month + 1 &&
      event.year === year
    ) {
      event.events.forEach((event) => {
        if (event.title === eventTitle) {
          eventExist = true;
        }
      });
    }
  });
  if (eventExist) {
    alert("Event already added");
    return;
  }
  const newEvent = {
    title: eventTitle,
    time: timeFrom + " - " + timeTo,
  };
  console.log(newEvent);
  console.log(activeDay);
  let eventAdded = false;
  if (eventsArr.length > 0) {
    eventsArr.forEach((item) => {
      if (
        item.day === activeDay &&
        item.month === month + 1 &&
        item.year === year
      ) {
        item.events.push(newEvent);
        eventAdded = true;
      }
    });
  }

  if (!eventAdded) {
    eventsArr.push({
      day: activeDay,
      month: month + 1,
      year: year,
      events: [newEvent],
    });
  }

  console.log(eventsArr);
  addEventWrapper.classList.remove("active");
  addEventTitle.value = "";
  addEventFrom.value = "";
  addEventTo.value = "";
  updateEvents(activeDay);
  //select active day and add event class if not added
  const activeDayEl = document.querySelector(".day.active");
  if (!activeDayEl.classList.contains("event")) {
    activeDayEl.classList.add("event");
  }
});

//function to delete event when clicked on event
eventsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("event")) {
    if (confirm("Are you sure you want to delete this event?")) {
      const eventTitle = e.target.children[0].children[1].innerHTML;
      eventsArr.forEach((event) => {
        if (
          event.day === activeDay &&
          event.month === month + 1 &&
          event.year === year
        ) {
          event.events.forEach((item, index) => {
            if (item.title === eventTitle) {
              event.events.splice(index, 1);
            }
          });
          //if no events left in a day then remove that day from eventsArr
          if (event.events.length === 0) {
            eventsArr.splice(eventsArr.indexOf(event), 1);
            //remove event class from day
            const activeDayEl = document.querySelector(".day.active");
            if (activeDayEl.classList.contains("event")) {
              activeDayEl.classList.remove("event");
            }
          }
        }
      });
      updateEvents(activeDay);
    }
  }
});

//function to save events in local storage
function saveEvents() {
  localStorage.setItem("events", JSON.stringify(eventsArr));
}

//function to get events from local storage
function getEvents() {
  //check if events are already saved in local storage then return event else nothing
  if (localStorage.getItem("events") === null) {
    return;
  }
  eventsArr.push(...JSON.parse(localStorage.getItem("events")));
}

function convertTime(time) {
  //convert time to 24 hour format
  let timeArr = time.split(":");
  let timeHour = timeArr[0];
  let timeMin = timeArr[1];
  let timeFormat = timeHour >= 12 ? "PM" : "AM";
  timeHour = timeHour % 12 || 12;
  time = timeHour + ":" + timeMin + " " + timeFormat;
  return time;
}