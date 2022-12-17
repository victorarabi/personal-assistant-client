import { useState, useEffect } from 'react';
import axios from 'axios';
import './UpdateEventModal.scss';

//saves server_URL from environment Variable
const SERVER_URL = process.env.REACT_APP_SERVER_URL;
const patchUrl = SERVER_URL + '/calendar/events/update';

export default function UpdateEventModal({
  showUpdateModal,
  setShowUpdateModal,
  setBlockModal,
  eventToUpdate,
}) {
  const [eventId, setEventId] = useState(null);
  const [eventTitle, setEventTitle] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [eventStartDate, setEventStartDate] = useState('');
  const [eventEndDate, setEventEndDate] = useState('');
  const [eventReminder, setEventReminder] = useState('no');
  const [eventEmailAlert, setEventEmailAlert] = useState({
    emailReminder: 'no',
    reminderTimeUnit: 'minutes',
    reminderTime: 0,
  });
  const [eventPopUpAlert, setEventPopUpAlert] = useState({
    popUpReminder: 'no',
    reminderTimeUnit: 'minutes',
    reminderTime: 0,
  });
  //sends UPDATE request to backend
  async function updateEvent(
    id,
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
      .patch(
        patchUrl,
        {
          id,
          summary: title,
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
        alert(response.data);
        setBlockModal('no');
        setShowUpdateModal('no');
      })
      .catch((err) => console.log(err));
  }
  //handle overlay on click
  function handleOverlayOnClick(e) {
    setBlockModal('no');
    setShowUpdateModal('no');
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
  }
  //handles changes to the End Date form
  function handleEndDateForm(e) {
    setEventEndDate(e.target.value);
  }
  //handles changes to the reminder selector
  function handleReminderSelector(e) {
    setEventReminder(e.target.value);
  }
  //handles changes to the email alert selector
  function handleEmailAlertSelector(e) {
    setEventEmailAlert({ ...eventEmailAlert, emailReminder: e.target.value });
  }
  //handles changes to the email alert time selector
  function handleEmailAlertTimeForm(e) {
    setEventEmailAlert({ ...eventEmailAlert, reminderTime: e.target.value });
  }
  //handles changes to the email alert time unit selector
  function handleEmailAlertTimeUnitForm(e) {
    setEventEmailAlert({
      ...eventEmailAlert,
      reminderTimeUnit: e.target.value,
    });
  }
  //handles changes to the Pop up alert selector
  function handlePopUpAlertSelector(e) {
    setEventPopUpAlert({ ...eventPopUpAlert, popUpReminder: e.target.value });
  }
  //handles changes to the Pop up alert time input
  function handlePopUpAlertTimeForm(e) {
    setEventPopUpAlert({ ...eventPopUpAlert, reminderTime: e.target.value });
  }
  //handles changes to the Pop up alert time unit selector
  function handlePopUpAlertTimeUnitForm(e) {
    setEventPopUpAlert({
      ...eventPopUpAlert,
      reminderTimeUnit: e.target.value,
    });
  }
  //handles submit
  function handleSubmit(e) {
    e.preventDefault();
    updateEvent(
      eventId,
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
  //handle cancel button click
  function handleCancelOnClick(e) {
    setBlockModal('no');
    setShowUpdateModal('no');
  }
  useEffect(() => {
    setEventId(eventToUpdate?.id);
    setEventTitle(eventToUpdate?.summary);
    setEventDescription(eventToUpdate?.description);
    setEventLocation(eventToUpdate?.location);
    setEventStartDate(eventToUpdate?.start.dateTime.slice(0, 19));
    setEventEndDate(eventToUpdate?.end.dateTime.slice(0, 19));
    const updateReminder = eventToUpdate?.reminders.overrides ? 'yes' : 'no';
    setEventReminder(updateReminder);
    if (updateReminder === 'yes') {
      eventToUpdate?.reminders.overrides.forEach((override) => {
        if (override.method === 'email') {
          setEventEmailAlert({
            emailReminder: 'yes',
            reminderTimeUnit: 'minutes',
            reminderTime: override.minutes,
          });
          return;
        } else if (override.method === 'popup') {
          setEventPopUpAlert({
            popUpReminder: 'yes',
            reminderTimeUnit: 'minutes',
            reminderTime: override.minutes,
          });
          return;
        }
      });
    }
  }, [eventToUpdate]);
  if (showUpdateModal === 'no') {
    return null;
  }
  return (
    <div className="overlay" onClick={handleOverlayOnClick}>
      <div
        className="update-modal"
        onClick={(e) => {
          e.stopPropagation();
        }}>
        <h3 className="update-modal__title">Update event</h3>
        <div className="update-modal__form">
          <label className="update-modal__label" htmlFor="title">
            Title:
          </label>
          <input
            className="update-modal__input"
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
          <label className="update-modal__label" htmlFor="description">
            Description:
          </label>
          <input
            className="update-modal__input"
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
          <label className="update-modal__label" htmlFor="location">
            Location:
          </label>
          <input
            className="update-modal__input"
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
          <label className="update-modal__label" htmlFor="startDate">
            Start Date:
          </label>
          <input
            className="update-modal__date"
            id="startDate"
            name="startDate"
            type="datetime-local"
            required
            value={eventStartDate}
            onChange={handleStartDateForm}
          />
          <label className="update-modal__label" htmlFor="endDate">
            End Date:
          </label>
          <input
            className="update-modal__date"
            id="endDate"
            name="endDate"
            type="datetime-local"
            required
            value={eventEndDate}
            onChange={handleEndDateForm}
          />
          <label className="update-modal__label" htmlFor="reminder">
            Add reminder?
          </label>
          <select
            className="update-modal__reminder update-modal__reminder--selector"
            id="reminder"
            name="reminder"
            required
            onChange={handleReminderSelector}
            value={eventReminder}>
            <option value={'no'}>No</option>
            <option value={'yes'}>Yes</option>
          </select>
          {eventReminder === 'yes' ? (
            <div className="update-modal__reminder-options">
              <div className="update-modal__reminder-wrapper">
                <label className="update-modal__label" htmlFor="emailAlert">
                  E-mail:
                </label>
                <div className="update-modal__email-options">
                  <select
                    className="update-modal__email-alert"
                    id="emailAlert"
                    name="emailAlert"
                    onChange={handleEmailAlertSelector}
                    value={eventEmailAlert.emailReminder}
                    required>
                    <option value={'no'}>No</option>
                    <option value={'yes'}>Yes</option>
                  </select>
                  <input
                    className="update-modal__input update-modal__input--reminder-time"
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
                    className="update-modal__time-units"
                    id="emailAlertTime"
                    name="emailAlert"
                    onChange={handleEmailAlertTimeUnitForm}
                    value={eventEmailAlert.reminderTimeUnit}
                    required>
                    <option value={'minutes'}>Minutes</option>
                    <option value={'hours'}>Hours</option>
                    <option value={'days'}>Days</option>
                  </select>
                </div>
              </div>
              <div className="update-modal__reminder-wrapper">
                <label className="update-modal__label" htmlFor="popUpAlert">
                  Pop Up:
                </label>
                <div className="update-modal__popup-options">
                  <select
                    className="update-modal__pop-up-alert"
                    id="popUpAlert"
                    name="popUpAlert"
                    onChange={handlePopUpAlertSelector}
                    value={eventPopUpAlert.popUpReminder}
                    required>
                    <option value={'no'}>No</option>
                    <option value={'yes'}>Yes</option>
                  </select>
                  <input
                    className="update-modal__input update-modal__input--reminder-time"
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
                    className="update-modal__time-units"
                    id="popUpAlertTime"
                    name="popUpAlert"
                    onChange={handlePopUpAlertTimeUnitForm}
                    value={eventPopUpAlert.reminderTimeUnit}
                    required>
                    <option value={'minutes'}>Minutes</option>
                    <option value={'hours'}>Hours</option>
                    <option value={'days'}>Days</option>
                  </select>
                </div>
              </div>
            </div>
          ) : null}
        </div>
        <button className="update-modal__btn" onClick={handleSubmit}>
          Update event
        </button>
        <button className="delete-modal__button" onClick={handleCancelOnClick}>
          Cancel
        </button>
      </div>
    </div>
  );
}
