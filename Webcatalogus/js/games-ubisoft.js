// Getting the container with querySelector so we can build the cards with a for loop
const cardContainer = document.querySelector(".cards-container-games");

// Fetching the JSON data through the NodeJS server
fetch("http://localhost:3000/games-ubisoft")
  .then((data) => data.json())
  .then((ubisoftData) => showCards(ubisoftData));

function showCards(games) {
  let htmlCode = "";
  for (let i = 0; i < games.length; i++) {
    const game = games[i];
    htmlCode += createCard(game);
  }
  cardContainer.innerHTML += htmlCode;
}

// Function to show the JSON data in Cards on the browser
function createCard(game) {
  const card = `
  <div class="card-style">
  <h1 class="card-title">${game.title}</h1>
  <img src="${game.img}" alt="${game.title}"></img>
  <p class="card-description">${game.description}</p>
  <p class="">Release: ${game.firstGame}</p>
  <hr class="color-ruler">
  <h2 class="player-count">Current playcount: ${game.playerCount}</h2>
  <p class="genres">Genres: ${game.genres}</p>
  <hr class="end-ruler">
</div>
    `;
  return card;
}
