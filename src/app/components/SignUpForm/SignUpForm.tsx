import React, { useState } from 'react';
import axios from 'axios';

import {nameIsValid, emailIsValid, passwordIsValid } from './validation';

export const SignUpForm = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [response, setResponse] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const signUpHandler = ( name: string, email: string, password: string, confirmPassword: string) => {
    console.log( 'name:', name, 'email:', email, 'password:', password, 'confirmPassword:', confirmPassword );

    const checkedName = nameIsValid(name);
    const checkedEmail = emailIsValid(email);
    const checkedPassword = passwordIsValid(password);

    if ( !checkedName || !checkedEmail || !checkedPassword || password != confirmPassword) {
      setError(true);
      console.log('Error status has been changed');
    } else {
      const headers = {
        //'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
        'Content-Type': 'application/json',
        "Accept": "application/json",
  "X-Requested-With": "XMLHttpRequest",
  "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
      }

      const data = {
        username: name,
        password,
        email,
        role:'user'
      }

      console.log('headers:', headers )
      axios.post('http://35.233.79.129/user', { username: name, password, email, role: 'user'}, {'headers':headers})
      .then((response) => {
        
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    }
  };

  return (
    <div>
      Sing up form
      <div>
        <p> <input placeholder='Name' value={name} onChange={e => setName(e.target.value)}/> </p>
        <p> <input placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/> </p>
        <p> <input placeholder='Password' value={password} onChange={e => setPassword(e.target.value)}/> </p>
        <p> <input placeholder='Confirm password' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/> </p>
        <button onClick={() => signUpHandler(name, email, password, confirmPassword)}> Sign up </button>
      </div>
    </div>
  );
};
