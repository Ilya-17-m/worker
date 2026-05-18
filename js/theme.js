import darkThemeStyle from './dark-theme.js'
import lightThemeStyle from './light-theme.js';


function checkTheme() {
    return localStorage.getItem('theme') || 'dark';
};

const buttonEl = document.getElementById('button-theme');
   

buttonEl.addEventListener('click', function () {

  const themeEL = document.getElementById("theme-seluette");
  const programBlock = document.getElementById("program-style-img");
  const imgEl = document.createElement('img');

  const theme = checkTheme()

  programBlock.innerHTML = ''
    
  if (theme === 'dark') {

      localStorage.setItem('theme', 'light')
      themeEL.className = 'fa-regular fa-sun'
      imgEl.src = 'img/program-light.jpeg'
      imgEl.className = 'prog-img'
      programBlock.append(imgEl)

      lightThemeStyle()
            
  } else {
            
    localStorage.setItem('theme', 'dark')
    themeEL.className = 'fa-solid fa-moon'
    imgEl.src = 'img/program-dark.jpeg'
    imgEl.className = 'prog-img'
    programBlock.append(imgEl)

    const firstSec = document.getElementById('first-section')
    firstSec.className = 'first-section greeting'
    darkThemeStyle()

  }

});


export function defaultTheme() {
    const programBlock = document.getElementById("program-style-img");
    programBlock.innerHTML = ''

    const imgEl = document.createElement('img');
    imgEl.src = 'img/program-dark.jpeg'
    imgEl.className = 'prog-img'
    programBlock.append(imgEl)

    darkThemeStyle()

    return localStorage.setItem('theme', 'dark')
}