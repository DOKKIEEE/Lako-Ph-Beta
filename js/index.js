// log in
const loginDisplay = document.querySelector("#loginDisplay");
const login = document.querySelector("#login");
login.addEventListener("click", userLogin);
function userLogin () {
    loginDisplay.style.display = "flex";
}
// close login button
const closeBtn = document.querySelector("#closeButton")
closeBtn.addEventListener("click", xBtn);
function xBtn() {
    loginDisplay.style.display = "none";
}
// login validation function
const userName = document.querySelector("#username");
const password = document.querySelector("#password");
const userError = document.querySelector("#userError");
const passError = document.querySelector("#passwordError");
const submitBtn = document.querySelector("#submit");
submitBtn.addEventListener("click", submitButton);

 function submitButton () {
    
     if (userName.value === ""){
         userError.style.display = "block";
         userError.innerHTML = "Username required";
         userError.style.color = "red";
         userName.style.boxShadow = "1px -2px 2px 2px red, -2px 2px 2px 2px red ";
     }
     else if (password.value.length < 4) {
        passError.style.display = "block";
        passError.innerHTML = "Password must be at least 4 characters";
        passError.style.color = "red";
        password.style.boxShadow = "1px -2px 2px 2px red, -2px 2px 2px 2px red ";
     }  
     else if (password.value.length > 10) {
        passError.style.display = "block";
        passError.innerHTML = "Password must not exceed 10 characters";
        passError.style.color = "red";
        password.style.boxShadow = "1px -2px 2px 2px red, -2px 2px 2px 2px red ";
     }
     else if (userName.value != "user") {
        userError.style.display = "block";
        userError.innerHTML = "Check Username";
        userError.style.color = "red";
        userName.style.boxShadow = "1px -2px 2px 2px red, -2px 2px 2px 2px red ";
     }
     else if (password.value != 1234) {
        passError.style.display = "block";
        passError.innerHTML = "Check Password";
        passError.style.color = "red";
        password.style.boxShadow = "1px -2px 2px 2px red, -2px 2px 2px 2px red ";
     }
     else if (userName.value != "user" && password.value != 1234) {
        userError.style.display = "block";
        userError.innerHTML = "Check Username";
        userError.style.color = "red";
        userName.style.boxShadow = "1px -2px 2px 2px red, -2px 2px 2px 2px red ";
        passError.style.display = "block";
        passError.innerHTML = "Check Password";
        passError.style.color = "red";
        password.style.boxShadow = "1px -2px 2px 2px red, -2px 2px 2px 2px red ";
     }
     else if(userName.value == "user" && password.value == 1234){
        window.location.href = "https://dokkieee.github.io/LakoPh/userInterface.html";
     }
     
 }
