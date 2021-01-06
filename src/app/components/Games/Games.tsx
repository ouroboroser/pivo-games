import React from 'react';
import { Game } from '../Game/Game';
import Carousel from 'nuka-carousel';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/all';
import './Games.scss';

import {
  GameName,
  GameLink,
  GameLinkPath,
  GamePicture,
  GameDescription,
} from './Games.enum';

export const Games = () => {
  return (
    <div className='games'>
      <Carousel
        renderCenterLeftControls={({ previousSlide }) => (
          <button onClick={previousSlide} className='gamesBtn '>
            <IoIosArrowBack size={56} />
          </button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <button onClick={nextSlide} className='gamesBtn '>
            <IoIosArrowForward size={56} />
          </button>
        )}
      >
        <Game
          gameName={GameName.gameNameMillionare}
          gameLink={GameLink.gameLinkMillionare}
          linkPath={GameLinkPath.gameLinkMillionare}
          gamePicture={GamePicture.gamePictureMillionare}
          gameDescription={GameDescription.gameDescriptionMillionare}
        />

        <Game
          gameName={GameName.gameNameSong}
          gameLink={GameLink.gameLinkSong}
          linkPath={GameLinkPath.gameLinkSong}
          gamePicture={GamePicture.gamePictureSong}
          gameDescription={GameDescription.gameDescriptionSong}
        />

        <Game
          gameName={GameName.gameNameCrossword}
          gameLink={GameLink.gameLinkCrossword}
          linkPath={GameLinkPath.gameLinkCrossword}
          gamePicture={GamePicture.gamePictureCrossword}
          gameDescription={GameDescription.gameDescriptionCrossword}
        />
      </Carousel>
    </div>
  );
};
