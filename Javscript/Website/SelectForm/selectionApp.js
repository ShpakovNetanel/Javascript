import Select from './selection.js'


const selectElements = document.querySelectorAll('[data-custom]')

selectElements.forEach(selectElement => {
     new Select(selectElement)

})