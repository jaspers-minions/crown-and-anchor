import React from 'react';
import { GameSymbol } from './GameSymbol.component.js';
import { BetInput } from './BetInput.component.js';

export const App = function App() {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th id="heart">
              <GameSymbol icon="❤️"></GameSymbol>
              <BetInput></BetInput>
            </th>
            <th id="crown">
              <GameSymbol icon="👑"></GameSymbol>
              <BetInput></BetInput>
            </th>
            <th id="diamond">
              <GameSymbol icon="🔶"></GameSymbol>
              <BetInput></BetInput>
            </th>
          </tr>
          <tr>
            <th id="spade">
              <GameSymbol icon="♠️"></GameSymbol>
              <BetInput></BetInput>
            </th>
            <th id="anchor">
              <GameSymbol icon="⚓️"></GameSymbol>
              <BetInput></BetInput>
            </th>
            <th id="club">
              <GameSymbol icon="♣️"></GameSymbol>
              <BetInput></BetInput>
            </th>
          </tr>
          </tbody>
      </table>

      <div className="dice-container">
        <div className="dice">
          <p id="dice1">👑</p>
        </div>
        <div className="dice">
          <p id="dice2">❤️</p>
        </div>
        <div className="dice">
          <p id="dice3">⚓️</p>
        </div>
        <div className="roll">
          <a href="#">Roll Dice</a>
        </div>
      </div>

      <div className="funds">
        <h2>Funds: </h2><p></p>
      </div>
    </div>
  )
}
