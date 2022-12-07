import { useEffect } from 'react';
import axios from 'axios';
import LoginCard from '../../components/LoginCard/LoginCard';
import Loading from '../../components/Loading/Loading';
import './HomePage.scss';

//fetches server_URL from environment Variable
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export default function HomePage({
  isLoggedIn,
  setIsLoggedIn,
  isLoading,
  setIsLoading,
  calendarAuth,
  setCalendarAuth,
  profileData,
  setProfileData,
}) {
  // const [events, setEvents] = useState([]);
  useEffect(() => {
    axios
      .get(`${SERVER_URL}/profile`, { withCredentials: true })
      .then((res) => {
        setProfileData(res.data);
        setIsLoggedIn(true);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoggedIn(false);

        // If we are getting back 401 (Unauthorized) back from the server, means we need to log in
        if (err.response?.status === 401) {
          setIsLoading(false);
          console.log('not authorized: ' + err.response.status);
        } else {
          setIsLoading(true);
          console.log('Error authenticating', err);
        }
      });
  }, [setIsLoggedIn, setProfileData, isLoading, setIsLoading]);
  if (isLoading) {
    return <Loading />;
  } else if (!isLoggedIn) {
    return <LoginCard setIsLoading={setIsLoading} />;
  } else {
    return (
      <div>
        <h1>Hello {profileData.name}!</h1>
      </div>
    );
  }
}
