import './Header.scss';
import LogoutButton from '../LogoutButton/LogoutButton';

export default function Header({
  isLoggedIn,
  setIsLoggedIn,
  profileData,
  setProfileData,
}) {
  //checks if there's a user logged in to the accout, if yes renders profile data and logout button
  if (isLoggedIn) {
    return (
      <header>
        <h1>Personal Assistant</h1>
        <LogoutButton />
      </header>
    );
  } else {
    // if not user is logged in returns default Header
    return (
      <header>
        <h1>Personal Assistant</h1>
      </header>
    );
  }
}
