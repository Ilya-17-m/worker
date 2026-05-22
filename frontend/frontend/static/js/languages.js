

const choicesLanguage = document.querySelector('#language');

const choices = new Choices(choicesLanguage, {
    searchEnabled: false,
    itemSelectText: '',
    shouldSort: false,
    position: 'bottom'
});