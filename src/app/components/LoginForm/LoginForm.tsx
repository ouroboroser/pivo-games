import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Loading } from '../../components';
import './LoginForm.scss';
import { Auth } from './Login';
import axios from 'axios';

export const LoginForm = (props: { auth: Auth }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [_auth, _setAuth] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const apiUrl = 'http://35.233.79.129/auth';

  const auth = (username: string, password: string) => {
    const data = {
      username,
      password,
    };

    if (username.length === 0 || password.length === 0) {
      console.log('ERROR');
    } else {
      axios
        .post(apiUrl, data)
        .then((response) => {
          setLoading(true);
          console.log(response);
          const token = response.data.token;
          localStorage.setItem('user', JSON.stringify(token));
          _setAuth(true);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }
  };

  if (_auth) {
    console.log('AUTH');
    return <Redirect to='/profile' />;
  } else {
    console.log('NOT AUTH');
  }

  return (
    <div className='wrappingForm'>
      <div className='signInForm'>
        <div className='signInFormInpt'>
          <p className='signInFormTitle'> Login </p>
          <p>
            {' '}
            <input
              placeholder='Name'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />{' '}
          </p>
          <p>
            {' '}
            <input
              placeholder='Password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />{' '}
          </p>
          {error && (
            <p className='signUpFormError'>
              {' '}
              Username or password cannot be empty string{' '}
            </p>
          )}
          <button
            className='signInFormBtn'
            onClick={() => auth(username, password)}
          >
            {' '}
            Sign in{' '}
          </button>
          {loading ? <Loading /> : ''}
        </div>
        <div className='signInFormWrapper'>
          <img
            src={`${process.env.PUBLIC_URL}/img/login.png`}
            alt='login'
            className='signInFormImg'
          />
          <p className='signInFormLinkWrapper'>
            {' '}
            <Link to='/signup' className='signInFormLink'>
              {' '}
              Create an account{' '}
            </Link>{' '}
          </p>
        </div>
      </div>
    </div>
  );
};
