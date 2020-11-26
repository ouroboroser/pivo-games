import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './SignUpForm.scss';

import { nameIsValid, emailIsValid, passwordIsValid } from '../validation';

const apiUrl = 'http://35.233.79.129';

export const SignUpForm = () => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  const signUpHandler = (username: string, email: string, password: string, confirmPassword: string ) => {
    const checkedUsername = nameIsValid(username);
    const checkedEmail = emailIsValid(email);
    const checkedPassword = passwordIsValid(password);

    if (username === undefined || email === undefined || password === undefined || confirmPassword === undefined) {
      setError(true);
    } else {
      if ( !checkedUsername || !checkedEmail || !checkedPassword || password !== confirmPassword) {
        setError(true);
      } else {
        axios
          .post(apiUrl + '/user', { username, password, email, role: 'user' })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  };

  return (
    <Fragment>
      <div className='wrappingForm'>
        <div className='signUpForm'>
          <div className='signUpFormInpt'>
            <p className='signUpFormTitle'> Registration </p>
            <p> <input placeholder='Name' value={username} onChange={(e) => setUsername(e.target.value)} /> </p>
            <p> <input placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} /> </p>
            <p> <input placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} /> </p>
            <p> <input placeholder='Confirm' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /> </p>
            <button className='signUpFormBtn' onClick={() => signUpHandler(username, email, password, confirmPassword)} > Sign up </button>
            {error && <p className='signUpFormError'> Data is not correct </p>}
          </div>
          <div className='signUpFormWrapper'>
            <img src={`${process.env.PUBLIC_URL}/img/welcome.png`} alt='registration' className='signUpFormImg' />
            <p className='signUpFormLinkWrapper'> <Link to='/login' className='signUpFormLink'> I am already member </Link>
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
