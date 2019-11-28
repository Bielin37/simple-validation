const name = document.getElementById("name");
const password = document.getElementById("password");
const lastName = document.getElementById("lastName");
const checkName = document.getElementById("checkName");
const checklastName = document.getElementById("checklastName");
const checkEmail = document.getElementById("checkEmail");
const checkPassword = document.getElementById("checkPassword");
const form = document.getElementById("form");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

form.addEventListener("onclick", e => {
  e.preventDefault();
  if (name.value == null || name.value == "" || name.value.length < 3) {
    name.style.border = "2px solid red";
    checkName.style.display = "block";
  }
  if (
    lastName.value == null ||
    lastName.value == "" ||
    lastName.value.length < 3
  ) {
    lastName.style.border = "2px solid red";
    checklastName.style.display = "block";
  }
  if (email.value == null || email.value == "" || email.value.length < 3) {
    email.style.border = "2px solid red";
    checkEmail.style.display = "block";
  }
});
password.onfocus = function() {
  document.getElementById("message").style.display = "block";
};
password.onblur = function() {
  document.getElementById("message").style.display = "none";
};
password.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if (password.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if (password.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if (password.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if (password.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
};
form.addEventListener("submit", e => {
  if (name.value || email.value || lastName.value || password.value) {
    return true;
  }
});
