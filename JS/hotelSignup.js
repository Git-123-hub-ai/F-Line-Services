const ngoFormButtonClick = document.getElementById("hotelFormButton")

ngoFormButtonClick.addEventListener('click',function (event) {
    event.preventDefault(); // stops the submitting and prints the alert
    const alertShow = document.getElementById("alertBox")
    alertShow.classList.remove("hide")
    
})




//do a proper from validation and then submit it properly and then make a proper alert , the above one is temporary