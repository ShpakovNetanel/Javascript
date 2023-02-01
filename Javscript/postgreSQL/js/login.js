const registerButton = document.getElementById('register')



registerButton.addEventListener('click', () => {
    window.locate('http://127.0.0.1:4000/users/register')
})