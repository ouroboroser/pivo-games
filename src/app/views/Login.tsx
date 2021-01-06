import React from 'react';

import { LoginForm } from '../components';
// import { _Login } from '../components/LoginForm/Login';
import { _LoginWithData } from '../components/LoginForm/Login';
//import { _LoginWS } from '../components/LoginForm/Login';

export const Login = () => {
  return (
      <>
          {/* <LoginForm auth = { _Login}/> */}
          <LoginForm auth = { _LoginWithData} />
          {/* <LoginForm auth = { _LoginWS} /> */}
      </>
  )
};
