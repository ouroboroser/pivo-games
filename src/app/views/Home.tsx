import React from 'react';
import { Main } from '../components';

import { NavBar } from '../components/NavBar/NavBar';
import { AuthNavBar } from '../components/AuthNavBar/AuthNavBar';


export const Home = () => {
  const auth = localStorage.getItem('user');
  return (
    <div>
      {auth ? <AuthNavBar /> : <NavBar />}
      <Main />
    </div>
  );
};
