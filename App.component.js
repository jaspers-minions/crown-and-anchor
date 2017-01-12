import React from 'react';
import { GameTile } from './GameTile.component.js';
import { DiceContainer } from './DiceContainer.component.js';

export const App = function App() {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <GameTile icon="❤️"></GameTile>
            <GameTile icon="👑"></GameTile>
            <GameTile icon="🔶"></GameTile>
          </tr>
          <tr>
            <GameTile icon="♠️"></GameTile>
            <GameTile icon="⚓️"></GameTile>
            <GameTile icon="♣️"></GameTile>
          </tr>
        </tbody>
      </table>
      <DiceContainer></DiceContainer>
      <div className="funds">
        <h2>Funds: </h2><p></p>
      </div>
    </div>
  )
}
