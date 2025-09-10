let isDefault = true;

function button1() {
   const themeLink = document.getElementById('themeStylesheet');

   if(isDefault) {
    themeLink.href = "alternative.css";
   }
   else {
    themeLink.href = 'style.css';
   }

   isDefault = !isDefault;
}
