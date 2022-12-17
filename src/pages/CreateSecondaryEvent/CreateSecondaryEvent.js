import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NewSecondaryEvent from '../../components/NewSecondaryEvent/NewSecondaryEvent';
import CreateEventSuccessModal from '../../components/CreateEventSuccessModal/CreateEventSuccessModal';
import './CreateSecondaryEvent.scss';

//saves server_URL from environment Variable
const SERVER_URL = process.env.REACT_APP_SERVER_URL;
const postUrl = SERVER_URL + '/calendar/events/create-secondary';

//Page that creates a new event
export default function CreateSecondaryEvent() {
  const [showSuccessModal, setShowSuccessModal] = useState('no');
  const [urlEnd, setUrlEnd] = useState(null);
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
  //prime Event Id
  const { id, instance } = useParams();
  //function that POST new Event data to the server
  function newSecondaryEvent(
    title,
    description,
    location,
    startDate,
    endDate,
    reminder,
    emailAlert,
    popUpAlert,
    primeEventId
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
          primeEventId,
        },
        { withCredentials: true }
      )
      .then((response) => {
        setNewEventData(response.data);
        setShowSuccessModal('yes');
      })
      .catch((err) => {
        console.log(err?.response.data);
        setShowSuccessModal('no');
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
    console.log(primeEventId);
    newSecondaryEvent(
      eventTitle,
      eventDescription,
      eventLocation,
      eventStartDate,
      eventEndDate,
      eventReminder,
      eventEmailAlert,
      eventPopUpAlert,
      primeEventId
    );
  }
  useEffect(() => {
    setPrimeEventId(id);
    if (!instance) {
      const nextUrl = id + '/' + 0;
      setUrlEnd(nextUrl);
    } else {
      const urlInstance = instance + 1;
      const nextUrl = id + '/' + urlInstance;
      setUrlEnd(nextUrl);
    }
  }, [setPrimeEventId, id, instance]);
  return (
    <div className="container">
      <NewSecondaryEvent
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
        endUrl={urlEnd}
      />
    </div>
  );
}
