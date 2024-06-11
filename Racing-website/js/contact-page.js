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

let messageArea = document.querySelector("#message");
let heightLimit = 20;
