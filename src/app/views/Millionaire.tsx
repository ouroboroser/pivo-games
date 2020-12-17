import React from 'react';
import { MillionareSelect } from '../components';
import { gameMillionare } from '../services/game';

export const Millionare = () => {
  return (
    <div>
      <MillionareSelect game = {gameMillionare} />
    </div>
  );
};
