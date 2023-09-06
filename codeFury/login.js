document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    // You can replace the hardcoded username and password with your authentication logic
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'Zombie123' && password === 'pardon') {
        // Redirect to the home page on successful login
        window.location.href = 'home.html';
    } else {
        // Display an error message or handle unsuccessful login
        alert('Invalid username or password. Please try again.');
    }
});
