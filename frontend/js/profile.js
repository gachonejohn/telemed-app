function displayProfile() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    document.getElementById("profileName").innerText = user.name;
    document.getElementById("profileEmail").innerText = user.email;
    document.getElementById("profileRole").innerText = user.role;
  }
}

function editProfile() {
  document.getElementById("editProfileForm").style.display = "block";
  document.getElementById("editName").value = JSON.parse(
    localStorage.getItem("user")
  ).name;
}

document.getElementById("editProfile").addEventListener("submit", (e) => {
  e.preventDefault();
  const newName = document.getElementById("editName").value;
  const user = JSON.parse(localStorage.getItem("user"));
  user.name = newName;
  localStorage.setItem("user", JSON.stringify(user));
  displayProfile();
  document.getElementById("editProfileForm").style.display = "none";
});
