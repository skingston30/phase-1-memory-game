const container = document.getElementById('grid-container');

function createGrid(cells) {
  for (let i = 1; i <= cells; i++) {
    const div = document.createElement('div');
    div.classList.add('grid-item');
    div.innerText = i; // Label the cell with its number

    
    
    // Optional: Add an event listener to make it interactive
    div.addEventListener('click', () => {
      div.style.backgroundColor = '#2ecc71'; // Change color on click
    });

    container.appendChild(div);
  }
}

// Generate a grid with 20 items
createGrid(20);