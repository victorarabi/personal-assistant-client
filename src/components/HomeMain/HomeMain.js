import { useState, useEffect } from 'react';
import axios from 'axios';
import WeekAtGlanceCard from '../WeekAtGlanceCard/WeekAtGlanceCard';
import './HomeMain.scss';

//fetches server_URL from environment Variable
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

//Main Component for Home page.
export default function HomeMain({ isLoggedIn, profileData }) {
  const [eventsData, setEventsData] = useState(null);
  //Verifies if Calendar Auth token is expired and redirects to server toep renew if
  function renewIfTokenExpired(expiryDate) {
    const today = new Date();
    const tokenExpiryDate = new Date(expiryDate);
    if (today > tokenExpiryDate) {
      window.location.href = SERVER_URL + '/calendar/auth/request';
      return;
    }
    return;
  }
  //function to get events from backend
  async function getEvents() {
    await axios
      .get(`${SERVER_URL}/calendar/events`, { withCredentials: true })
      .then(async (res) => {
        setEventsData(await res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    //check if token is valid, if yes request calendar data, if not redirect to token request url
    renewIfTokenExpired(profileData.tokenExpiryDate);
    getEvents();
  }, [profileData.tokenExpiryDate]);
  return (
    <div>
      <h1>Hello {profileData.name}!</h1>
      {!eventsData ? null : <WeekAtGlanceCard eventsData={eventsData} />}
    </div>
  );
}
