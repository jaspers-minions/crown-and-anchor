import React from 'react';
import { RollButton } from './RollButton.component.js';

export const DiceContainer = function DiceContainer() {
  return (
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
      <RollButton></RollButton>
    </div>
  )
}
