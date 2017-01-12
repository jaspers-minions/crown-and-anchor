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
// (function crownAndAnchorGame() {
//   'use strict';
//   const fundsElement = document.querySelector('div.funds p');
//   const fundsAmount = 100;
//   fundsElement.innerHTML = fundsAmount;
//
//   const rollButton = document.querySelector('a');
//   const symbols = ['Crown', 'Anchor', 'Heart', 'Club', 'Spade', 'Diamond'];
//
//   function diceRoll() {
//     const symbols = ['❤️', '👑', '🔶', '♠️', '⚓️', '♣️'];
//     const dice1Face = document.querySelector('#dice1');
//     const dice2Face = document.querySelector('#dice2');
//     const dice3Face = document.querySelector('#dice3');
//
//     const dice1Index = Math.floor(Math.random() * 6);
//     const dice2Index = Math.floor(Math.random() * 6);
//     const dice3Index = Math.floor(Math.random() * 6);
//
//     dice1Face.innerHTML = symbols[dice1Index];
//     dice2Face.innerHTML = symbols[dice2Index];
//     dice3Face.innerHTML = symbols[dice3Index];
//   }
//
//   rollButton.addEventListener('click', diceRoll);
//
// })();


import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App.component.js';


ReactDOM.render(
  <App></App>,
  document.getElementById('root')
)
