"use strict"

document.addEventListener("DOMContentLoaded" ,function() {
    const burgerIcon = document.getElementById('burger-icon');
    const menu = document.getElementById('menu');

    burgerIcon.addEventListener("click" ,function() {
        menu.classList.toggle("active")
    });
})

let bt=document.getElementById("boutton");

let body = document.querySelector("body");
let x=0
body.style.background="rgb(38, 33, 33)"
body.style.color="white"
function changeCouleur() {
    if (x==0) {
        body.style.background="rgb(32, 82, 42)"
        body.style.color="white"
        x=1
    } else if(x==1) {
        body.style.background="rgb(156, 145, 71)"
        body.style.color="black"
        x=2
    }else if (x==2){
        body.style.background="rgb(142, 25, 25)"
        body.style.color="white"
        x=3
    }else if (x==3){
        body.style.background="rgb(32, 46, 82)"
        body.style.color="white"
        x=4
    }else{
        body.style.background="rgb(38, 33, 33)"
        body.style.color="white"
        x=0
    }
}
bt.addEventListener("click" ,changeCouleur)
