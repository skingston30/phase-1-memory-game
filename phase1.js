document.addEventListener('DOMContentLoaded', function (e) {
 
  e.preventDefault;

  const container = document.getElementById('grid-container');
  const values = ['🍎', '🍌', '🍇', '🍓', '🍋', '🍐', '🍊', '🍉', '🍍', '🥭', '🍎', '🍌', '🍇', '🍓', '🍋', '🍐', '🍊', '🍉', '🍍', '🥭'];

  let firstCard = null;
  let secondCard = null;
  let lockBoard = false;

  let score = 0;
  let attempts = 0;
  const totalPairs = values.length / 2; 

  //function for shuffling the cards
  function shuffleCards(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  shuffleCards(values);

  // Function for the fireworks that go off when the game is won
  function celebrate() {
  console.log("Fireworks launched!");
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      const firework = document.createElement('div');
      firework.className = 'firework';
      
      // Random position on screen
      firework.style.left = Math.random() * 100 + 'vw';
      firework.style.top = Math.random() * 100 + 'vh';
      
      // Random color
      const colors = ['#ff0044', '#00ff44', '#0044ff', '#ffff44'];
      firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      
      document.body.appendChild(firework);
      
      setTimeout(() => firework.remove(), 1000);
    }, i * 200); 
  }
  confetti(); 
}


  // function to handle how to cards work and the matching logic 
  const handleFlip = (e) => {
    const clickedCard = e.currentTarget;
    const inner = clickedCard.querySelector('.card-inner'); 

    if (lockBoard || clickedCard === firstCard) return;

    inner.classList.add('is-flipped');

    if (!firstCard) {
      firstCard = clickedCard;
      return;
    }

    secondCard = clickedCard;

    const val1 = firstCard.querySelector('.card-front').innerText;
    const val2 = secondCard.querySelector('.card-front').innerText;

    if (val1 === val2) {
      // MATCH!
      score++;
      attempts++;
      updateDisplay(); 
      
      if (score === totalPairs) {
       celebrate(); 
       
    }
      resetTracker();
    } else {
      // NO MATCH
      attempts++;
      updateDisplay();
      lockBoard = true;
      setTimeout(() => {
       firstCard.querySelector('.card-inner').classList.remove('is-flipped');
        secondCard.querySelector('.card-inner').classList.remove('is-flipped');
        resetTracker();
      }, 1500);
    }
  };

  const resetTracker = () => {
    [firstCard, secondCard, lockBoard] = [null, null, false];
  };
  

  // function to make the cards 
  function createMatchingGrid(cards) {
    cards.forEach(value => {
      const card = document.createElement('div');
      card.classList.add('grid-item');

      const inner = document.createElement('div');
      inner.classList.add('card-inner');

      const front = document.createElement('div');
      front.classList.add('card-front');
      front.innerText = value;

      const back = document.createElement('div');
      back.classList.add('card-back');
      back.innerText = '?';

      inner.appendChild(front);
      inner.appendChild(back);
      card.appendChild(inner);

      card.addEventListener('click', handleFlip);

      container.appendChild(card);
    });
  }

  createMatchingGrid(values);

  // Function to update the text on your screen
function updateDisplay() {
  const best = localStorage.getItem('matchingGameBest') || '--';
  document.getElementById('score').innerText = `Matches: ${score}`;
  document.getElementById('attempts').innerText = `Tries: ${attempts}`;
  
}

// The Reset Function
function resetGame() {
  //Clear the board
  container.innerHTML = '';
  //Reset the logic
  [score, attempts, firstCard, secondCard, lockBoard] = [0, 0, null, null, false];
  
  //Shuffle and Rebuild
  shuffleCards(values);
  createMatchingGrid(values);
  updateDisplay();
}

const button = document.getElementById("restartGame");
button.addEventListener('click', resetGame)

});
