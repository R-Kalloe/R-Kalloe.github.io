//JavaScript voor header | Achtergrondkleur wordt donkerder
const changeCss = () => {
  const navElement = document.querySelector("nav");
  if (window.scrollY > 20) {
    navElement.style.backgroundColor = "rgb(250, 250, 250)";
  } else {
    navElement.style.backgroundColor = "";
  }
};
window.addEventListener("scroll", changeCss);

// Alle variabelen ophalen van de projectbuttons
const playHigherLower = document.querySelector(".higher-lower");
const playEscapeRoom = document.querySelector(".escape-room");
const playBuildAGame = document.querySelector(".build-a-game");
const viewRacingWebsite = document.querySelector(".racing-website");
const viewWebcatalogus = document.querySelector(".webcatalogus");
const viewDashboard = document.querySelector(".dashboard");

//AddEventListeners voor elk project die de gebruiker redirect naar het desbetreffende project
playHigherLower.addEventListener("click", function () {
  window.open("Higher Lower/index.html", "_blank");
});

playEscapeRoom.addEventListener("click", function () {
  window.open("Escape-room/index.html", "_blank");
});

playBuildAGame.addEventListener("click", function () {
  window.open("Build-A-Game/index.html", "_blank");
});

viewRacingWebsite.addEventListener("click", function () {
  window.open("Racing-website/index.html", "_blank");
});

viewWebcatalogus.addEventListener("click", function () {
  window.open("Webcatalogus/index.html", "_blank");
});

viewDashboard.addEventListener("click", function () {
  alert("Dit project is helaas nog niet beschikbaar ");
});

//JavaScript waardoor de gebruiker die op de knop drukt met ID 'Scroll-down' 750px naar beneden wordt genavigeerd.
document.addEventListener("DOMContentLoaded", () => {
  const scrollButton = document.querySelector("#scroll-down");
  scrollButton.addEventListener("click", () => {
    window.scrollBy({ top: 750, left: 0 });
  });
});
