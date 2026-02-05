if (val1 === val2) {
      // MATCH FOUND
      score++;
      attempts++;
      updateDisplay(); // We will write this function next
      
      if (score === totalPairs) {
        setTimeout(() => alert(`You won in ${attempts} tries!`), 500);
      }
      resetTracker();
    } else {
      // NO MATCH
      attempts++;
      updateDisplay();
      lockBoard = true;
      // ... your existing setTimeout for flipping back
    }