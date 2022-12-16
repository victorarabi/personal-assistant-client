import { useState } from 'react';
import axios from 'axios';
import './NewEvent.scss';

//saves server_URL from environment Variable
const SERVER_URL = process.env.REACT_APP_SERVER_URL;
const postUrl = SERVER_URL + '/calendar/events/create';

//Page that creates a new event
export default function NewEvent() {
  const [eventTitle, setEventTitle] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  //   const [eventTimezone, setEventTimezone] = useState('');
  const [eventStartDate, setEventStartDate] = useState('');
  const [eventEndDate, setEventEndDate] = useState('');
  const [eventReminder, setEventReminder] = useState('no');
  const [eventEmailAlert, setEventEmailAlert] = useState({
    emailReminder: 'no',
    reminderTimeUnit: 'min',
    reminderTime: 0,
  });
  const [eventPopUpAlert, setEventPopUpAlert] = useState({
    popUpReminder: 'no',
    reminderTimeUnit: 'sec',
    reminderTime: 0,
  });

  //function that POST new Event data to the server
  function newEvent(
    title,
    description,
    location,
    startDate,
    endDate,
    reminder,
    emailAlert,
    popUpAlert
  ) {
    axios
      .post(
        postUrl,
        {
          title,
          description,
          location,
          startDate,
          endDate,
          reminder,
          emailAlert,
          popUpAlert,
        },
        { withCredentials: true }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  //handles changes to the title input
  function handleTitleForm(e) {
    setEventTitle(e.target.value);
  }

  //handles changes to the description form
  function handleDescriptionForm(e) {
    setEventDescription(e.target.value);
  }

  //handles changes to the location form
  function handleLocationForm(e) {
    setEventLocation(e.target.value);
  }

  //handles changes to the Start Date form
  function handleStartDateForm(e) {
    setEventStartDate(e.target.value);
    console.log(eventStartDate);
  }

  //handles changes to the End Date form
  function handleEndDateForm(e) {
    setEventEndDate(e.target.value);
    console.log(eventEndDate);
  }

  //handles changes to the reminder selector
  function handleReminderSelector(e) {
    setEventReminder(e.target.value);
  }

  //handles changes to the email alert selector
  function handleEmailAlertSelector(e) {
    setEventEmailAlert.emailReminder(e.target.value);
  }

  //handles changes to the email alert time selector
  function handleEmailAlertTimeForm(e) {
    setEventEmailAlert.reminderTime(e.target.data);
  }

  //handles changes to the email alert time unit selector
  function handleEmailAlertTimeUnitForm(e) {
    setEventEmailAlert.reminderTimeUnit(e.target.value);
  }

  //handles changes to the Pop up alert selector
  function handlePopUpAlertSelector(e) {
    setEventPopUpAlert.popUpReminder(e.target.value);
  }

  //handles changes to the Pop up alert time input
  function handlePopUpAlertTimeForm(e) {
    setEventPopUpAlert.reminderTime(e.target.value);
  }

  //handles changes to the Pop up alert time unit selector
  function handlePopUpAlertTimeUnitForm(e) {
    setEventPopUpAlert.reminderTimeUnit(e.target.value);
  }

  //handles form submission
  function handleSubmit(e) {
    e.preventDefault();
    newEvent(
      eventTitle,
      eventDescription,
      eventLocation,
      eventStartDate,
      eventEndDate,
      eventReminder,
      eventEmailAlert,
      eventPopUpAlert
    );
  }

  return (
    <article className="new-event">
      <h3 className="new-event__title">Create a new event</h3>
      <div className="new-event__form">
        <label className="new-event__label" htmlFor="title">
          Title:
        </label>
        <input
          className="new-event__input"
          id="title"
          name="title"
          type="text"
          required
          minLength="6"
          maxLength="36"
          placeholder="Title of your new event"
          value={eventTitle}
          onChange={handleTitleForm}
        />
        <label className="new-event__label" htmlFor="description">
          Description:
        </label>
        <input
          className="new-event__input"
          id="description"
          name="description"
          type="text"
          required
          minLength="6"
          maxLength="36"
          placeholder="Give a description to your new event"
          value={eventDescription}
          onChange={handleDescriptionForm}
        />
        <label className="new-event__label" htmlFor="location">
          Location:
        </label>
        <input
          className="new-event__input"
          id="location"
          name="location"
          type="text"
          required
          minLength="6"
          maxLength="36"
          placeholder="Location"
          value={eventLocation}
          onChange={handleLocationForm}
        />
        <label className="new-event__label" htmlFor="startDate">
          Start Date:
        </label>
        <input
          className="new-event__date"
          id="startDate"
          name="startDate"
          type="datetime-local"
          required
          value={eventStartDate}
          onChange={handleStartDateForm}
        />
        <label className="new-event__label" htmlFor="endDate">
          End Date:
        </label>
        <input
          className="new-event__date"
          id="endDate"
          name="endDate"
          type="datetime-local"
          required
          value={eventEndDate}
          onChange={handleEndDateForm}
        />
        <label className="new-event__label" htmlFor="reminder">
          Add reminder?
        </label>
        <select
          className="new-event__reminder new-event__reminder--selector"
          id="reminder"
          name="reminder"
          required
          onChange={handleReminderSelector}>
          <option value={'no'}>No</option>
          <option value={'yes'}>Yes</option>
        </select>
        {eventReminder === 'yes' ? (
          <div className="new-event__reminder-options">
            <div className="new-event__reminder-wrapper">
              <label className="new-event__label" htmlFor="emailAlert">
                E-mail:
              </label>
              <div className="new-event__email-options">
                <select
                  className="new-event__email-alert"
                  id="emailAlert"
                  name="emailAlert"
                  onChange={handleEmailAlertSelector}
                  required>
                  <option value={'no'}>No</option>
                  <option value={'yes'}>Yes</option>
                </select>
                <input
                  className="new-event__input new-event__input--reminder-time"
                  id="emailAlertReminderTime"
                  name="emailAlertReminderTime"
                  type="number"
                  required
                  min="0"
                  max="999"
                  placeholder="0"
                  value={eventEmailAlert.reminderTime}
                  onChange={handleEmailAlertTimeForm}
                />
                <select
                  className="new-event__time-units"
                  id="emailAlertTime"
                  name="emailAlert"
                  onChange={handleEmailAlertTimeUnitForm}
                  required>
                  <option value={'minutes'}>Seconds</option>
                  <option value={'hours'}>Hours</option>
                  <option value={'days'}>Days</option>
                </select>
              </div>
            </div>
            <div className="new-event__reminder-wrapper">
              <label className="new-event__label" htmlFor="popUpAlert">
                Pop Up:
              </label>
              <div className="new-event__popup-options">
                <select
                  className="new-event__pop-up-alert"
                  id="popUpAlert"
                  name="popUpAlert"
                  onChange={handlePopUpAlertSelector}
                  required>
                  <option value={'no'}>No</option>
                  <option value={'yes'}>Yes</option>
                </select>
                <input
                  className="new-event__input new-event__input--reminder-time"
                  id="popUpAlertReminderTime"
                  name="popUpAlertReminderTime"
                  type="number"
                  required
                  min="0"
                  max="999"
                  placeholder="0"
                  value={eventPopUpAlert.reminderTime}
                  onChange={handlePopUpAlertTimeForm}
                />
                <select
                  className="new-event__time-units"
                  id="popUpAlertTime"
                  name="popUpAlert"
                  onChange={handlePopUpAlertTimeUnitForm}
                  required>
                  <option value={'minutes'}>Seconds</option>
                  <option value={'hours'}>Hours</option>
                  <option value={'days'}>Days</option>
                </select>
              </div>
            </div>
          </div>
        ) : null}
        <button className="new-event__btn" onClick={handleSubmit}>
          Create Event
        </button>
      </div>
    </article>
  );
}
