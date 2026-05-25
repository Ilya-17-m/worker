

async function headerKazakhText() {
    const worker = document.querySelector('#worker-link');
    const skills = document.querySelector('#skills-link');
    const projects = document.querySelector('#projects-link');
    const contacts = document.querySelector('#contacts-link');

    worker.textContent = 'Маман';
    skills.textContent = 'Дағдылар';
    projects.textContent = 'Жобалар';
    contacts.textContent = 'Контактілер';
}


async function firstSectionKazakhText() {
    const me = document.querySelector('#whoami');
    const name = document.querySelector('#myname');
    const whatCreate = document.querySelector('#i-create');
    const projectBtn = document.querySelector('#watch-project-btn');
    const callMe = document.querySelector('#call-me');

    me.textContent = 'Сәлем, мен';
    name.textContent = 'Мельничук Илья';
    whatCreate.textContent = 'Мен Python-да сенімді және қауіпсіз серверлік қызметтер мен API құрастырамын.';
    projectBtn.textContent = 'Менің жобаларым';
    callMe.textContent = 'Маған хабарласыңыз';

}

async function secondSectionKazakhText() {
    const aboutMe = document.querySelector('#about-me');
    const meDescription = document.querySelector('#me-description');
    const age = document.querySelector('#age');
    const city = document.querySelector('#city');
    const cityDescription = document.querySelector('#city-description');
    const employment = document.querySelector('#employments');
    const employmentDescription = document.querySelector('#employment-description');

    aboutMe.textContent = 'Мен туралы';
    meDescription.textContent = 'Мен сервер әзірлеушісімін. Мен дерекқорларды жобалаймын және біріктіремін және REST API интерфейстерін жасаймын. Мен таза кодты, автоматтандыруды және күрделі мәселелерді шешуді жақсы көремін.';
    age.textContent = 'Жасы';
    city.textContent = 'Қала';
    cityDescription.textContent = 'Алматы, Казахстан.';
    employment.textContent = 'Жұмыспен қамту';
    employmentDescription.textContent = 'Ұсыныстарға ашық';
}


async function thirdSectionKazakhText() {
    const skills = document.querySelector('#skills-text');

    skills.textContent = 'Дағдылар';
}

async function fourthSectionsKazakhText() {
    const projects = document.querySelector('#projects');
    const shop = document.querySelector('#shop');
    const meganoDescription = document.querySelector('#megano-description');
    const toCross = document.querySelectorAll('#toCross');
    const twitter = document.querySelector('#twitter');
    const twitterDescription = document.querySelector('#twitter-description');
    const habits = document.querySelector('#habits');
    const habitsDescription = document.querySelector('#habits-description');
    const wathGithub = document.querySelector('#wath-github');

    projects.textContent = 'Жобалар';
    shop.textContent = 'Megano интернет-дүкені';
    meganoDescription.textContent = 'Интернет-дүкенге арналған REST API. Өнім каталогы, қоржын, тапсырыстар, профиль, тіркеу, аутентификация және авторизация.';
    twitter.textContent = 'Twitter клоны';
    twitterDescription.textContent = 'Twitter клондау API. Жазбаларға, жазылымдарға және тіркелгілерге қолдау көрсету.';
    habits.textContent = 'Әдеттерді қадағалау'
    habitsDescription.textContent = 'Әдеттерді бақылау жобасына арналған API. Ол тіркеуді, әдеттермен әрекеттесу функционалдығын және әдеттер туралы еске салғыштар үшін тапсырма кезегін қамтиды.';
    wathGithub.textContent = 'Басқа жобаларды GitHub сайтынан табуға болады.';

    toCross.forEach(element => {
        element.textContent = 'бару';
    });
}


async function fifthSectionKazakhText() {
    const contact = document.querySelector('#Mycontacts');
    const education = document.querySelector('#MyEducation');
    const DegreeEducation = document.querySelector('#degree-education');
    const higherEducation = document.querySelector('#higher-education');

    contact.textContent = 'Контактілер';
    education.textContent = 'Білім';
    DegreeEducation.textContent = 'Білім дәрежесі';
    higherEducation.textContent = 'Жоғары білім';
}


async function modlaKazakhText() {
    const callMeText = document.querySelector('#modalCallMe');
    const modalFirstName = document.querySelector('#modalFirstName');
    const modalLastName = document.querySelector('#modalLastName');
    const modalEmail = document.querySelector('#modalEmail');
    const modalTel = document.querySelector('#modalTel');
    const modalTopic = document.querySelector('#modalTopic');
    const closeModal = document.querySelector('#closeModal');
    const pushModal = document.querySelector('#pushModal');

    callMeText.textContent = 'Маған хабарласыңыз';
    modalFirstName.textContent = 'Аты';
    modalLastName.textContent = 'Тегі';
    modalEmail.textContent = 'Почта';
    modalTel.textContent = 'Телефон';
    modalTopic.textContent = 'Тақырып';
    closeModal.textContent = 'Жабу';
    pushModal.textContent = 'Жіберу';

}


export default async function kazakhLanguage() {
    await headerKazakhText()
    await firstSectionKazakhText()
    await secondSectionKazakhText()
    await thirdSectionKazakhText()
    await fourthSectionsKazakhText()
    await fifthSectionKazakhText()
    await modlaKazakhText()
}