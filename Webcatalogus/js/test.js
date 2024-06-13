fetch("http://localhost:3000/shoes-nike")
  .then((data) => data.json())
  .then((myJsonData) => showCards(myJsonData));

const container = document.querySelector(".card-container");

function showCards(shoes) {
  console.log(shoes);

  let htmlCode = "";
  for (let i = 0; i < shoes.length; i++) {
    const shoe = shoes[i];

    htmlCode += createCard(shoe);
  }

  container.innerHTML = htmlCode;
}

function createCard(shoe) {
  const card = `
        <div class="card">
            <h1 class="card-title">${shoe.title}</h1>
            <img src="${shoe.imageUrl}"></img>
            <p>${shoe.description}</p>
        </div>
    `;
  return card;
}
