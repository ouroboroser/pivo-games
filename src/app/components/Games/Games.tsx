import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import './Games.scss';

export const Games = () => {
  return (
      <div className = 'games'>
          <div className = 'gamesItem'>
            <p className = 'gamesItemWrapper'> <Link className = 'gamesItemWrapperLink' to = '/song'> Song </Link> </p>
          </div>
          <div className = 'gamesItem'>
          <p className = 'gamesItemWrapper'> <Link className = 'gamesItemWrapperLink' to = '/crossword'> Crossword </Link> </p>
          </div>
          <div className = 'gamesItem'>
          <p className = 'gamesItemWrapper'> <Link className = 'gamesItemWrapperLink' to = '/millionare'> Millionare </Link> </p>
          </div>
      </div>
  )
};
