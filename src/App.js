import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import './App.scss';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profileData, setProfileData] = useState(null);

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
            profileData={profileData}
            setProfileData={setProfileData}
          />
        </Route>
      </Switch>
    </Router>
  );
}
