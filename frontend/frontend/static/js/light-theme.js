

async function lightHeaderStyle() {

  const whiteText = document.querySelectorAll('#myText');
  const header = document.querySelector('header');

  whiteText.forEach(element => {
    element.className = 'black-text';
  });

  header.className = 'header-light head-information';

}


async function lightFirstSectionStyle() {
    const secEl = document.querySelector('#first-section');
    const consoleEl = document.querySelector('#console');
    const myconsoleEl = document.querySelector('#my-console-text');

    secEl.className = 'greeting first-sec-light';
    consoleEl.className = 'my-console my-console-light';
    myconsoleEl.className = 'console-text black-text console-light';

}


async function lightSecondSectionStyle() {
    const secEl = document.querySelector('#second-section');
    const meInfoEl = document.querySelectorAll('#myInfo');
    const emplEl = document.querySelector('#employment');

    secEl.className = 'worker-information second-sec-light';
    emplEl.className = 'active-work employment-light';

        meInfoEl.forEach(element => {
        element.className = 'worker-c me-info-light';
    });
}


async function lightThirdSectionStyle() {
    const secEl = document.querySelector('#skills');
    const swiperEl = document.querySelectorAll('#swiper-text');

    secEl.className = 'skills-section skills-section-light'

    swiperEl.forEach(element => {
        element.className = 'swiper-slide swiper-text-light';
    });
}


async function lightFourthSectionStyle() {
    const secEl = document.querySelector('#worker-projects');
    const projectTitle = document.querySelectorAll('#project-title');
    const scienseEl = document.querySelectorAll('#sciense');
    const scienseBlockEl = document.querySelectorAll('#sciense-block');

    secEl.className = 'worker-projects projects-section-light';

    projectTitle.forEach(element => {
        element.className = 'project-title black-text';
    });

    scienseEl.forEach(element => {
        element.className = 'sciense black-text';
    });

    scienseBlockEl.forEach(element => {
        element.className = 'project project-light';
    });

}


async function lightFifthSectionStyle() {
    const secEl = document.querySelector('#contacts');

    secEl.className = 'fifth-section-light';
}


async function lightFooterStyle() {
    const secEl = document.querySelector('#footer');

    secEl.className = 'footer-light';
}


async function lightModalStyle() {

    const modalContent = document.querySelector('#modal-content');
    const modalText = document.querySelectorAll('#modal-text');
    const telNumber = document.querySelectorAll('#tel-number');
    const topic = document.querySelector('#topic');

    const firstName = document.querySelector('#firstName');
    const lastName = document.querySelector('#lastName');
    const phone = document.querySelector('#phone');
    const message = document.querySelector('#message');
    const email = document.querySelector('#email');

    modalContent.style.backgroundColor = '#e3e3e3';
    topic.className = 'user-tel modal-text-light';

    firstName.className = 'name-style input-style-light';
    lastName.className = 'name-style input-style-light';
    phone.className = 'name-style input-style-light';
    message.className = 'name-style input-style-light';
    email.className = 'name-style input-style-light';

    modalText.forEach(element => {
        element.className = 'name-value modal-text-light';
    });

    telNumber.forEach(element => {
        element.className = 'user-tel modal-text-light';
    });
}


// All light style functions
export default async function lightThemeStyle() {
    await lightHeaderStyle()
    await lightFirstSectionStyle()
    await lightSecondSectionStyle()
    await lightThirdSectionStyle()
    await lightFourthSectionStyle()
    await lightFifthSectionStyle()
    await lightFooterStyle()
    await lightModalStyle()
};