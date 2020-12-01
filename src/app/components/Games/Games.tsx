import React, {useState, useEffect} from 'react';
import { Game } from '../Game/Game';
import Carousel from 'nuka-carousel';
import {IoIosArrowForward , IoIosArrowBack} from 'react-icons/all';
import ParticlesBg from "particles-bg";

import './Games.scss';

export const Games = () => {
  return (
      <div className = 'games'>
        <div> just test </div>
        <Carousel renderCenterLeftControls={({ previousSlide }) => (
        <button onClick={previousSlide} className = 'gamesBtn '>
           <IoIosArrowBack size = {56} />
           </button>)} renderCenterRightControls={({ nextSlide }) => (
           <button onClick={nextSlide} className = 'gamesBtn '>
             <IoIosArrowForward size = {56} />
             </button>
             )}>
               <Game gameName = 'song' linkPath = '/song'/>
               <Game gameName = 'crossword' linkPath = '/crossword'/>
               <Game gameName = 'millionare' linkPath = '/millionare'/>
          </Carousel>
      </div>
  )
};
