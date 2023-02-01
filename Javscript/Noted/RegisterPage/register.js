const firebaseConfig = {
     apiKey: "AIzaSyAeLSmDZ3QfRAgYOPme1zcRlpr-OyD4TFc",
     authDomain: "blog-78cfe.firebaseapp.com",
     projectId: "blog-78cfe",
     storageBucket: "blog-78cfe.appspot.com",
     messagingSenderId: "1078123508582",
     appId: "1:1078123508582:web:4e9542ce4fc761d0614ea7"
};

firebase.initializeApp(firebaseConfig);

const registerButton = document.querySelector('.signup')

function registerUser(){
     const fullNameInput = document.querySelector('.fullname-input').value
     const usernameInput = document.querySelector('.username-input').value
     const emailInput = document.querySelector('.email-address-input').value
     const passwordInput = document.querySelector('.password-input').value 
     // ?? Email Validity
     alert(emailIsAvailable(emailInput))
     if(emailInput.length !== 0 && emailInput.indexOf('@') < emailInput.indexOf('.', emailInput.at('@'))
     && emailInput.includes('@') && emailInput.includes('.') && emailInput.indexOf('@') !== 0 && emailInput.indexOf('.') !== emailInput.length + 1
     && emailIsAvailable(emailInput)){
          if(usernameInput.length !== 0 && usernameIsAvialable(usernameInput)){
               let strength = 0
               let lowerCase = new RegExp(/[a-z]/)
               let upperCase = new RegExp(/[A-Z]/)
               let numbersCase = new RegExp(/[0-9]/i)
               let specialChars = new RegExp(/[^a-z0-9]/i)
               if(lowerCase.test(passwordInput)){
                    strength += 16
               } if(upperCase.test(passwordInput)){
                    strength += 18
               } if(numbersCase.test(passwordInput)){
                    strength += 20
               } if(specialChars.test(passwordInput)){
                    strength += 22
               }
               if(passwordInput.length > 8 && strength === 76){
                    if(fullNameInput.length !== 0){
                         firebase.auth().createUserWithEmailAndPassword(emailInput, passwordInput)
                         firebase.auth().onAuthStateChanged(user => {
                              if(user){
                                   let date = new Date()
                                   let cDay = date.getDate();
                                   let cMonth = date.getMonth() + 1;
                                   let cYear = date.getFullYear();
                                   const cDate = cDay + "/" + cMonth + "/" + cYear
                                   let User = {
                                        email: emailInput,
                                        username: usernameInput,
                                        fullName: fullNameInput,
                                        authorsFollowedMe: [""],
                                        authorsIFollowed: [""],
                                        savedBlogs: [""],
                                        memberSince: cDate,
                                        numberOfLikes: 0,
                                        numberOfSaves: 0,
                                        numberOfViews: 0,
                                        bio: "",
                                        profilePicture: ""
                                   }

                                   firebase.database().ref(`users/${usernameInput}`).set(User)
                                   .then(setTimeout(() => {
                                        window.location.replace(`http://127.0.0.1:5500/Dashboard/dashboard.html?${usernameInput}`)
                                   }, 1000))                              
                              }
                         })
                    }
               }
          }
     }
}

function usernameIsAvialable(username){
     let usernames = []
     firebase.database().ref('users').on('value', snapshot => {
          snapshot.forEach(childSnapshot => {
               usernames.push(childSnapshot.val() && childSnapshot.val().username)
          })
     })
     if(usernames.includes(username)){
          return false
     }
     return true
}
function emailIsAvailable(email){
     let emails = []
     firebase.database().ref('users').on('value', snapshot => {
          snapshot.forEach(childSnapshot => {
               emails.push(childSnapshot.val() && childSnapshot.val().email)
               alert(childSnapshot.val().email);
          })
     })
     if(emails.includes(email)){
          return false
     }
     return true
}

registerButton.addEventListener('click', registerUser)

const loginButton = document.querySelector('.login')
.addEventListener('click', () => {
     window.location.href = "http://127.0.0.1:5500/LoginPage/login.html"
})

// !! make an tos and pp pages

const tosButton = document.querySelector('.TOS')
.addEventListener('click', () => {
     window.location.href = " "
})

const ppButton = document.querySelector('.PP')
.addEventListener('click', () => {
     window.location.href = " "
})