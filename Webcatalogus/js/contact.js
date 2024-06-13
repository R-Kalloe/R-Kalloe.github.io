// //Getting the form element from the HTML
const contactForm = document.querySelector(".contact-form");

//Declaring the function adjustInputwidth
function adjustInputWidth(inputElement) {
  // Calculating the minimum width of the inputfields
  const minWidth = 229;

  // Calculating the maximum of the scrollWidth of the input field and the minimum width
  const newWidth = Math.max(inputElement.scrollWidth, minWidth);

  // Change the width of the inputfields and make sure that the minimum width won't be smaller than 229 pixels
  inputElement.style.width = newWidth + "px";

  // In case that the length input is 0, the minimum width is set
  if (inputElement.value.length === 0) {
    inputElement.style.width = minWidth + "px";
  } else {
    // The inputfield with will decrease with 5 pixels everytime a letter is removed
    inputElement.style.width =
      Math.max(inputElement.scrollWidth - 5, minWidth) + "px";
  }
}

//Adding an event listener to the form
//With the "input", we select the input fields from the form if the user typs in the input, the code will execute
contactForm.addEventListener("input", function (event) {
  //This will check if the event is activated by the input-fields with the type "text". We need to do this so the input fields will only expand width.
  if (
    event.target.tagName.toLowerCase() === "input" &&
    event.target.type === "text"
  ) {
    //If the function is called correctly, the adjustInputWidth function gets called
    adjustInputWidth(event.target);
  }
});

//Getting the textarea element from the HTML
let messageArea = document.querySelector("#message");

//Adding a height limit so the textarea will never get more than 20 rows
let heightLimit = 20;

//Getting the popup elements from the HTML
const submitButtonPopup = document.querySelector(".submit-button-popup");
const closePopup = document.querySelector(".close-popup");

//Adding an event listener to the submit element of the form
contactForm.addEventListener("submit", function (event) {
  //This code will stop the events from the form, so the page won't refresh
  event.preventDefault();
  //An if statement if the function of the form validation is true
  if (validateForm()) {
    //JavaScript code to open the popup after the submit button is clicked
    submitButtonPopup.classList.add("submit-button-popup-open");
  }
});

closePopup.addEventListener("click", function(){
    submitButtonPopup.classList.remove("submit-button-popup-open");
    location.reload();
});
//validateForm function to check if the inputfields have the correct value
function validateForm() {
  //Checking if the fields have valid data
  const inputFields = document.querySelectorAll(
    ".contact-form input[required]"
  );
  for (const inputField of inputFields) {
    //Checking if the fields are empty
    if (inputField.value.trim() === "") {
      //If the check didn't succed, return false
      return false;
    }
  }

  //In case that every check did succeed, return true
  return true;
}
