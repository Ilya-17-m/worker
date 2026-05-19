

function darkHeaderStyle() {

  const whiteText = document.querySelectorAll('#myText');
  const header = document.querySelector('header');

  whiteText.forEach(element => {
    element.className = 'white-text';
  });

  header.className = 'header-dark head-information';
}


function darkFirstSectionStyle() {

    const secEl = document.querySelector('#first-section');
    const consoleEl = document.querySelector('#console');
    const myconsoleEl = document.querySelector('#my-console-text');

    consoleEl.className = 'my-console my-console-dark';
    myconsoleEl.className = 'console-text white-text console-dark';
    secEl.className = 'greeting first-sec-dark';
}


function darkSecondSectionStyle() {

    const secEl = document.querySelector('#second-section');
    const meInfoEl = document.querySelectorAll('#myInfo');
    const emplEl = document.querySelector('#employment');

    secEl.className = 'worker-information second-sec-dark';
    emplEl.className = 'active-work employment-dark';

    meInfoEl.forEach(element => {
        element.className = 'worker-c me-info-dark';
    });
}


function darkThirdSectionStyle() {

    const secEl = document.querySelector('#skills');
    const swiperEl = document.querySelectorAll('#swiper-text');

    secEl.className = 'skills-section skills-section-dark';

    swiperEl.forEach(element => {
        element.className = 'swiper-slide swiper-text-dark';
    });
}


function darkFourthSectionStyle() {

    const secEl = document.querySelector('#worker-projects');
    const projectTitle = document.querySelectorAll('#project-title');
    const scienseEl = document.querySelectorAll('#sciense');
    const scienseBlockEl = document.querySelectorAll('#sciense-block');

    secEl.className = 'worker-projects projects-section-dark';

    projectTitle.forEach(element => {
        element.className = 'project-title white-text';
    });

    scienseEl.forEach(element => {
        element.className = 'sciense white-text';
    });

    scienseBlockEl.forEach(element => {
        element.className = 'project project-dark';
    });
}


function darkFifthSectionStyle() {

    const secEl = document.querySelector('#contacts');

    secEl.className = 'fifth-section-dark';
}


function darkFooterStyle() {

    const secEl = document.querySelector('#footer');

    secEl.className = 'footer-dark';
}

function darkModalStyle() {

    const modalContent = document.querySelector('#modal-content');
    const modalText = document.querySelectorAll('#modal-text');
    const telNumber = document.querySelector('#tel-number');
    const topic = document.querySelector('#topic');

    const firstName = document.querySelector('#firstName');
    const lastName = document.querySelector('#lastName');
    const phone = document.querySelector('#phone');
    const message = document.querySelector('#message');

    modalContent.style.backgroundColor = '#090F1B';
    telNumber.className = 'user-tel modal-text-dark';
    topic.className = 'user-tel modal-text-dark';
    
    firstName.className = 'name-style input-style-dark';
    lastName.className = 'name-style input-style-dark';
    phone.className = 'name-style input-style-dark';
    message.className = 'name-style input-style-dark';
    
    modalText.forEach(element => {
        element.className = 'name-value modal-text-dark';
    });
}


// All dark style functions
export default function darkThemeStyle() {
    darkHeaderStyle()
    darkFirstSectionStyle()
    darkSecondSectionStyle()
    darkThirdSectionStyle()
    darkFourthSectionStyle()
    darkFifthSectionStyle()
    darkFooterStyle()
    darkModalStyle()
}