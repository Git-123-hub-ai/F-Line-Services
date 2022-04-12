const home = document.getElementById("home");

home.addEventListener('mouseenter',function() {
    home.classList.add("underline","expandCard");
})

home.addEventListener('mouseleave',function() {
    home.classList.remove("underline","expandCard");
})

const aboutUs = document.getElementById("aboutUs")

aboutUs.addEventListener('mouseenter' , function () {
    aboutUs.classList.add("underline","expandCard");
})

aboutUs.addEventListener('mouseleave',function(){
    aboutUs.classList.remove("underline","expandCard");
})

const contactUs = document.getElementById("contactUs")

contactUs.addEventListener('mouseenter' , function () {
    contactUs.classList.add("underline","expandCard");
})

contactUs.addEventListener('mouseleave',function(){
    contactUs.classList.remove("underline","expandCard");
})

const services = document.getElementById("services")

services.addEventListener('mouseenter' , function () {
    services.classList.add("underline","expandCard");
})

services.addEventListener('mouseleave',function(){
    services.classList.remove("underline","expandCard");
})
