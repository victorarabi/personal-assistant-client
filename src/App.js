import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import ServerOffline from './components/ServerOffline/ServerOffline';
import CreateEvent from './pages/CreateEvent/CreateEvent';
import CreateSecondaryEvent from './pages/CreateSecondaryEvent/CreateSecondaryEvent';
import ManageEvents from './pages/ManageEvents/ManageEvents';
import Profile from './pages/Profile/Profile';
import Forbidden from './components/Forbidden/Forbidden';
import axios from 'axios';
import './App.scss';

//fetches server_URL from environment Variable
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [serverError, setServerError] = useState(false);
  const [calendarAuth, setCalendarAuth] = useState(false);
  const [profileData, setProfileData] = useState({
    id: null,
    name: null,
    email: null,
    picture: null,
    calendarAuth: null,
    tokenExpiryDate: null,
    timezone: null,
  });
  //request to the server to see if there ifit pushs a user logged in
  useEffect(() => {
    axios
      .get(`${SERVER_URL}/`, { withCredentials: true })
      .then((res) => {
        setIsLoading(false);
        setIsLoggedIn(res.data);
      })
      .catch((err) => {
        console.log(err);
        setServerError(true);
      });
  }, [isLoading]);
  return (
    <div className="app">
      <Router>
        <div className="app__container">
          <Header
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            profileData={profileData}
            setProfileData={setProfileData}
          />
          <Switch>
            <Route path="/create-secondary-event:id/:instance">
              {isLoggedIn ? <CreateSecondaryEvent /> : <Forbidden />}
            </Route>
            <Route path="/create-secondary-event:id">
              {isLoggedIn ? <CreateSecondaryEvent /> : <Forbidden />}
            </Route>
            <Route path="/create-event">
              {isLoggedIn ? <CreateEvent /> : <Forbidden />}
            </Route>
            <Route path="/events">
              {isLoggedIn ? <ManageEvents /> : <Forbidden />}
            </Route>
            <Route path="/profile">
              {isLoggedIn ? (
                <Profile profileData={profileData} />
              ) : (
                <Forbidden />
              )}
            </Route>
            <Route exact path="/">
              {!serverError ? (
                <Home
                  isLoggedIn={isLoggedIn}
                  setIsLoggedIn={setIsLoggedIn}
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                  calendarAuth={calendarAuth}
                  setCalendarAuth={setCalendarAuth}
                  profileData={profileData}
                  setProfileData={setProfileData}
                />
              ) : (
                <ServerOffline />
              )}
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}
