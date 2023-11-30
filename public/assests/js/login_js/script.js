var tabPane = document.querySelectorAll(".tab-pane");
var loginAnchor = document.querySelector(".loginAnchor");
var registerAnchor = document.querySelector(".registerAnchor");
var form = document.querySelectorAll("form");

console.log(form);

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
