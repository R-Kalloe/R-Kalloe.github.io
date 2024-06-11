const changeCss = () => {
    const navElement = document.querySelector("nav");
    if (window.scrollY > 20) {
      navElement.style.backgroundColor = "rgb(250, 250, 250)";
    } else {
      navElement.style.backgroundColor = ""; 
    }
  };
  window.addEventListener("scroll", changeCss);

// Getting the play buttons from the cards
const playHigherLower = document.querySelector(".higher-lower");
const playEscapeRoom = document.querySelector(".escape-room");
const playBuildAGame = document.querySelector(".build-a-game");
const viewRacingWebsite = document.querySelector(".racing-website");

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

document.addEventListener('DOMContentLoaded', () => {
  const scrollButton = document.querySelector('#scroll-down');
  scrollButton.addEventListener('click', () => {
      window.scrollBy({ top: 750, left: 0});
  });
});

  