// const ngoFormButtonClick = document.getElementById("ngoFormButton")

// ngoFormButtonClick.addEventListener('click',function (event) {
//     // event.preventDefault(); // stops the submitting and prints the alert
//     const alertShow = document.getElementById("alertBox")
//     alertShow.classList.remove("hide")
    
// })


const nameErrorMsg = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-circle" viewBox="0 0 16 16">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
<path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
</svg>&nbsp;&nbsp;Name should contain min. 5 characters and max. 30 characters.
`;

const validMsg = `                        
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg>&nbsp;&nbsp;Looks Good!
`;

const contactNumberErrorMsg=`
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-circle" viewBox="0 0 16 16">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
<path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
</svg>&nbsp;&nbsp;Contact Number should contain 10 digits.
`;


const emailErrorMsg=`
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-circle" viewBox="0 0 16 16">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
<path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
</svg>&nbsp;&nbsp;Please Enter a valid Email Address.
`;

const passwordErrorMsg = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-circle" viewBox="0 0 16 16">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
<path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
</svg>&nbsp;&nbsp;Please Enter a valid Password.
`;

const uploadErrorMsg = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-circle" viewBox="0 0 16 16">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
<path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
</svg>&nbsp;&nbsp;Please Upload a .png File.
`;


function clearErrors(){
    let errors = document.getElementsByClassName("formError");
    for (let item of errors){
        item.innerHTML = "";
    }
}



function setError(id,error){
    //sets error inside tag of id
    let element = document.getElementById(id)
    element.innerHTML = error;
}

function setValid(id,valid){
    let element = document.getElementById(id)
    element.innerHTML=valid;
}

//do a proper from validation and then submit it properly and then make a proper alert , the above one is temporary



const ngoFormButtonClick = document.getElementById("ngoFormButton")

ngoFormButtonClick.addEventListener('click',function validateForm (event) {
    event.preventDefault();
    clearErrors();



    //perform validation and if validation fails , set the value of defaultReturnValue to false.
    // name validation
    var name = document.forms["myForm"]["requester_name"].value;
    if((name.length<=4)||(name.length>30)){
        
        setError("nameErrorMsg",nameErrorMsg);
        document.getElementById("requester_name").classList.add("invalidInput")
    }
    else{
        setValid("nameValidMsg",validMsg)
        document.getElementById("requester_name").classList.add("validInput")
    }

    //contact number validation
    var contactNumber = document.forms["myForm"]["requester_phone"].value;
    if(contactNumber.length!=10){
        setError("contactNumberErrorMsg",contactNumberErrorMsg)
    }
    else{
        setValid("contactNumberValidMsg",validMsg)
    }

    //email address validation
    var email = document.forms["myForm"]["signUpEmail"].value;
    const emailFormat =/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const emailValid = emailFormat.test(email)
    if(emailValid == false){
        setError("emailErrorMsg",emailErrorMsg)
    }
    else{
        setValid("emailValidMsg",validMsg)
    }

    //password validation 
    var password = document.forms["myForm"]["signUpPassword"].value;
    const passwordFormat =/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_]).{8,30}$/;
    const passwordValid = passwordFormat.test(password)
    if(passwordValid == false){
        setError("passwordErrorMsg",passwordErrorMsg)
    }
    else{
        setValid("passwordValidMsg",validMsg)
    }

    //upload validation
    var upload = document.forms["myForm"]["uploadtheimage"].value;
    var uploadFormat =/\.(png)$/;
    uploadValid = uploadFormat.test(upload);
    if(uploadValid == false){
        setError("uploadErrorMsg",uploadErrorMsg)
    }
    else{
        setValid("uploadValidMsg",validMsg)
    }


})
