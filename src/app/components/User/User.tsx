import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import jwt from 'jwt-decode';
import jwt_decode from "jwt-decode";

import { TotalStatistics } from '../../components';
import './User.scss';

export const User = () => {
  let user:any = localStorage.getItem('user');
  user = jwt_decode(user);

  console.log('user:', user);
  
  console.log('user: ', user);
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
              <p className = 'userInfoBioName'> {user.username} </p>
              <p className = 'userInfoBioBio'> {user.role} </p>
              <p className = 'userInfoBioLocation'> Kyiv, Ukraine </p>
          </div>
        </div>
        <div className = 'userLink'>
          <p className = 'userLinkWrapper'> <Link className = 'userLinkWrapperLink' to = '/edit'> Edit profile </Link> </p>
          <p className = 'userLinkWrapper'> <Link className = 'userLinkWrapperLink' to = '/edit'> Exit </Link> </p>
        </div>
        <div className = 'userstatisticsBlock'>
          {/* <Statistics /> */}
          <TotalStatistics />
        </div>
      </div>
    </Fragment>
  );
};
