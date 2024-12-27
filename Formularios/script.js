// alert("Modesto")

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyA5ba675ipAUBBA4SxO25jNpBdiOcKI6hc",
    authDomain: "vanilla-form-8f074.firebaseapp.com",
    projectId: "vanilla-form-8f074",
    storageBucket: "vanilla-form-8f074.firebasestorage.app",
    messagingSenderId: "895529371501",
    appId: "1:895529371501:web:49948035e99d0f51937c64"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();
// Programación
document.getElementById("formulario").addEventListener('submit', (event) => {
    event.preventDefault();

    // Validar el campo nombre.
    let inputNombre =  document.getElementById("name")
    let errorNombre = document.getElementById("errorName") 
    if(inputNombre.value.trim() === '') {
        errorNombre.textContent = 'Por favor, introduce un nombre ya que es requerido.'
        errorNombre.classList.add('error-message')
    }else {
        errorNombre.textContent = ''
        errorNombre.classList.remove('error-message')
    }

    // Validar el campo de correo electrónico. 
    let inputEmail = document.getElementById('email')
    let errorEmail = document.getElementById('errorEmail')
    let patternEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9]{1,63}\.){1,125}[A-Z]{2,63}$/i
    if (!patternEmail.test(inputEmail.value)) {
        errorEmail.textContent = 'Por favor, introduce un correo electrónico válido.'
        errorEmail.classList.add('error-message')
    }else {
        errorEmail.textContent = ''
        errorEmail.classList.remove('error-message')
    }

    // Validar el campo contraseña.
    let inputContrasenia = document.getElementById('password')
    let errorContrasenia = document.getElementById('errorPassword')
    let patternContrasenia = ""
    if(inputContrasenia.value.length < 8) {
        errorContrasenia.textContent = 'La contraseña debe tener al menos 8 caractéres.'
        errorContrasenia.classList.add('error-message')
    }else {
        errorContrasenia.textContent = ''
        errorContrasenia.classList.remove('error-message')
    }

    // Sí todos los campos son válidos enviar fomrulario. 
    if( !errorNombre.textContent && !errorEmail.textContent && !errorContrasenia.textContent ){
        // Back End que recibe la información.
        db.collection("Users").add({
            name: inputNombre.value,
            email: inputEmail.value,
            password: inputContrasenia.value
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
        alert("El formulario se ha enviado con éxito")
        document.getElementById('formulario').reset()
    }
    
})