var tabPane = document.querySelectorAll(".tab-pane");
var loginAnchor = document.querySelector(".loginAnchor");
var registerAnchor = document.querySelector(".registerAnchor");
var form = document.querySelectorAll("form");

var eyeOpen = document.querySelectorAll(".password i");
var passwordFeild = document.querySelectorAll(".password input");
var registerPassword = document.querySelector("#registerPassword");
var registerRepeatPassword = document.querySelector("#registerRepeatPassword");
var matchingStatement = document.querySelector(".matchingStatement");

var signUpBtn = document.querySelector("#signUp");
console.log(signUpBtn);

registerRepeatPassword.addEventListener("blur", (event) => {
  if (registerPassword.value != registerRepeatPassword.value) {
    console.log("not matched");
    signUpBtn.type = "text";
    signUpBtn.setAttribute("disabled", "");
    matchingStatement.innerHTML = "password dosen't match";
    console.log(event.currentTarget.parentElement);
  } else {
    signUpBtn.type = "submit";
    signUpBtn.removeAttribute("disabled");
    matchingStatement.innerHTML = "";
    
  }
});

function OnToast() {
  tabPane[1].classList.remove("active");
  tabPane[1].classList.remove("show");
  tabPane[0].classList.add("active");
  tabPane[0].classList.add("show");

  registerAnchor.classList.remove("active");
  loginAnchor.classList.add("active");

  butterup.toast({
    title: "",
    message: "Register SuccessFully",
    type: "success",
    icon: true, // default: false
    location: "top-center",
    dismissable: true,
    theme: "glass",
  });
}

//eye oppener and password hide and show implementations
eyeOpen.forEach((element) => {
  element.addEventListener("click", (event) => {
    event.currentTarget.nextElementSibling.type == "password"
      ? (event.currentTarget.nextElementSibling.type = "text")
      : (event.currentTarget.nextElementSibling.type = "password");
    event.currentTarget.classList.contains("la-eye-slash")
      ? event.currentTarget.classList.remove("la-eye-slash")
      : event.currentTarget.classList.add("la-eye-slash");
  });
});
