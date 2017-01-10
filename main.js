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


  symbols.forEach(symbol => {
    let symbolElement = document.createElement('p');
    symbolElement.innerHTML = symbol;
    symbolsContainer.appendChild(symbolElement);
    symbolTable[symbol] = symbolElement;
  });
  debugger;

  function updateSelectedSymbols(event) {
    const symbol = event.target.textContent;
    const index = selectedSymbols.indexOf(symbol);

    if (event.target !== this) {
      if (index < 0) {
        selectedSymbols.push(symbol);
      } else {
        selectedSymbols.splice(index, 1);
      }
    }
    console.log(selectedSymbols);
  }

  symbolsContainer.addEventListener('click', updateSelectedSymbols);


})();
