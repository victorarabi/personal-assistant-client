import { useState, useEffect } from 'react';
import axios from 'axios';
import EventDetailCard from '../../components/EventDetailCard/EventDetailCard';
import './ManageEvents.scss';

//fetches server_URL from environment Variable
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

//component that displays all the events for the user in a list style
export default function ManageEvents() {
  const [events, setEvents] = useState([]);
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
  }, [setEvents]);
  return (
    <div className="manage-events">
      <div className="manage-events__container">
        <h1 className="manage-events__title">Manage Events</h1>
      </div>
      {events.map((event, index) => (
        <EventDetailCard key={'event' + index} eventData={event} />
      ))}
    </div>
  );
}
