import darkThemeStyle from './dark-theme.js'
import lightThemeStyle from './light-theme.js';


const btnEl = document.querySelector('#button-theme');


function checkTheme() {
    const theme = localStorage.getItem('theme')
    if (theme) {
        return localStorage.getItem('theme');
    }

    localStorage.setItem('theme', 'dark');
    return localStorage.getItem('theme');
};


export default function changeTheme() {
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

        btnEl.style.background = 'white';
        btnEl.style.color = '#040B15';
        btnEl.style.border = 'solid black 2px';
  
        lightThemeStyle()
              
    } else {
              
        localStorage.setItem('theme', 'dark')
        themeEL.className = 'fa-regular fa-moon'
        imgEl.src = 'img/program-dark.jpeg'
        imgEl.className = 'prog-img'
        programBlock.append(imgEl)
  
        const firstSec = document.getElementById('first-section')
        firstSec.className = 'first-section greeting'

        btnEl.style.background = '#040B15';
        btnEl.style.color = 'white';
        btnEl.style.border = 'solid white 2px';

      darkThemeStyle()
  
    }
}
   

btnEl.addEventListener('click', function () {
    changeTheme()
});


export function defaultTheme() {
    const theme = localStorage.getItem('theme')

    if (theme && theme === 'light') {

        btnEl.style.background = 'white';
        btnEl.style.color = '#040B15';
        btnEl.style.border = 'solid black 2px';

        return lightThemeStyle()
    } 

    btnEl.style.background = '#040B15';
     btnEl.style.color = 'white';
    btnEl.style.border = 'solid white 2px';

    return darkThemeStyle()
}


defaultTheme()