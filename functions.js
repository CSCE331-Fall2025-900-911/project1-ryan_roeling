function applyTheme(isDefault) {
  const themeLink = document.getElementById('themeStylesheet');
  const profileImage = document.getElementById('profileImage');

  if (isDefault) {
    themeLink.href = "style.css";
    if (profileImage) profileImage.src = "profile-light.jpg";
  } else {
    themeLink.href = "alternative.css";
    if (profileImage) profileImage.src = "profile-dark.jpg";
  }
}

function button1() {
  let current = localStorage.getItem("theme") || "default";
  let isDefault = current === "default"; 

  isDefault = !isDefault;

  localStorage.setItem("theme", isDefault ? "default" : "alternate");
  applyTheme(isDefault);
}

window.onload = () => {
  const saved = localStorage.getItem("theme") || "default";
  applyTheme(saved === "default"); 
};