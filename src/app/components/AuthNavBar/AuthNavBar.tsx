import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './AuthNavBar.scss';

export const AuthNavBar = () => {
  return (
    <Fragment>
      <nav className='navbar navbar-expand-lg navbar-light bg-light wrapper'>
        <span className='navbar-brand'> PIVO </span>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item active'>
              {' '}
              <Link className='nav-link' to='/whythisapp'>
                {' '}
                Why this app{' '}
              </Link>{' '}
            </li>
            <li className='nav-item'>
              {' '}
              <Link className='nav-link' to='/about'>
                {' '}
                About us{' '}
              </Link>{' '}
            </li>
            <li className='nav-item'>
              {' '}
              <Link className='nav-link' to='/profile'>
                {' '}
                Profile{' '}
              </Link>{' '}
            </li>
            <li className='nav-item'>
              {' '}
              <Link className='nav-link' to='/'>
                {' '}
                Log out{' '}
              </Link>{' '}
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};
