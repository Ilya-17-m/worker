

const choicesLanguage = document.querySelector('#language');

const choices = new Choices(choicesLanguage, {
    searchEnabled: false,
    itemSelectText: '',
    shouldSort: false,
    position: 'bottom'
});


function checkLanguage() {
    const language = localStorage.getItem('language')
    
    if (language) {
        return language;
    }

    localStorage.setItem('language', 'EN');
    return 'EN';
}


choicesLanguage.addEventListener('change', function () {
    const languageValue = choicesLanguage.value

    switch (languageValue) {

        case 'RU':
            break

        case 'KZ':
            break
    
        default:
            break;
    }
});
