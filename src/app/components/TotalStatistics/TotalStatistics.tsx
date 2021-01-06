import React from 'react';
import Carousel from 'nuka-carousel';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/all';
import './TotalStatistics.scss';

import { Statistics } from '../Statistics/Statistics';

import { games } from './data/games';
import { points } from './data/points';
import { wins } from './data/wins';

export const TotalStatistics = () => {
  return (
    <div className='statistics'>
      <Carousel
        renderCenterLeftControls={({ previousSlide }) => (
          <button onClick={previousSlide} className='statisticsBtn'>
            <IoIosArrowBack size={56} />
          </button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <button onClick={nextSlide} className='statisticsBtn '>
            <IoIosArrowForward size={56} />
          </button>
        )}
      >
        <Statistics value = {games} />
        <Statistics value = {points} />
        <Statistics value = {wins} />
        
      </Carousel>
    </div>
  );
};
