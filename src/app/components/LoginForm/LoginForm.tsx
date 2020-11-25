import React, { useState } from 'react';
import axios from 'axios';

const apiUrl = 'http://35.233.79.129/auth'

export const LoginForm = () => {
  const initValue = {
    username: '',
    password: '',
    error: false,
  };

  const [username, setUsername] = useState<string>(initValue.username);
  const [password, setPassword] = useState<string>(initValue.password);
  const [error, setError] = useState<boolean>(initValue.error);

  const signUpHandler = (username: string, password: string) => {
    const data = {
      username,
      password,
    };

    const checkData = Object.entries(data).length !== 0;
    
    if (checkData) {
      const checkUsername = Boolean(username.length === 0)
      const checkPassword = Boolean(password.length === 0)

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
    <div>
      <div>
        <p> <input placeholder='Name' value={username} onChange={(e) => setUsername(e.target.value)} /> </p>
        <p> <input placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} /> </p>
        {error && <p> Username or password cannot be empty string </p>}
        <button onClick={() => signUpHandler(username, password)}> Sign in </button>
      </div>
    </div>
  );
};
