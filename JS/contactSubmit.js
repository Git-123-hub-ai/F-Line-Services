const contactFormButton = document.getElementById("contactFormButton");




contactFormButton.addEventListener('click',function contactFormButtonClick(){
    const emailId = document.getElementById("emailId").value;
    const name = document.getElementById("name").value;
    const contactNumber = document.getElementById("contactNumber").value;
    const queryOptions = document.getElementById("queryOptions").value;
    const elaboratedQuery = document.getElementById("elaboratedQuery").value;
    console.log("Email Id:- "+emailId+"\nName :- "+name+"\nPhone Number :- "+contactNumber+"\nQuestion Related to :- "+queryOptions+"\nQuery :- "+elaboratedQuery);
    document.getElementById("contactForm").innerHTML = "<p>This is a paragraph</p>";

})