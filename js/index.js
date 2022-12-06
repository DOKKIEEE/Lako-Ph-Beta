// login validation
let loginBtn = document.querySelector("#loginSubmit");
loginBtn.addEventListener("click", loginSecured);

const registeredUsername = "user";
const registeredUserPass = "1234";

const errorUsernameDisplay = document.querySelector("#usernameError");
const errorPasswordDisplay = document.querySelector("#passwordError");

const usernameErrorMsg = document.createElement("p");
usernameErrorMsg.textContent= "Invalid Username";
usernameErrorMsg.classList = "usernameError";
usernameErrorMsg.style.color = "red"; 

const passwordErrorMsg = document.createElement("p");
passwordErrorMsg.textContent= "Invalid Password";
passwordErrorMsg.classList = "passwordError";
passwordErrorMsg.style.color = "red";  


   function loginSecured() {
      const userNameInput = document.querySelector("#username").value;
      console.log(userNameInput);

      const userPasswordInput = document.querySelector("#password").value;
      console.log(userPasswordInput);

      if(userNameInput != registeredUsername && userPasswordInput != registeredUserPass) {
         errorUsernameDisplay.appendChild(usernameErrorMsg);
         errorPasswordDisplay.appendChild(passwordErrorMsg);
      } else if (userNameInput != registeredUsername && userPasswordInput === registeredUserPass){
         errorUsernameDisplay.appendChild(usernameErrorMsg);
         errorPasswordDisplay.removeChild(passwordErrorMsg);
      } else if (userNameInput === registeredUsername && userPasswordInput != registeredUserPass){
         errorUsernameDisplay.removeChild(usernameErrorMsg);
         errorPasswordDisplay.appendChild(passwordErrorMsg);
      } else if (userNameInput === registeredUsername && userPasswordInput === registeredUserPass){
         setTimeout(function(){ window.location.href = "https://dokkieee.github.io/LakoPh/userInterface.html"; }, 100);
         console.log("login successfull");
      }
   }