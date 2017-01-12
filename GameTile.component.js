import React from 'react';
import { GameSymbol } from './GameSymbol.component.js';
import { BetInput } from './BetInput.component.js';

export const GameTile = function GameTile(props) {
  return (
    <th>
      <GameSymbol icon={props.icon}></GameSymbol>
      <BetInput></BetInput>
    </th>
  )
}
