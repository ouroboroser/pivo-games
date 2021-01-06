import React from 'react';
import { Link } from 'react-router-dom';
import './Main.scss';

export const Main = () => {
  const auth = localStorage.getItem('user');

  return (
    <div>
      <div className='mainScreen'>
        <div className='mainScreenTitle'>
          <p className='mainScreenTitleMain'>PIVO games</p>
          <p className='mainScreenTitleSub'> good luck and have fun </p>
          <p className='mainScreenLinkWrapper'>
            {auth ? (
              <Link className='mainScreenLink' to='/profile'>
                {' '}
                Profile{' '}
              </Link>
            ) : (
              <Link className='mainScreenLink' to='/signup'>
                {' '}
                Sing up{' '}
              </Link>
            )}
          </p>
        </div>
        <div className='mainScreenPicture'>
          <img
            className='mainScreenPictureImg'
            src={`${process.env.PUBLIC_URL}/img/testing-new-tech.png`}
            alt='main'
            width='750'
          />
        </div>
      </div>
    </div>
  );
};
