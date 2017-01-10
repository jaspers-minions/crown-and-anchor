/*
Button for 'Start Game'
Total funds display
Squares displaying symbols
  *Crown
  *Anchor
  *Heart
  *Club
  *Spade
  *Diamond
Click symbol to select and place bet (player can select up to 3 different symbols)
Click to roll x3 6-sided dice
Calculate win/loss total and add to funds
*/

// Display funds
(function crownAndAnchorGame() {
  'use strict';
  const funds = 100;
  const symbols = ['Crown', 'Anchor', 'Heart', 'Club', 'Spade', 'Diamond'];
  const selectedSymbols = [];
  const symbolsContainer = document.createElement('div');
  symbolsContainer.classList.add('symbolsContainer');
  document.body.insertBefore(symbolsContainer, document.body.lastElementChild);


  const fundsElement = document.createElement('p');
  fundsElement.innerHTML = funds + ' coins';
  document.body.insertBefore(fundsElement, document.body.firstElementChild);


  const symbolTable = {};

  // create element for each symbol and add it to symbols container and symbols table
  symbols.forEach(symbol => {
    const wrapper = document.createElement('div');
    symbolsContainer.appendChild(wrapper);

    const symbolElement = document.createElement('p');
    symbolElement.innerHTML = symbol;
    wrapper.appendChild(symbolElement);

    const betElement = document.createElement('input');
    wrapper.appendChild(betElement);

    const betButton = document.createElement('button');
    betButton.textContent = 'Bet';
    wrapper.appendChild(betButton);

    symbolTable[symbol] = symbolElement;
  });

  function updateSelectedSymbols(event) {
    const symbol = event.target.textContent;
    const index = selectedSymbols.indexOf(symbol);

    if (event.target === this) {
      return;
    }

    if (index < 0 && selectedSymbols.length < 3) {
      selectedSymbols.push(symbol);
      symbolTable[symbol].classList.add('selected');
    } else if (index < 0 && selectedSymbols.length === 3) {
      return;
    } else {
      selectedSymbols.splice(index, 1);
      symbolTable[symbol].classList.remove('selected');
    }
  }

  symbolsContainer.addEventListener('click', updateSelectedSymbols);
  

})();
