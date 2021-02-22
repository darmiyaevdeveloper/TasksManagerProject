const theme = document.getElementById('theme');
const themeImage = document.getElementById('themeImage');
const navbar = document.getElementById('navbar');
const navbarImage = document.getElementById('navbarImage');
const navbaranimate = document.getElementById('navbaranimate');
const navbarAnimationImage = document.getElementById('navbarAnimationImage');
theme.onchange = function () {
  switch (theme.value) {
    case 'Light':
      theme.src = '';
      localStorage.setItem("theme", "")
      break;
    case 'Dark':
      theme.src = '';
      break;
    case 'Vibrant':
      theme.src = '';
      break;
    case 'Calm':
      theme.src = '';
      break;
  }
}