

async function headerEnglishText() {
    const worker = document.querySelector('#worker-link');
    const skills = document.querySelector('#skills-link');
    const projects = document.querySelector('#projects-link');
    const contacts = document.querySelector('#contacts-link');

    worker.textContent = 'Worker';
    skills.textContent = 'Skills';
    projects.textContent = 'Projects';
    contacts.textContent = 'Contacts';
}


async function firstSectionEnglishText() {
    const me = document.querySelector('#whoami');
    const name = document.querySelector('#myname');
    const whatCreate = document.querySelector('#i-create');
    const projectBtn = document.querySelector('#watch-project-btn');
    const callMe = document.querySelector('#call-me');

    me.textContent = 'Hello, I`am';
    name.textContent = 'Melnichuk Ilya';
    whatCreate.textContent = 'I create reliable, secure backend services and API`s in Python.';
    projectBtn.textContent = 'Watch my project';
    callMe.textContent = 'Contact with me';

}

async function secondSectionEnglishText() {
    const aboutMe = document.querySelector('#about-me');
    const meDescription = document.querySelector('#me-description');
    const age = document.querySelector('#age');
    const city = document.querySelector('#city');
    const cityDescription = document.querySelector('#city-description');
    const employment = document.querySelector('#employments');
    const employmentDescription = document.querySelector('#employment-description');

    aboutMe.textContent = 'About me';
    meDescription.textContent = 'I`am a backend-developer. I work with database design and integration, create REST API. I love clean code, automation and solving complex problems.';
    age.textContent = 'Age';
    city.textContent = 'City';
    cityDescription.textContent = 'Almaty, Kazakhstan.';
    employment.textContent = 'Employment';
    employmentDescription.textContent = 'Open to suggestions';
}


async function thirdSectionEnglishText() {
    const skills = document.querySelector('#skills-text');

    skills.textContent = 'Skills';
}

async function fourthSectionsEnglishText() {
    const projects = document.querySelector('#projects');
    const shop = document.querySelector('#shop');
    const meganoDescription = document.querySelector('#megano-description');
    const toCross = document.querySelectorAll('#toCross');
    const twitter = document.querySelector('#twitter');
    const twitterDescription = document.querySelector('#twitter-description');
    const habits = document.querySelector('#habits');
    const habitsDescription = document.querySelector('#habits-description');
    const wathGithub = document.querySelector('#wath-github');

    projects.textContent = 'Projects';
    shop.textContent = 'Megano shop';
    meganoDescription.textContent = 'REST API for an online store. Product catalog, cart, orders, profile, registraton, authentication and authorization.';
    twitter.textContent = 'Clone Twitter';
    twitterDescription.textContent = 'API for Twitter clone. Support for work with posts, subscriptions and account.';
    habits.textContent = 'Tracking habits'
    habitsDescription.textContent = 'API for the habit tracking project. It has registration, functionality for interaction with the habit and a queue of tasks to remind you of the habit.';
    wathGithub.textContent = 'The rest of the projects can be found on GitHub.';

    toCross.forEach(element => {
        element.textContent = 'To cross';
    });
}


async function fifthSectionEnglishText() {
    const contact = document.querySelector('#Mycontacts');
    const education = document.querySelector('#MyEducation');
    const DegreeEducation = document.querySelector('#degree-education');
    const higherEducation = document.querySelector('#higher-education');

    contact.textContent = 'Contacts';
    education.textContent = 'Education';
    DegreeEducation.textContent = 'Degree of education';
    higherEducation.textContent = 'Higher education';
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

    callMeText.textContent = 'Contact with me';
    modalFirstName.textContent = 'First Name';
    modalLastName.textContent = 'Last Name';
    modalEmail.textContent = 'Email';
    modalTel.textContent = 'Telephone number';
    modalTopic.textContent = 'Topic';
    closeModal.textContent = 'Close';
    pushModal.textContent = 'Push';

}


export default async function englishLanguage() {
    await headerEnglishText()
    await firstSectionEnglishText()
    await secondSectionEnglishText()
    await thirdSectionEnglishText()
    await fourthSectionsEnglishText()
    await fifthSectionEnglishText()
    await modlaRussianText()
}