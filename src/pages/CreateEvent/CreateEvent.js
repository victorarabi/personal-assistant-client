import { useState } from 'react';
import axios from 'axios';
import NewPrimeEvent from '../../components/NewPrimeEvent/NewPrimeEvent';
import CreateEventSuccessModal from '../../components/CreateEventSuccessModal/CreateEventSuccessModal';
import './CreateEvent.scss';

//saves server_URL from environment Variable
const SERVER_URL = process.env.REACT_APP_SERVER_URL;
const postUrl = SERVER_URL + '/calendar/events/create';

//Page that creates a new event
export default function CreateEvent() {
  const [showSuccessModal, setShowSuccessModal] = useState('no');
  const [showErrorModal, setShowErrorModal] = useState('no');
  const [errorMessage, setErrorMessage] = useState(null);
  const [newEventData, setNewEventData] = useState(null);
  const [primeEventId, setPrimeEventId] = useState(null);
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
        setNewEventData(response.data);
        setShowSuccessModal('yes');
        setShowErrorModal('no');
      })
      .catch((err) => {
        setErrorMessage(err?.response.data);
        setShowSuccessModal('no');
        setShowErrorModal('yes');
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
    <div class="container">
      <NewPrimeEvent
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
      />
      <CreateEventSuccessModal
        showSuccessModal={showSuccessModal}
        newEventData={newEventData}
        primeEventId={primeEventId}
      />
    </div>
  );
}
