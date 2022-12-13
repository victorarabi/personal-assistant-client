import { useEffect } from 'react';
import axios from 'axios';
import LoginCard from '../../components/LoginCard/LoginCard';
import Loading from '../../components/Loading/Loading';
import CalendarAuth from '../../components/CalendarAuth/CalendarAuth';
import HomeMain from '../../components/HomeMain/HomeMain';
import './Home.scss';

//fetches server_URL from environment Variable
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export default function Home({
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
    if (isLoggedIn) {
      axios
        .get(`${SERVER_URL}/profile`, { withCredentials: true })
        .then((res) => {
          setProfileData(res.data);
          setIsLoading(false);
          setIsLoggedIn(true);
          if (profileData.calendarAuth === true) {
            setCalendarAuth(true);
          } else {
            setCalendarAuth(false);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setIsLoading(false);
    }
  }, [
    setIsLoggedIn,
    setProfileData,
    setIsLoading,
    isLoggedIn,
    profileData.calendarAuth,
    setCalendarAuth,
  ]);

  //Return Loading Component if isLoading = true;
  if (isLoading) {
    return <Loading />;
    //return LoginCard component if isLoading & isLoggedIn = False
  } else if (!isLoggedIn) {
    return <LoginCard setIsLoading={setIsLoading} />;
  } else {
    //check if user has already authorized Calendar to the app, if no renders Auth Button
    if (!calendarAuth) {
      return <CalendarAuth />;
      //if the app has access to google Calendar, displays user data.
    } else {
      return <HomeMain isLoggedIn={isLoggedIn} profileData={profileData} />;
    }
  }
}
