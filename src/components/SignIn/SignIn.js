import { useState } from 'react';
import axios from 'axios';
import './SignIn.scss';

//fetches server_URL from environment Variable
const SERVER_URL = process.env.REACT_APP_SERVER_URL;
const postUrl = SERVER_URL + '/auth/local/login';

/**
 * Component used to SignIn to the app using password
 */
export default function SignIn({ setIsLoading }) {
  //states for username and password forms
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  //Function that POST login data to the sever
  function serverLogin(username, password) {
    axios
      .post(
        postUrl,
        { username: username, password: password },
        { withCredentials: true }
      )
      .then((response) => {
        setIsLoading(response.data);
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
    e.preventDefault();
    serverLogin(username, password);
    setIsLoading(true);
  }
  return (
    <div className="sign-in">
      <h3 className="sign-in__title">Sign In</h3>
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
