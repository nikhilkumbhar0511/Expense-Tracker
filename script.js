// script.js

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');

  if (loginForm) {
    loginForm.addEventListener('submit', handleLogin);
  }

  if (signupForm) {
    signupForm.addEventListener('submit', handleSignup);
  }
});

const users = JSON.parse(localStorage.getItem('users')) || [];

function handleSignup(e) {
  e.preventDefault();
  const username = document.getElementById('signup-username').value;
  const password = document.getElementById('signup-password').value;

  if (username === '' || password === '') {
    alert('Please fill in all fields');
    return;
  }

  const userExists = users.some(user => user.username === username);

  if (userExists) {
    alert('Username already taken');
    return;
  }

  users.push({ username, password });
  localStorage.setItem('users', JSON.stringify(users));
  alert('Signup successful');
  window.location.href = 'login.html';  // Redirect to login page after successful signup
}

function handleLogin(e) {
  e.preventDefault();
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;

  const user = users.find(user => user.username === username && user.password === password);

  if (!user) {
    alert('Invalid username or password');
    return;
  }

  alert('Login successful');
  window.location.href = 'index1.html';  // Redirect to the main page after successful login
}
