import { useState } from 'react';
import './SignIn.scss';
import axios from 'axios';

const SERVER_URL = process.env.SERVER_URL;
console.log(SERVER_URL);

/**
 * Component used to SignIn to the app using password
 */
export default function SignIn() {
  //states for username and password forms
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //Function that handles the submit
  function serverLogin(username, password) {
    axios.post(`${SERVER_URL}`);
  }

  //function that handles changes to the username form input
  function handleUsernameForm(e) {
    setUsername(e.target.value);
  }

  //function that handles changes to the password form input
  function handlePasswordForm(e) {
    setPassword(e.target.value);
  }

  return (
    <div className="sign-in">
      <h3>Sign In</h3>
      <form className="sign-in__form">
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
        <button className="sign-in__btn" type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
}
