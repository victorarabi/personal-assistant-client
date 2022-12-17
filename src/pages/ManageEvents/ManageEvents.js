import { useState, useEffect } from 'react';
import axios from 'axios';
import EventDetailCard from '../../components/EventDetailCard/EventDetailCard';
import DeleteEventModal from '../../components/DeleteEventModal/DeleteEventModal';
import './ManageEvents.scss';

//fetches server_URL from environment Variable
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

//component that displays all the events for the user in a list style
export default function ManageEvents() {
  const [events, setEvents] = useState([]);
  const [eventToDelete, setEventToDelete] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState('no');
  const [eventToUpdate, setEventToUpdate] = useState(null);
  const [showUpdateModal, setShowUpdateModal] = useState('no');
  const [blockModal, setBlockModal] = useState('no');

  //function that get event data from the backend
  async function getEvents() {
    await axios
      .get(`${SERVER_URL}/calendar/events`, { withCredentials: true })
      .then(async (res) => {
        setEvents(await res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    getEvents();
  }, [setEvents, showDeleteModal, showUpdateModal]);
  return (
    <div className="manage-events">
      <div className="manage-events__container">
        <h1 className="manage-events__title">Manage Events</h1>
      </div>
      {events.map((event, index) => (
        <EventDetailCard
          key={'event' + index}
          eventData={event}
          setEventToDelete={setEventToDelete}
          setShowDeleteModal={setShowDeleteModal}
          setEventToUpdate={setEventToUpdate}
          setShowUpdateModal={setShowUpdateModal}
          blockModal={blockModal}
          setBlockModal={setBlockModal}
        />
      ))}
      <DeleteEventModal
        showDeleteModal={showDeleteModal}
        setShowDeleteModal={setShowDeleteModal}
        eventToDelete={eventToDelete}
        setBlockModal={setBlockModal}
      />
    </div>
  );
}
