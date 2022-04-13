const home = document.getElementById("home");

home.addEventListener('mouseenter',function() {
    home.classList.add("expandCard");
})

home.addEventListener('mouseleave',function() {
    home.classList.remove("expandCard");
})

const aboutUs = document.getElementById("aboutUs")

aboutUs.addEventListener('mouseenter' , function () {
    aboutUs.classList.add("expandCard");
})

aboutUs.addEventListener('mouseleave',function(){
    aboutUs.classList.remove("expandCard");
})

const contactUs = document.getElementById("contactUs")

contactUs.addEventListener('mouseenter' , function () {
    contactUs.classList.add("expandCard");
})

contactUs.addEventListener('mouseleave',function(){
    contactUs.classList.remove("expandCard");
})

const services = document.getElementById("services")

services.addEventListener('mouseenter' , function () {
    services.classList.add("expandCard");
})

services.addEventListener('mouseleave',function(){
    services.classList.remove("expandCard");
})
