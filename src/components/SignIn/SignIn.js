import { useState } from 'react';
import './SignIn.scss';
import axios from 'axios';

//fetches server_URL from environment Variable
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

/**
 * Component used to SignIn to the app using password
 */
export default function SignIn() {
  //states for username and password forms
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const postUrl = SERVER_URL + '/auth/local/login';
  //Function that POST login data to the sever
  function serverLogin(username, password) {
    axios
      .post(
        postUrl,
        { username: username, password: password },
        { withCredentials: true }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  //function that handles changes to the username form input
  function handleUsernameForm(e) {
    setUsername(e.target.value);
  }

  //function that handles changes to the password form input
  function handlePasswordForm(e) {
    setPassword(e.target.value);
  }

  //Function that handles submit
  function handleSubmit(e) {
    serverLogin(username, password);
  }

  return (
    <div className="sign-in">
      <h3>Sign In</h3>
      <div className="sign-in__form">
        <label className="sign-in__label" htmlFor="username">
          Username:
        </label>
        <input
          className="sign-in__input"
          id="username"
          name="username"
          type="text"
          required
          minLength="6"
          maxLength="36"
          placeholder="Username"
          value={username}
          onChange={handleUsernameForm}
        />
        <label className="sign-in__label" htmlFor="password">
          Password:
        </label>
        <input
          className="sign-in__input"
          id="password"
          name="password"
          type="password"
          required
          minLength="6"
          maxLength="36"
          placeholder="Password"
          value={password}
          onChange={handlePasswordForm}
        />
        <button className="sign-in__btn" onClick={handleSubmit}>
          Sign In
        </button>
      </div>
    </div>
  );
}
