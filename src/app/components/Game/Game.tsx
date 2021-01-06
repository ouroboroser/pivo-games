import React from 'react';
import { Link } from 'react-router-dom';
import './Game.scss';

type GameProps = {
  gameName: string;
  gameLink: string;
  linkPath: string;
  gamePicture: string;
  gameDescription: string;
};

export const Game: React.FC<GameProps> = ({
  gameName,
  gameLink,
  linkPath,
  gamePicture,
  gameDescription,
}) => {
  return (
    <div className='game'>
      <div className='gameDescription'>
        <p className='gameTitle'> {gameName} </p>
        <p> {gameDescription} </p>
        <p className='gameWrapperLink'>
          {' '}
          <Link className='gameLink' to={linkPath}>
            {' '}
            {gameLink}{' '}
          </Link>{' '}
        </p>
      </div>
      <div className='gameImg'>
        <img
          className='gameImgCurrent'
          src={`${process.env.PUBLIC_URL}/img/${gamePicture}`}
          alt='login'
          width='300'
        />
      </div>
    </div>
  );
};
