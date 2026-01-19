document.addEventListener('DOMContentLoaded', function (e) {
  // dont forget the steps. one step at a time. 
  e.preventDefault();
  // we are working on getting the cards to show up. we are starting with a div/continer method. see if we can get the card to show up. a table might also help to. look into both. 


  const container = document.getElementById('grid-container');
  const values = ['🍎', '🍌', '🍇', '🍓', '🍋', '🍐', '🍊', '🍉', '🍍', '🥭', '🍎', '🍌', '🍇', '🍓', '🍋', '🍐', '🍊', '🍉', '🍍', '🥭'];

  function shuffleCrads(values) {
    for (let i = values.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [values[i], values[j]] = [values[j], values[i]]; // Swap elements
    }
  }

  shuffleCrads(values);

  function createMatchingGrid(cards) {

    e.preventDefault();

    cards.forEach(value => {
      // to hold the card 
      const card = document.createElement('div');
      card.classList.add('grid-item');

      // to flip the card
      const inner = document.createElement('div');
      inner.classList.add('card-inner');

      // faces of card
      const front = document.createElement('div');
      front.classList.add('card-front');
      front.innerText = value;

      const back = document.createElement('div');
      back.classList.add('card-back');
      back.innerText = '?'; // The "cover"


      inner.appendChild(front);
      inner.appendChild(back);
      card.appendChild(inner);

      card.addEventListener('click', () => {
        inner.classList.toggle('is-flipped');

        let flipTimer;

        if (inner.classList.contains('is-flipped')) {
          flipTimer = setTimeout(() => {
            // Function to execute after the delay
            inner.classList.remove('is-flipped');
          }, 2000);
        }
      });

      container.appendChild(card);
    });
  }

  createMatchingGrid(values);
});