import { useEffect, useState } from 'react';
import axios from 'axios';
import { gapi } from 'gapi-script';
import LoginCard from '../../components/LoginCard/LoginCard';
import './HomePage.scss';

//fetches server_URL from environment Variable
const SERVER_URL = process.env.REACT_APP_SERVER_URL;
const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export default function HomePage({
  isLoggedIn,
  setIsLoggedIn,
  profileData,
  setProfileData,
}) {
  const [events, setEvents] = useState([]);

  //get events from google calendar
  const getEvents = (calendarID, apiKey) => {
    function initiate() {
      gapi.client
        .init({
          apiKey: apiKey,
        })

        .then(function () {
          return gapi.client.request({
            path: `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events`,
          });
        })

        .then(
          (response) => {
            let events = response.result.items;
            return events;
          },
          function (err) {
            return [false, err];
          }
        );
    }

    gapi.load('client', initiate);
  };

  useEffect(() => {
    axios
      .get(`${SERVER_URL}/profile`, { withCredentials: true })
      .then((res) => {
        setProfileData(res.data);
        setIsLoggedIn(true);
        axios
          .get(
            'https://www.googleapis.com/calendar/v3/calendars/victorarabi1@gmail.com/events?key=AIzaSyAYTmbTEsOKKHFCJ50apTv6cs4feKrSXn4'
          )
          .then((res) => {
            console.log(res.data.items);
            setEvents(res.data.items);
          });
      })
      .catch((err) => {
        // If we are getting back 401 (Unauthorized) back from the server, means we need to log in
        if (err.response.status === 401) {
          // Update the state: done authenticating, user is not logged in
          setIsLoggedIn(false);
        } else {
          console.log('Error authenticating', err);
        }
      });
  }, [setIsLoggedIn, setProfileData]);

  if (!isLoggedIn) {
    return <LoginCard />;
  } else {
    console.log(events);
    return (
      <div>
        <h1>Hello {profileData.name}!</h1>
      </div>
    );
  }
}
