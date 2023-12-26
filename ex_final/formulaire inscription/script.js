"use strict"

document.addEventListener("DOMContentLoaded" ,function() {
    const burgerIcon = document.getElementById('burger-icon');
    const menu = document.getElementById('menu');

    burgerIcon.addEventListener("click" ,function() {
        menu.classList.toggle("active")
    });
})

let pseudo=document.querySelector("#pseudo"); //appeler pseudo
let bt=document.querySelector("#bt") //appeler bt envoyer
function checkPseudo(e) { //créer une fonction check pour créer un évents après / params -> e pour event
    e.preventDefault() //fait que ça reste et que ça ne disparaît pas 
    let pseudoValue=pseudo.value; //définir la valeur de pseudo
    console.log(pseudoValue); //dans la function montrer à la fin ce qu'on 
}
bt.addEventListener("click" ,checkPseudo); //créer un évenement pour récupérer la donné


let nom=document.querySelector("#nom")
function checkNom(e) {
    e.preventDefault()
    let nomValue=nom.value;
    console.log(nomValue);
}
bt.addEventListener("click" ,checkNom)


let age=document.querySelector("#age")
function checkAge(e) {
    e.preventDefault()
    let ageValue=age.value;
    console.log(ageValue + " ans");
}
bt.addEventListener("click" ,checkAge)


let genre=document.querySelector("#genre")
function checkGenre(e) {
    e.preventDefault()
    let genreValue=genre.value;
    console.log(genreValue);
}
bt.addEventListener("click" ,checkGenre)



function checkInteret() {
    // Récupérer tous les éléments avec la classe "interet"
    let Interet = document.querySelectorAll('.interet');

    // Créer un tableau pour stocker les valeurs sélectionnées
    let valeursCochées = [];

    // Parcourir les éléments et ajouter les valeurs sélectionnées au tableau
    Interet.forEach(function(element) {
        if (element.checked) {
            valeursCochées.push(element.value);
        }
    });

    // Afficher les valeurs sélectionnées
    if (valeursCochées.length > 0) {
        console.log(valeursCochées);
    }
}
bt.addEventListener("click" ,checkInteret)


let mail=document.querySelector("#mail");
function checkMail(e) {
    e.preventDefault()
    let mailValue=mail.value;
    console.log(mailValue);
}
bt.addEventListener("click" ,checkMail);


function checkPub() {
    let pubmail = document.querySelectorAll('input[name="pubmail"]');
    let rondCoché = '';
    for (let n = 0; n < pubmail.length; n++) {
        if (pubmail[n].checked) {
            rondCoché = pubmail[n].id;
            break;
        }
    }
    if (rondCoché !== '') {
        console.log(rondCoché + " pour la pub");;
    } 
}
bt.addEventListener("click" ,checkPub)




let passwordInput= document.getElementById("mdp");
function validatePassword(){


    let passwordError= document.getElementById("mdpError");

    //expression reguliere pour verifier la presence d'au moins une majuscule, une minuscule et un caractere special
    let regexMotDePasse = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=*])(?!.*\s).{8,}$/; // utiliser celui là pour mon ordi 




    if(regexMotDePasse.test(passwordInput.value) && passwordInput.value.length >=8) {
        passwordError.textContent= ''; //le mdp est valide
    } else {
        passwordError.textContent="Le mdp doit contenir au moins une majuscule, une minuscule, un chiffre, un caractere special et faire au moins 8 caracteres de long";
    }
}

passwordInput.addEventListener("input" ,validatePassword)


let mdp=document.querySelector("#mdp");
function motdepasse(e) {
    e.preventDefault()
    let mdpValue=mdp.value;
    console.log(mdpValue);
}
bt.addEventListener("click" ,motdepasse);