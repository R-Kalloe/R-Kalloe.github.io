// Getting the container with querySelector so we can build the cards with a for loop
const cardContainer = document.querySelector(".cards-container-games");

// Fetching the JSON data through the NodeJS server
fetch("http://localhost:3000/games-activision")
  .then((data) => data.json())
  .then((activisonData) => {
    showCards(activisonData);
    return fetch("http://localhost:3000/games-rockstar");
  })
  .then((data) => data.json())
  .then((rockstarData) => {
    showCards(rockstarData);
    return fetch("http://localhost:3000/games-ubisoft");
  })
  .then((data) => data.json())
  .then((ubisoftData) => {
    showCards(ubisoftData);
  });

// Function to show the JSON data in Cards on the browser
function showCards(games) {
  let htmlCode = "";
  for (let i = 0; i < games.length; i++) {
    const game = games[i];
    htmlCode += createCard(game);
  }
  cardContainer.innerHTML += htmlCode;
}

