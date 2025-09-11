function applyTheme(isDefault) {
  const themeLink = document.getElementById('themeStylesheet');
  const profileImage = document.getElementById('profileImage');

  if (isDefault) {
    themeLink.href = "style.css";
    if (profileImage) profileImage.src = "images/profile-light.jpg";
  } else {
    themeLink.href = "alternative.css";
    if (profileImage) profileImage.src = "images/profile-dark.jpg";
  }
}

function button1() {
  let isDefault = localStorage.getItem("theme") === "default";
  isDefault = !isDefault; 
  localStorage.setItem("theme", isDefault ? "default" : "alternate");
  applyTheme(isDefault);
}

window.onload = () => {
  const saved = localStorage.getItem("theme");
  applyTheme(saved !== "alternate"); 
};