function showRegister() {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("registerForm").style.display = "block";
}

function showLogin() {
  document.getElementById("registerForm").style.display = "none";
  document.getElementById("loginForm").style.display = "block";
}

document.getElementById("login").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  // Simulated login check
  if (email && password) {
    localStorage.setItem("user", JSON.stringify({ email, role: "patient" }));
    window.location.reload();
  } else {
    document.getElementById("loginMessage").innerText = "Invalid credentials";
  }
});

document.getElementById("register").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("registerName").value;
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;
  const role = document.getElementById("registerRole").value;

  // Simulated registration
  if (name && email && password) {
    localStorage.setItem("user", JSON.stringify({ name, email, role }));
    showLogin();
    document.getElementById("registerMessage").innerText =
      "Registered successfully!";
  }
});
