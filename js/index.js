import {defaultTheme} from './theme.js'

const swiperSkills = new Swiper('.swiper', {
  
  direction: 'horizontal',
  loop: true,
  slidesPerView: 6,
  spaceBetween: 10,

  speed: 2000,

  autoplay: {
    delay: 0,
    disableOnIntegraction: false,
    pauseOnMouseEnter: false
  },

  allowTouchMove: false

});

const buttonEl = document.querySelector('#openModal');
const modal = document.querySelector('#modal');
const closeBtn = document.querySelector('#closeModal');


buttonEl.addEventListener('click', function () {
    modal.style.display = 'flex';
});


closeBtn.addEventListener('click', function () {
    modal.style.display = 'none';
});


window.onclick = (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
};


defaultTheme()

