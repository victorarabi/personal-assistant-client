import { useState } from 'react';
import timezones from 'timezones-list';
import axios from 'axios';
import './SignUp.scss';

//fetches server_URL from environment Variable
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

/**
 * Component used to SignUp to the app, creating an user with name, username using password
 */
export default function SignUp({ setIsLoading }) {
  //states for username and password forms
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [timezone, setTimezone] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  //Function that POST login data to the sever
  function serverSignUp() {
    if (!name || !email || !username || !timezone || !password1) {
      alert("please don't verify all the input fields");
      return;
    }
    axios
      .post(
        `${SERVER_URL}/auth/local/signup`,
        {
          name: name,
          email: email,
          username: username,
          password: password1,
          timezone: timezone,
        },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        alert('Success: ' + response.data);
        setIsLoading(true);
      })
      .catch((err) => {
        console.log(err);
        alert(err.response);
      });
  }
  //function that handles changes to the name form input
  function handleNameForm(e) {
    setName(e.target.value);
  }
  //function that handles changes to the email form input
  function handleEmailForm(e) {
    setEmail(e.target.value);
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
  //function that handles changes to the timezone form input
  function handleTzForm(e) {
    setTimezone(e.target.value);
  }
  //Function that handles submit
  function handleOnClick(e) {
    e.preventDefault();
    if (password1 === password2) {
      serverSignUp();
    } else {
      alert(
        'please verify password. Password and password confirmation are different.'
      );
    }
  }
  return (
    <div className="sign-up">
      <h3 className="sign-up__title">Sign Up</h3>
      <div className="sign-up__form">
        <label className="sign-up__label" htmlFor="signupName">
          Name:
        </label>
        <input
          className="sign-up__input"
          id="signupName"
          name="signupName"
          type="text"
          required
          minLength="6"
          maxLength="45"
          placeholder="Name"
          value={name}
          onChange={handleNameForm}
        />
        <label className="sign-up__label" htmlFor="signupEmail">
          E-mail:
        </label>
        <input
          className="sign-up__input"
          id="signupEmail"
          name="signupEmail"
          type="text"
          required
          minLength="6"
          maxLength="45"
          placeholder="E-mail"
          value={email}
          onChange={handleEmailForm}
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
          minLength="8"
          maxLength="40"
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
          minLength="8"
          maxLength="40"
          placeholder="Password"
          value={password2}
          onChange={handlePassword2Form}
        />
        <label className="sign-up__label" htmlFor="timezone">
          Timezone:
        </label>
        <input
          className="sign-up__input"
          id="timezone"
          name="timezone"
          list="timezones"
          placeholder="Select a timezone"
          required
          onChange={handleTzForm}
        />
        <datalist id="timezones">
          {timezones.map((timezone, index) => {
            const tz = timezone.tzCode;
            return <option key={index} value={tz} />;
          })}
        </datalist>
        <button className="sign-up__btn" onClick={handleOnClick}>
          Sign Up
        </button>
      </div>
    </div>
  );
}
