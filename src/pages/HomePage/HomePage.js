import { useEffect } from 'react';
import LoginCard from './components/LoginCard/LoginCard';
import './HomePage.scss';

export default function HomePage({
  isLoggedIn,
  setIsLoggedIn,
  profileData,
  setProfileData,
}) {
  if (!isLoggedIn) {
    return <LoginCard />;
  }
  return (
    <div>
      <h1>Hello!</h1>
    </div>
  );
}
