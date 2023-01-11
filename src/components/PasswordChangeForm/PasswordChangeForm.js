import { useState } from 'react';
import axios from 'axios';
import './PasswordChangeForm.scss';

//fetches server_URL from environment Variable
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

//form to change user's password
export default function PasswordChangeForm({ setShowModal, setModalType }) {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordConf, setNewPasswordConf] = useState('');
  //changes user password
  function changeUserPassword() {
    axios
      .post(
        `${SERVER_URL}/auth/local/change-password`,
        {
          currentPassword: currentPassword,
          newPassword: newPassword,
        },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        alert('Success: ' + response.data);
        setShowModal('no');
        setModalType(null);
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data);
      });
  }
  //handles changes to the current password input form
  function handleCurrentPasswordForm(e) {
    setCurrentPassword(e.target.value);
  }
  //handles changes to the password form input
  function handlePasswordForm(e) {
    setNewPassword(e.target.value);
  }
  //handles changes to the password form input
  function handlePasswordConfForm(e) {
    setNewPasswordConf(e.target.value);
  }
  //Handles submit
  function handleOnClick(e) {
    if (!currentPassword || !newPassword || !newPasswordConf) {
      alert('Please fill all the password fields');
      return;
    }
    e.preventDefault();
    if (newPassword === newPasswordConf) {
      changeUserPassword();
    } else {
      alert(
        'Please verify inputed password. Password and password confirmation does not match.'
      );
    }
  }
  //handles cancel
  function handleCancel(e) {
    setShowModal('no');
    setModalType(null);
  }
  return (
    <div className="change-password">
      <h1 className="change-password__title">Change your Password</h1>
      <label className="change-password__label" htmlFor="currentPassword">
        Current password:
      </label>
      <input
        className="change-password__input"
        id="currentPassword"
        name="currentPassword"
        type="password"
        required
        minLength="8"
        maxLength="40"
        placeholder="Enter your current password"
        value={currentPassword}
        onChange={handleCurrentPasswordForm}
      />
      <label className="change-password__label" htmlFor="NewPassword">
        New password:
      </label>
      <input
        className="change-password__input"
        id="newPassword"
        name="newPassword"
        type="password"
        required
        minLength="8"
        maxLength="40"
        placeholder="Enter your new password"
        value={newPassword}
        onChange={handlePasswordForm}
      />
      <label className="change-password__label" htmlFor="newPasswordConf">
        New password confirmation:
      </label>
      <input
        className="change-password__input"
        id="newPasswordConf"
        name="newPasswordConf"
        type="password"
        required
        minLength="8"
        maxLength="40"
        placeholder="confirm your new password"
        value={newPasswordConf}
        onChange={handlePasswordConfForm}
      />
      <div className="change-password__nav-container">
        <button className="change-password__btn" onClick={handleOnClick}>
          Change password
        </button>
        <button className="change-password__btn" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
}
