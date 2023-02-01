const firebaseConfig = {
     apiKey: "AIzaSyAeLSmDZ3QfRAgYOPme1zcRlpr-OyD4TFc",
     authDomain: "blog-78cfe.firebaseapp.com",
     projectId: "blog-78cfe",
     storageBucket: "blog-78cfe.appspot.com",
     messagingSenderId: "1078123508582",
     appId: "1:1078123508582:web:4e9542ce4fc761d0614ea7"
};

firebase.initializeApp(firebaseConfig);

const loginButton = document.querySelector('.login')

function loginUser(){
     const emailInput = document.querySelector('.email-address-input').value
     const passwordInput = document.querySelector('.password-input').value
     firebase.auth().signInWithEmailAndPassword(emailInput, passwordInput)
     .then(resp => {
          let userDetails = []
          let username = " "
          firebase.database().ref('users').on('value', snapshot => {
               snapshot.forEach(childSnapshot => {
                    userInfo = {
                         email: childSnapshot.val().email,
                         username: childSnapshot.val().user
                    }
                    userDetails.push(childSnapshot.val() && userInfo)
               });
          })
          for(let i = 0; i < userDetails.length; i++){
               if(userDetails[i].email === emailInput){
                    username = userDetails[i].username
               }
          }
          window.location.replace(`http://127.0.0.1:5500/Dashboard/dashboard.html?${username}`)
     }).catch(e => {
          console.log(e);
     })
}

loginButton.addEventListener('click', loginUser)
