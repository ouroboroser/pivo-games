import React, { Fragment } from 'react';
import { User, Games, AuthNavBar } from '../../components';
import './Profile.scss';

export const Profile = () => {
  return (
    <Fragment>
      <AuthNavBar />
      <div className = 'profile'>
        <User />
        <Games />
      </div>
    </Fragment>
  );
};
