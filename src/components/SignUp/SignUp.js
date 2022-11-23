import { useState } from 'react';
import './SignUp.scss';
import axios from 'axios';

//fetches server_URL from environment Variable
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

/**
 * Component used to SignUp to the app, creating an user with name, username using password
 */
export default function SignUp() {
  //states for username and password forms
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');

  //Function that POST login data to the sever
  function serverSignUp(name, username, password) {
    axios
      .post(
        `${SERVER_URL}/auth/local/signup`,
        {
          name: name,
          username: username,
          password: password,
        },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  //function that handles changes to the name form input
  function handleNameForm(e) {
    setName(e.target.value);
  }

  //function that handles changes to the username form input
  function handleUsernameForm(e) {
    setUsername(e.target.value);
  }

  //function that handles changes to the password form input
  function handlePassword1Form(e) {
    setPassword1(e.target.value);
  }

  //function that handles changes to the password form input
  function handlePassword2Form(e) {
    setPassword2(e.target.value);
  }

  //Function that handles submit
  function handleSubmit(e) {
    let password = '';
    if (password1 === password2) {
      password = password1;
      serverSignUp(name, username, password);
    } else {
      alert(
        'please verify password. Password and password confirmation are different'
      );
    }
  }

  return (
    <div className="sign-up">
      <h3>Sign Up</h3>
      <form className="sign-up__form">
        <label className="sign-up__label" htmlFor="signupname">
          Name:
        </label>
        <input
          className="sign-up__input"
          id="signupname"
          name="signupname"
          type="text"
          required
          minLength="6"
          maxLength="45"
          placeholder="Name"
          value={name}
          onChange={handleNameForm}
        />
        <label className="sign-up__label" htmlFor="signupusername">
          Username:
        </label>
        <input
          className="sign-up__input"
          id="signupusername"
          name="signupusername"
          type="text"
          required
          minLength="6"
          maxLength="36"
          placeholder="Username"
          value={username}
          onChange={handleUsernameForm}
        />
        <label className="sign-up__label" htmlFor="password1">
          Password:
        </label>
        <input
          className="sign-up__input"
          id="password1"
          name="password1"
          type="password"
          required
          minLength="6"
          maxLength="36"
          placeholder="Password"
          value={password1}
          onChange={handlePassword1Form}
        />
        <label className="sign-up__label" htmlFor="password2">
          Confirm password:
        </label>
        <input
          className="sign-up__input"
          id="password2"
          name="password2"
          type="password"
          required
          minLength="6"
          maxLength="36"
          placeholder="Password"
          value={password2}
          onChange={handlePassword2Form}
        />
        <button className="sign-up__btn" type="submit" onSubmit={handleSubmit}>
          Sign Up
        </button>
      </form>
    </div>
  );
}
