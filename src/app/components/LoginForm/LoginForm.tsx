import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './LoginForm.scss';

import {Auth} from '../../services/auth';

const apiUrl = 'http://35.233.79.129/auth';

export const LoginForm = () => {
  const initValue = {
    username: '',
    password: '',
    error: false,
  };

  const [username, setUsername] = useState<string>(initValue.username);
  const [password, setPassword] = useState<string>(initValue.password);
  const [error, setError] = useState<boolean>(initValue.error);

  let a = new Auth(5, initValue.username, initValue.password);
  console.log('A = ', a);
  const b = a.Test(50)
  console.log('New A = ', b);


  const signUpHandler = (username: string, password: string) => {
    const data = {
      username,
      password,
    };

    const checkData = Object.entries(data).length !== 0;

    if (checkData) {
      const checkUsername = Boolean(username.length === 0);
      const checkPassword = Boolean(password.length === 0);

      if (checkUsername || checkPassword) {
        setError(true);
      } else {
        axios
          .post(apiUrl, data)
          .then((response) => {
            console.log(response);
            const token = response.data.token;
            localStorage.setItem('user', JSON.stringify(token));
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } else {
      setError(true);
    }
  };

  return (
  <div className='wrappingForm'>
    <div className='signInForm'>
      <div className='signInFormInpt'>
        <p className='signInFormTitle'> Login </p>
        <p> <input placeholder='Name' value={username} onChange={(e) => setUsername(e.target.value)} /> </p>
        <p> <input placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} /> </p>
        {error && <p className = 'signUpFormError'> Username or password cannot be empty string </p>}
        <button className='signInFormBtn' onClick={() => signUpHandler(username, password)}> Sign in </button>
      </div>
      <div className='signInFormWrapper'>
        <img src={`${process.env.PUBLIC_URL}/img/login.png`} alt='login' className='signInFormImg' />
        <p className='signInFormLinkWrapper'> <Link to='/signup' className='signInFormLink'> Create an account </Link> </p>
      </div>
    </div>
  </div>      
  );
};
