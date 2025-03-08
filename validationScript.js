// JavaScript code for form validation
const myForm = document.forms.myForm;
let subButton = document.getElementById("submit");

// Prevent form from submitting

//document.querySelector("myForm");
const inputField = document.querySelector("#inputField");
myForm.addEventListener("submit", function (e) {
  e.preventDefault();
});

inputField.addEventListener("focus", function () {
  console.log("Input field received focus");
});
inputField.addEventListener("blur", function () {
  console.log("Input field lost focus");
});
inputField.addEventListener("change", function () {
  console.log("Input field value changed");
});

subButton.addEventListener("click", function (event) {
  // Retrieve the input field value
  let inputValue = document.getElementById("inputField").value;
  if (inputValue === "") {
    event.preventDefault();
    alert("Input is required!");
  }
  // Regular expression pattern for alphanumeric input
  let regex = /^[a-zA-Z0-9]*$/;
  // Check if the input value matches the pattern
  // Invalid input: display error message
  if (!regex.test(inputValue)) {
    event.preventDefault();
    alert("Invalid format!");
  }
  // Valid input: display confirmation and submit the form
  else {
    alert("Form has submitted successfully");
    myForm.submit();
  }
});
