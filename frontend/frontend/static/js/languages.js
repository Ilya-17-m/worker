import russianLanguage from './ru-language.js'
import englishLanguage from './en-language.js'
import kazakhLanguage from './kz-language.js';

const choicesLanguage = document.querySelector('#language');

const choices = new Choices(choicesLanguage, {
    searchEnabled: false,
    itemSelectText: '',
    shouldSort: false,
    position: 'bottom'
});



choicesLanguage.addEventListener('change', function () {
    const language = choicesLanguage.value
    
    switch (language) {
        case 'RU':
            localStorage.setItem('language', 'RU')
            choices.setChoiceByValue('RU')
            russianLanguage()
            break;

        case 'KZ':
            localStorage.setItem('language', 'KZ')
            choices.setChoiceByValue('KZ')
            kazakhLanguage()
            break;
    
        default:
            localStorage.setItem('language', 'EN')
            choices.setChoiceByValue('EN')
            englishLanguage()
            break;
    }
});


async function defaultLanguage() {
    const language = localStorage.getItem('language')
    
    if (!language) {

        localStorage.setItem('language', 'EN')
        choices.setChoiceByValue('EN')
        await englishLanguage()

    } else {

        switch (language) {
            case 'RU':
                localStorage.setItem('language', 'RU')
                choices.setChoiceByValue('RU')
                await russianLanguage()
                break;

            case 'KZ':
                localStorage.setItem('language', 'KZ')
                choices.setChoiceByValue('KZ')
                await kazakhLanguage()
                break;
        
            default:
                localStorage.setItem('language', 'EN')
                choices.setChoiceByValue('EN')
                await englishLanguage()
                break;
        }

    }

}

await defaultLanguage()