import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { Statistics } from '../Statistics/Statistics';
import './User.scss';

export const User = () => {
  //const [username, ]
  const api = 'http://35.233.79.129/user/sovasova10';

  useEffect(() => {
    axios
    .get(api)
    .then((response) => {
      console.log(response.data.user);
    })
    .catch((error) => {
      console.log(error);
    });
  })
  return (
    <Fragment>
      <div className='user'>
        <div className='userInfo'>
          <div className='userInfoAvatar'></div>
          <div className='userInfoBio'>
              <p className = 'userInfoBioName'> Username Username </p>
              <p className = 'userInfoBioBio'> student </p>
              <p className = 'userInfoBioLocation'> Kyiv, Ukraine </p>
          </div>
        </div>
        <div className = 'userLink'>
          <p className = 'userLinkWrapper'> <Link className = 'userLinkWrapperLink' to = '/edit'> Edit profile </Link> </p>
          <p className = 'userLinkWrapper'> <Link className = 'userLinkWrapperLink' to = '/edit'> Exit </Link> </p>
        </div>
        <div className = 'userstatisticsBlock'>
          <Statistics />
        </div>
      </div>
    </Fragment>
  );
};
