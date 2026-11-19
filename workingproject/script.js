const container = document.querySelector('.container');

const LoginLink = document.querySelector('.SignInLink');
const RegisterLink = document.querySelector('.SignUpLink');

// Switch Login ↔ Register
RegisterLink.addEventListener('click', () => {
    container.classList.add('active');
});

LoginLink.addEventListener('click', () => {
    container.classList.remove('active');
});

// Login → Dashboard
const loginForm = document.querySelector('.login form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

const username = document.getElementById("loginUsername").value;
const password = document.getElementById("loginPassword").value;
    if (username !== "" && password !== "") {
        localStorage.setItem("username", username);

        // Open Dashboard
        window.location.href = "index.html";
    } else {
        alert("Please enter Username and Password");
    }
});