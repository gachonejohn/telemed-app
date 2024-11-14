function checkAuth() {
  const user = localStorage.getItem("user");
  if (user) {
    document.getElementById("auth").style.display = "none";
    document.getElementById("home").style.display = "block";
    displayProfile();
  } else {
    document.getElementById("auth").style.display = "block";
    document.getElementById("home").style.display = "none";
  }
}

function logout() {
  localStorage.removeItem("user");
  window.location.reload();
}

document.addEventListener("DOMContentLoaded", checkAuth);
