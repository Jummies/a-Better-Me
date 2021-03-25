import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import { signUp } from '../../services/auth';

import { useHistory } from 'react-router-dom'
import './SignUpForm.css'

const SignUpForm = ({authenticated, setAuthenticated}) => {
  let history = useHistory()
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");


  

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const user = await signUp(username, email, password);
      if (!user.errors) {
        setAuthenticated(true);
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }



  const loginRedirect = () => {
    history.push('/')
  }

  return (
    <div className="signUpForm">

      <form onSubmit={onSignUp}>
        <div>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={updateUsername}
            value={username}
          ></input>
        </div>
        <div>
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={updateEmail}
            value={email}
          ></input>
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={updatePassword}
            value={password}
          ></input>
        </div>
        <div>
          <input
            type="password"
            name="repeat_password"
            placeholder="Repeat Password"
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          ></input>
        </div>
        <button className="signUpForm__submit" type="submit">Sign Up</button>
      </form>

      <div className="logincontainer">
        <span onClick={loginRedirect} style={{ cursor: 'pointer', color: '#0095f6' }}>Log In </span>
      </div>

    </div>
  );
};

export default SignUpForm;
