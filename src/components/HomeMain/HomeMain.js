import { useState, useEffect } from 'react';
import axios from 'axios';
import './HomeMain.scss';

//fetches server_URL from environment Variable
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

//Main Component for Home page.
export default function HomeMain({ isLoggedIn, profileData }) {
  const [eventsData, SetEventsData] = useState(null);
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
  useEffect(() => {
    //check if token is valid, if yes request calendar data, if not redirect to token request url
    renewIfTokenExpired(profileData.tokenExpiryDate);
    axios
      .get(`${SERVER_URL}/calendar/events`, { withCredentials: true })
      .then(async (res) => {
        SetEventsData(await res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [profileData.tokenExpiryDate]);
  return (
    <div>
      <h1>Hello {profileData.name}!</h1>
    </div>
  );
}
