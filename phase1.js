document.addEventListener('DOMContentLoaded', function (e) {
    // dont forget the steps. one step at a time. 
    e.preventDefault();
    // we are working on getting the cards to show up. we are starting with a div/continer method. see if we can get the card to show up. a table might also help to. look into both. 
   

const container = document.getElementById('grid-container');
const values = ['🍎', '🍌', '🍇', '🍓', '🍋', '🍐', '🍊', '🍉', '🍍', '🥭', '🍎', '🍌', '🍇', '🍓', '🍋', '🍐', '🍊', '🍉', '🍍', '🥭'];

function createMatchingGrid(cards) {
  cards.forEach(value => {
    // 1. Create the outer wrapper
    const card = document.createElement('div');
    card.classList.add('grid-item');

    // 2. Create the inner flippable container
    const inner = document.createElement('div');
    inner.classList.add('card-inner');

    // 3. Create both faces
    const front = document.createElement('div');
    front.classList.add('card-front');
    front.innerText = value; // The "hidden" symbol

    const back = document.createElement('div');
    back.classList.add('card-back');
    back.innerText = '?'; // The "cover"

    // 4. Assemble and add the click event
    inner.appendChild(front);
    inner.appendChild(back);
    card.appendChild(inner);

    card.addEventListener('click', () => {
      inner.classList.toggle('is-flipped');
    });

    container.appendChild(card);
  });
}

createMatchingGrid(values);
})