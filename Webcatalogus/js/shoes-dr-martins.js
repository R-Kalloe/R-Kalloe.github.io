// Getting the container with querySelector so we can build the cards with a for loop
const cardContainer = document.querySelector(".cards-container");

// Fetching the JSON data through the NodeJS server
fetch("http://localhost:3000/shoes-dr-martins")
  .then((data) => data.json())
  .then((drMartinsData) => showCards(drMartinsData));

function showCards(shoes) {
  let htmlCode = "";
  for (let i = 0; i < shoes.length; i++) {
    const shoe = shoes[i];
    htmlCode += createCard(shoe);
  }
  cardContainer.innerHTML += htmlCode;
}

// Function to show the JSON data in Cards on the browser
function createCard(shoe) {
  const card = `
        <div class="card-style">
            <h1 class="card-title">${shoe.title}</h1>
            <img src="${shoe.imageUrl}" alt="${shoe.title}"></img>
            <p class="card-description">${shoe.description}</p>
            <p class="product-color">Available color(s): ${shoe.colour}</p>
            <hr class="color-ruler">
            <h2 class="product-price">Current price: €${shoe.price}</h2>
            <p class="product-sizes">Available sizes: ${shoe.sizes}</p>
            <hr class="end-ruler">
        </div>
    `;
  return card;
}
