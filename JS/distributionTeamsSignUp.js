// const ngoFormButtonClick = document.getElementById("distributionTeamFormButton")

// ngoFormButtonClick.addEventListener('click',function (event) {
//     event.preventDefault(); // stops the submitting and prints the alert
//     const alertShow = document.getElementById("alertBox")
//     alertShow.classList.remove("hide")
    
// })


//do a proper from validation and then submit it properly and then make a proper alert , the above one is temporary


const validIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg>
`;

const invalidIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
</svg>`;

const nameErrorMsg = `Name should contain min. 5 characters and max. 30 characters.
`;

const validMsg = `Looks Good!
`;

const contactNumberErrorMsg=`Contact Number should contain 10 digits.
`;


const emailErrorMsg=`Please Enter a valid Email Address.
`;

const passwordErrorMsg = `Please Enter a valid Password.
`;

const uploadErrorMsg = `Please Upload a .png File.
`;

const ageErrorMsg = `Please Enter a valid age 
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


const distributionTeamsFormButtonClick = document.getElementById("distributionTeamFormButton")

distributionTeamsFormButtonClick.addEventListener('click',function validateForm (event) {
    event.preventDefault();
    clearErrors();
    //perform validation and if validation fails , set the value of defaultReturnValue to false.
})


// name validation
const username = document.forms["myForm"]["requester_name"];
username.addEventListener('input',function (e) {
    console.log(e.target.name)
    let target = e.target.name;
    if (target == "req_name"){
        var name = document.forms["myForm"]["requester_name"].value;
    if((name.length<=4)||(name.length>30)){
        setError("nameMsg",nameErrorMsg);
        setError("nameIcon",invalidIcon)
        document.getElementById("nameIcon").classList.add("invalidIcon")
        document.getElementById("nameIcon").classList.remove("validIcon")
        document.getElementById("nameMsg").classList.add("errorMsg")
        document.getElementById("nameMsg").classList.remove("validMsg")
    }
    else{
        setValid("nameMsg",validMsg)
        setValid("nameIcon",validIcon)
        document.getElementById("nameIcon").classList.add("validIcon")
        document.getElementById("nameIcon").classList.remove("invalidIcon")
        document.getElementById("nameMsg").classList.add("validMsg")
        document.getElementById("nameMsg").classList.remove("errorMsg")
    }
    }
})

//email address validation
const email = document.forms["myForm"]["signUpEmail"];
email.addEventListener('input',function(e){
    // console.log(e.target.name)
    let target = e.target.name;
    if(target=="email"){
        var email = document.forms["myForm"]["signUpEmail"].value;
        const emailFormat =/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        const emailValid = emailFormat.test(email)
        if(emailValid == false){
            setError("emailMsg",emailErrorMsg)
            setError("emailIcon",invalidIcon)
            document.getElementById("emailIcon").classList.add("invalidIcon")
            document.getElementById("emailIcon").classList.remove("validIcon")
            document.getElementById("emailMsg").classList.add("errorMsg")
            document.getElementById("emailMsg").classList.remove("validMsg")
        }
        else{
            setValid("emailMsg",validMsg)
            setValid("emailIcon",validIcon)
            document.getElementById("emailIcon").classList.add("validIcon")
            document.getElementById("emailIcon").classList.remove("invalidIcon")
            document.getElementById("emailMsg").classList.add("validMsg")
            document.getElementById("emailMsg").classList.remove("errorMsg")
        }
    }
})

//password validation 
const password = document.forms["myForm"]["signUpPassword"]
password.addEventListener('input', function (e){
    // console.log(e.target.name)
    let target = e.target.name;
    if(target=="password"){
        var password = document.forms["myForm"]["signUpPassword"].value;
        const passwordFormat =/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,30}$/;
        const passwordValid = passwordFormat.test(password)
        if(passwordValid == false){
            setError("passwordMsg",passwordErrorMsg)
            setError("passwordIcon",invalidIcon)
            document.getElementById("passwordIcon").classList.add("invalidIcon")
            document.getElementById("passwordIcon").classList.remove("validIcon")
            document.getElementById("passwordMsg").classList.add("errorMsg")
            document.getElementById("passwordMsg").classList.remove("validMsg")
        }
        else{
            setValid("passwordMsg",validMsg)
            setValid("passwordIcon",validIcon)
            document.getElementById("passwordIcon").classList.add("validIcon")
            document.getElementById("passwordIcon").classList.remove("invalidIcon")
            document.getElementById("passwordMsg").classList.add("validMsg")
            document.getElementById("passwordMsg").classList.remove("errorMsg")
        }
    }
})

//contact number validation
const contactNumber = document.forms["myForm"]["requester_phone"];
contactNumber.addEventListener('input',function (e){
    console.log(e.target.name)
    let target = e.target.name;
    if (target=="req_phone"){
        var contactNumber = document.forms["myForm"]["requester_phone"].value;
        if(contactNumber.length!=10){
            setError("contactNumberMsg",contactNumberErrorMsg)
            setError("contactIcon",invalidIcon)
            document.getElementById("contactIcon").classList.add("invalidIcon")
            document.getElementById("contactIcon").classList.remove("validIcon")
            document.getElementById("contactNumberMsg").classList.add("errorMsg")
            document.getElementById("contactNumberMsg").classList.remove("validMsg")
        }
        else{
            setValid("contactNumberMsg",validMsg)
            setValid("contactIcon",validIcon)
            document.getElementById("contactIcon").classList.add("validIcon")
            document.getElementById("contactIcon").classList.remove("invalidIcon")
            document.getElementById("contactNumberMsg").classList.add("validMsg")
            document.getElementById("contactNumberMsg").classList.remove("errorMsg")
        }
    
    }
})

//Age Validation 
const age = document.forms["myForm"]["age"];
age.addEventListener('input',function(e) {
    console.log(e.target.name)
    let target = e.target.name;
    if(target=="age"){
        var age = document.forms["myForm"]["age"].value;
        if(age<18||age>60){
            setError("ageMsg",ageErrorMsg)
            setError("ageIcon",invalidIcon)
            document.getElementById("ageIcon").classList.add("invalidIcon")
            document.getElementById("ageIcon").classList.remove("validIcon")
            document.getElementById("ageMsg").classList.add("errorMsg")
            document.getElementById("ageMsg").classList.remove("validMsg")
        }
        else{
            setValid("ageMsg",validMsg)
            setValid("ageIcon",validIcon)
            document.getElementById("ageIcon").classList.add("validIcon")
            document.getElementById("ageIcon").classList.remove("invalidIcon")
            document.getElementById("ageMsg").classList.add("validMsg")
            document.getElementById("ageMsg").classList.remove("errorMsg")
        }
    }
})



//upload validation
const upload = document.forms["myForm"]["UploadedImage"];
upload.addEventListener('input',function (e){
    // console.log(e.target.name)
    let target = e.target.name;
    if(target=="UploadedImage"){
        var upload = document.forms["myForm"]["UploadedImage"].value;
        var uploadFormat =/\.(png)$/;
        uploadValid = uploadFormat.test(upload);
        if(uploadValid == false){
            setError("uploadMsg",uploadErrorMsg)
            setError("uploadIcon",invalidIcon)
            document.getElementById("uploadIcon").classList.add("invalidIcon")
            document.getElementById("uploadIcon").classList.remove("validIcon")
            document.getElementById("uploadMsg").classList.add("errorMsg")
            document.getElementById("uploadMsg").classList.remove("validMsg")
        }
        else{
            setValid("uploadMsg",validMsg)
            setValid("uploadIcon",validIcon)
            document.getElementById("uploadIcon").classList.add("validIcon")
            document.getElementById("uploadIcon").classList.remove("invalidIcon")
            document.getElementById("uploadMsg").classList.add("validMsg")
            document.getElementById("uploadMsg").classList.remove("errorMsg")
        }
    }
} )