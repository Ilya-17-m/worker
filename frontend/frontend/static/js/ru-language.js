

async function headerRussianText() {
    const worker = document.querySelector('#worker-link');
    const skills = document.querySelector('#skills-link');
    const projects = document.querySelector('#projects-link');
    const contacts = document.querySelector('#contacts-link');

    worker.textContent = 'Специалист';
    skills.textContent = 'Навыки';
    projects.textContent = 'Проекты';
    contacts.textContent = 'Контакты';
}


async function firstSectionRussianText() {
    const me = document.querySelector('#whoami');
    const name = document.querySelector('#myname');
    const whatCreate = document.querySelector('#i-create');
    const projectBtn = document.querySelector('#watch-project-btn');
    const callMe = document.querySelector('#call-me');

    me.textContent = 'Привет, я';
    name.textContent = 'Мельничук Илья';
    whatCreate.textContent = 'Я создаю надежные и безопасные бэкэнд-сервисы и API на Python.';
    projectBtn.textContent = 'Мои проекты';
    callMe.textContent = 'Связаться со мной';

}

async function secondSectionRussianText() {
    const aboutMe = document.querySelector('#about-me');
    const meDescription = document.querySelector('#me-description');
    const age = document.querySelector('#age');
    const city = document.querySelector('#city');
    const cityDescription = document.querySelector('#city-description');
    const employment = document.querySelector('#employments');
    const employmentDescription = document.querySelector('#employment-description');

    aboutMe.textContent = 'Обо мне';
    meDescription.textContent = 'Я backend-разработчик. Занимаюсь проектированием и интеграцией баз данных, создаю REST API. Люблю чистый код, автоматизацию и решение сложных задач.';
    age.textContent = 'Возраст';
    city.textContent = 'Город';
    cityDescription.textContent = 'Алматы, Казахстан.';
    employment.textContent = 'Занятость';
    employmentDescription.textContent = 'Открыт к предложениям';
}


async function thirdSectionRussianText() {
    const skills = document.querySelector('#skills-text');

    skills.textContent = 'Навыки';
}

async function fourthSectionsRussianText() {
    const projects = document.querySelector('#projects');
    const shop = document.querySelector('#shop');
    const meganoDescription = document.querySelector('#megano-description');
    const toCross = document.querySelectorAll('#toCross');
    const twitter = document.querySelector('#twitter');
    const twitterDescription = document.querySelector('#twitter-description');
    const habits = document.querySelector('#habits');
    const habitsDescription = document.querySelector('#habits-description');
    const wathGithub = document.querySelector('#wath-github');

    projects.textContent = 'Проекты';
    shop.textContent = 'Онлайн магазин Megano';
    meganoDescription.textContent = 'REST API для интернет-магазина. Каталог товаров, корзина, заказы, профиль, регистрация, аутентификация и авторизация.';
    twitter.textContent = 'Клон Twitter';
    twitterDescription.textContent = 'API для клонирования Twitter. Поддержка работы с публикациями, подписками и учетными записями.';
    habits.textContent = 'Трекинг превычек'
    habitsDescription.textContent = 'API для проекта отслеживания привычек. Он включает в себя регистрацию, функциональность для взаимодействия с привычкой и очередь задач для напоминания о привычке.';
    wathGithub.textContent = 'Остальные проекты можно найти в GitHub.';

    toCross.forEach(element => {
        element.textContent = 'перейти';
    });
}


async function fifthSectionRussianText() {
    const contact = document.querySelector('#Mycontacts');
    const education = document.querySelector('#MyEducation');
    const DegreeEducation = document.querySelector('#degree-education');
    const higherEducation = document.querySelector('#higher-education');

    contact.textContent = 'Контакты';
    education.textContent = 'Образование';
    DegreeEducation.textContent = 'Степень образования';
    higherEducation.textContent = 'Высшее образование';
}


async function modlaRussianText() {
    const callMeText = document.querySelector('#modalCallMe');
    const modalFirstName = document.querySelector('#modalFirstName');
    const modalLastName = document.querySelector('#modalLastName');
    const modalEmail = document.querySelector('#modalEmail');
    const modalTel = document.querySelector('#modalTel');
    const modalTopic = document.querySelector('#modalTopic');
    const closeModal = document.querySelector('#closeModal');
    const pushModal = document.querySelector('#pushModal');

    callMeText.textContent = 'Связаться со мной';
    modalFirstName.textContent = 'Имя';
    modalLastName.textContent = 'Фамилия';
    modalEmail.textContent = 'Почта';
    modalTel.textContent = 'Телефон';
    modalTopic.textContent = 'Тема';
    closeModal.textContent = 'Закрыть';
    pushModal.textContent = 'Отправить';

}


export default async function russianLanguage() {
    await headerRussianText()
    await firstSectionRussianText()
    await secondSectionRussianText()
    await thirdSectionRussianText()
    await fourthSectionsRussianText()
    await fifthSectionRussianText()
    await modlaRussianText()
}