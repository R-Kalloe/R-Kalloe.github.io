//This variables will get the logo from the HTML
const logo = document.querySelector(".logo");
const footerLogo = document.querySelector(".footer-logo");

//This will add a function that the logo can be clicked so the user can reload the site
logo.addEventListener("click", function () {
  window.location.assign("");
});

footerLogo.addEventListener("click", function () {
  window.location.assign("");
});

//This variables will get the sponsor images from the HTML
const sponsorTenIct = document.querySelector(".tenict");
const sponsorAutomotive = document.querySelector(".automotive");
const sponsorOracle = document.querySelector(".oracle");
const sponsorZiggo = document.querySelector(".ziggo");

//This addEventListeners will redirect the users to the page of the sponsor
sponsorTenIct.addEventListener("click", function () {
  window.open("https://anylinq.com/");
});
sponsorAutomotive.addEventListener("click", function () {
  window.open("https://www.automotive-online.nl/");
});
sponsorOracle.addEventListener("click", function () {
  window.open("https://www.oracle.com/nl/");
});
sponsorZiggo.addEventListener("click", function () {
  window.open("https://www.ziggo.nl/");
});
