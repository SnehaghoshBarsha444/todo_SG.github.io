// const container = document.querySelector('.container');
// const registerbtn = document.querySelector('.register-btn');
// const loginbtn = document.querySelector('.login-btn');

// registerbtn.addEventListener('click', ()=>{
//     container.classList.add('active');
// });

// loginbtn.addEventListener('click', ()=>{
//     container.classList.remove('active');
// });

// Toggle between Login and Registration forms
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
    window.location.href = 'index1.html';
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
        window.location.href = 'index1.html';
    } else {
        alert('Invalid email or password.');
    }
});

// Display Username on index1.html
if (window.location.pathname.includes('index1.html')) {
    const loggedInUser = users[0]; // Assuming first user for demo
    if (loggedInUser) {
        document.body.innerHTML += `<h2>Welcome, ${loggedInUser.username}!</h2>`;
    }
} 