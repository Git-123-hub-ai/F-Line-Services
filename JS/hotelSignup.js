// msg code for HotelSignup ---------------  start ----------------------------------

let hotelFormButton  = document.getElementById("hotelFormButton")
console.log(hotelFormButton)

let form = document.getElementById("hotelForm")
console.log(form)

const hotelFormButtonClick = document.getElementById("hotelFormButton")

hotelFormButtonClick.addEventListener('click', function hotelFormOnClick() {
    // document.getElementById("hotelForm").reset();
    document.getElementById("hotelContainer").innerHTML =
    `
    <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
        <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
        </symbol>
        <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
        </symbol>
        <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </symbol>
    </svg>

    <div class="alert alert-success d-flex align-items-center" role="alert">
        <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
        <div>
        Congratulations You have successfully signed up your account!!
        </div>
    </div>
    
    <div class="container hotelFormContainer" id="hotelContainer">
    <div class="container center ">
        <h3>Sign Up and Register as a Hotel</h3>
    </div>
    <div class="container d-flex justify-content-center align-items-center">
        <form class="F2 innerFormPadding" id="hotelForm">
            <div class="input-group">
                <span class="input-group-text">Enter your name</span>
                <input type="text" aria-label="name" class="form-control" id="requester_name" name="req_name">
            </div>
            <br>

            <div class="input-group">
                <span class="input-group-text">Enter your Hotel name</span>
                <input type="text" aria-label="name" class="form-control" id="NAME_HOTEL" name="HOTEL">
            </div>
            <br>

            <div class="hotelcontact">
                <div class="input-group">
                    <span class="input-group-text">Email Address</span>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                </div>
                <br>
                <div class="input-group">
                    <span class="input-group-text">Password</span>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your password">
                </div>
                <div id="passwordHelpBlock" class="form-text">
                    Your password must be 8-20 characters long, containing letters numbers and special characters ,and must not contain spaces or emoji.
                </div>
                <br>
                <div class="input-group">
                    <span class="input-group-text">Phone number: +91</span>
                    <input type="phone" class="form-control" id="exampleFormControlInput1" placeholder="" maxlength="10">
                </div>
            </div>
            <br>

            <div class="HOTEL_ABILITY">
                <div class="input-group">
                    <span class="input-group-text">Can Provide For</span>
                        <select class="form-select" aria-label="Default select example">
                            <option selected value="E">5-10 </option>
                            <option value="W"> 10-15</option>
                            <option value="N"> 15-20</option>
                            <option value="">20+</option>
                        </select> 
                    <span class="input-group-text">People</span>
                </div>
            </div>
            <br>

            <div class="HOTEL_ZONE">
                <div class="input-group">
                    <span class="input-group-text">Select Your Zone</span>
                    <select class="form-select" aria-label="Default select example">
                        <option selected value="1"> ZONE-1 </option>
                        <option value="2"> ZONE-2 </option>
                        <option value="3"> ZONE-3 </option>
                        <option value="4"> ZONE-4 </option>
                        <option value="5"> ZONE-5 </option>
                    </select>
                </div>
            </div>
            <br>

            <div class="input-group">
                <span class="input-group-text">Upload official Document</span>
                <input type="file" class="form-control" id="UploadedImage" name="UploadedImage">
                <label class="input-group-text" for="inputGroupFile02">Upload</label>
            </div>
            <br>

            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label text-muted" for="exampleCheck1">By Clicking here you agree to our Terms and conditions.</label>
            </div>

            <div class="container center">
                <div class="register">
                    <button class="btn btn-primary" type="submit" id="hotelFormButton">Sign up</button>
                </div> 
            </div>
        </form>
    </div>
</div>




    ` ; 
})