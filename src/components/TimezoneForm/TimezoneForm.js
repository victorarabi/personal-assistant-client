import timezones from 'timezones-list';
import axios from 'axios';
import { useState } from 'react';
import './TimezoneForm.scss';

//fetches server_URL from environment Variable
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

//component that renders the form to change a user timezone on the db
export default function TimezoneForm({ setShowModal, setModalType }) {
  const [timezone, setTimezone] = useState('');
  //POST request to change user's timezone on the db
  function timezoneChange() {
    axios
      .post(
        `${SERVER_URL}/profile/timezone`,
        {
          timezone: timezone,
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
        alert(err.response);
      });
  }
  //handle changes to the timezone form input
  function handleTzForm(e) {
    console.log(e.target);
    setTimezone(e.target.value);
  }
  //handle form submition
  function handleChangeSubmit(e) {
    e.preventDefault();
    if (timezone === '') {
      alert('Please select a valid timezone.');
    } else {
      timezoneChange();
    }
  }
  //handle cancel
  function handleCancel(e) {
    setShowModal('no');
    setModalType(null);
  }
  return (
    <div className="tz-form">
      <h1 className="tz-form__title">Change Timezone</h1>
      <label className="tz-form__label" htmlFor="timezone">
        Please select or write the new timezone:
      </label>
      <input
        className="tz-form__input"
        id="timezone"
        name="timezone"
        list="timezones"
        placeholder="Select a timezone"
        value={timezone}
        required
        onChange={handleTzForm}
      />
      <datalist id="timezones">
        {timezones.map((timezone, index) => {
          const tz = timezone.tzCode;
          return <option key={index} value={tz} />;
        })}
      </datalist>
      <div className="tz-form__nav-container">
        <button className="tz-form__btn" onClick={handleChangeSubmit}>
          Change timezone
        </button>
        <button className="tz-form__btn" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
}
