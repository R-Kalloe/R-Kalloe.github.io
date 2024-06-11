//Getting the first news message container for creating a popup
const firstNewsMessage = document.querySelector(".news-message");
const closePopup = document.querySelector(".close-popup");
const messagePopup = document.querySelector(".news-message-popup");
const blurElements = document.querySelectorAll(".blur");

//Adding an addEventListener to the div
firstNewsMessage.addEventListener("click", function () {
  //Adding the classlist so the popup will show
  messagePopup.classList.add("news-message-popup-open");
  //Adding a blur of 5 pixels to each element that contains the blur class
  blurElements.forEach((element) => {
    element.style.filter = "blur(5px)";
  });
});

//Adding an addEventListener to the div
closePopup.addEventListener("click", function () {
  messagePopup.classList.remove("news-message-popup-open");
  //Removing the 5 pixel blur so the blur will disappear if the popup gets closed
  blurElements.forEach((element) => {
    element.style.filter = "none";
  });
});

//Getting the container for the news messages
const newsMessageContainer = document.querySelector(".news-message-container");
//Adding news messages using JavaScript logic

//News message 1
newsMessageContainer.innerHTML += `<div class="auto-news-message"><img class="news-image" src="image/slideshow/kz2-1.jpg" alt="An image of Ruben Texel"></img><h2 id="news-message-title">
  Ruben Texel wint het WK met RK-Racing!!!
</h2><hr id="news-message-title-hr">
<p id="auto-news-message-text">
Wij zijn ongelooflijk trots om te mogen delen dat Ruben Texel wereldkampioen 
is geworden op het WK die gehouden is in Engeland! Na een harde crash in de eerste race hebben onze monteurs de kart optijd kunnen repareren voor een geweldige prestatie.
</p></div>`;

//News message 2
newsMessageContainer.innerHTML += `<div class="auto-news-message-2"><img class="news-image" src="image/slideshow/IMG_1984.jpg" alt="An image of Rowesh Kalloe"></img><h2 id="news-message-title-2">
  Rowesh Kalloe is 21 januari terug op Assen!
</h2><hr id="news-message-title-hr-2">
<p id="auto-news-message-text">
In november 2023 mocht Rowesh zijn debuut maken in de Tillotson T4 series van Nederland bij Esmea Racing. Rowesh Kalloe keert deze week terug, wederom op Assen.
Deze wedstrijd is live te volgen via YouTube, dus neem zeker een kijkje!
</p></div>`;

//Popup variables and logic for the second news message
const secondNewsMessage = document.querySelector(".auto-news-message");
const messagePopup2 = document.querySelector(".news-message-popup-2");
const closeSecondPopup = document.querySelector(".close-second-popup");

//Adding an addEventListener to the div
secondNewsMessage.addEventListener("click", function () {
  //Adding the classlist so the popup will show
  messagePopup2.classList.add("news-message-popup-open");
  //Adding a blur of 5 pixels to each element that contains the blur class
  blurElements.forEach((element) => {
    element.style.filter = "blur(5px)";
  });
});

//Adding an addEventListener to the div
closeSecondPopup.addEventListener("click", function () {
  messagePopup2.classList.remove("news-message-popup-open");
  //Removing the 5 pixel blur so the blur will disappear if the popup gets closed
  blurElements.forEach((element) => {
    element.style.filter = "none";
  });
});

//Popup variables and logic for the third popup
const thirdNewsMessage = document.querySelector(".auto-news-message-2");
const messagePopup3 = document.querySelector(".news-message-popup-3");
const closeThirdPopup = document.querySelector(".close-third-popup");

//Adding an addEventListener to the div
thirdNewsMessage.addEventListener("click", function () {
  //Adding the classlist so the popup will show
  messagePopup3.classList.add("news-message-popup-open");
  //Adding a blur of 5 pixels to each element that contains the blur class
  blurElements.forEach((element) => {
    element.style.filter = "blur(5px)";
  });
});

//Adding an addEventListener to the div
closeThirdPopup.addEventListener("click", function () {
  messagePopup3.classList.remove("news-message-popup-open");
  //Removing the 5 pixel blur so the blur will disappear if the popup gets closed
  blurElements.forEach((element) => {
    element.style.filter = "none";
  });
});
