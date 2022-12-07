import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import './App.scss';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [calendarAuth, setCalendarAuth] = useState(false);
  const [profileData, setProfileData] = useState({
    id: null,
    name: null,
    email: null,
    picture: null,
    calendarAuth: null,
    tokenExpiryDate: null,
  });

  return (
    <Router>
      <Header
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <Switch>
        <Route path="/">
          <HomePage
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            calendarAuth={calendarAuth}
            setCalendarAuth={setCalendarAuth}
            profileData={profileData}
            setProfileData={setProfileData}
          />
        </Route>
      </Switch>
    </Router>
  );
}
