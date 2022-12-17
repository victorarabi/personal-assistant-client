import { useState, useEffect } from 'react';
import axios from 'axios';
import UpdateEventForm from '../UpdateEventForm/UpdateEventForm';
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
    <UpdateEventForm
      handleOverlayOnClick={handleOverlayOnClick}
      eventTitle={eventTitle}
      handleTitleForm={handleTitleForm}
      eventDescription={eventDescription}
      handleDescriptionForm={handleDescriptionForm}
      eventLocation={eventLocation}
      handleLocationForm={handleLocationForm}
      eventStartDate={eventStartDate}
      handleStartDateForm={handleStartDateForm}
      eventEndDate={eventEndDate}
      handleEndDateForm={handleEndDateForm}
      handleReminderSelector={handleReminderSelector}
      eventReminder={eventReminder}
      handleEmailAlertSelector={handleEmailAlertSelector}
      eventEmailAlert={eventEmailAlert}
      handleEmailAlertTimeForm={handleEmailAlertTimeForm}
      handleEmailAlertTimeUnitForm={handleEmailAlertTimeUnitForm}
      handlePopUpAlertSelector={handlePopUpAlertSelector}
      eventPopUpAlert={eventPopUpAlert}
      handlePopUpAlertTimeForm={handlePopUpAlertTimeForm}
      handlePopUpAlertTimeUnitForm={handlePopUpAlertTimeUnitForm}
      handleSubmit={handleSubmit}
      handleCancelOnClick={handleCancelOnClick}
    />
  );
}
