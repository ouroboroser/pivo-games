import React, { Fragment } from 'react';
import { User, Games } from '../../components';
import './Profile.scss';

export const Profile = () => {
  return (
    <Fragment>
      <div className = 'profile'>
        <User />
        <Games />
      </div>
    </Fragment>
  );
};
