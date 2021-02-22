const theme = document.getElementById('theme');
const themeImage = document.getElementById('themeImage');
theme.onchange = function () {
  switch (theme.value) {
    case 'Light':
      theme.src = '';
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