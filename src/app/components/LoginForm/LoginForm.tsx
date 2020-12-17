import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginForm.scss';
import { Auth } from './Login';


export const LoginForm = (props: {auth: Auth}) => {
  
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  
  return (
  <div className='wrappingForm'>
    <div className='signInForm'>
      <div className='signInFormInpt'>
        <p className='signInFormTitle'> Login </p>
        <p> <input placeholder='Name' value={username} onChange={(e) => setUsername(e.target.value)} /> </p>
        <p> <input placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} /> </p>
        {error && <p className = 'signUpFormError'> Username or password cannot be empty string </p>}
        <button className='signInFormBtn' onClick={() => props.auth.login(username, password)}> Sign in </button>
      </div>
      <div className='signInFormWrapper'>
        <img src={`${process.env.PUBLIC_URL}/img/login.png`} alt='login' className='signInFormImg' />
        <p className='signInFormLinkWrapper'> <Link to='/signup' className='signInFormLink'> Create an account </Link> </p>
      </div>
    </div>
  </div>      
  );
};
