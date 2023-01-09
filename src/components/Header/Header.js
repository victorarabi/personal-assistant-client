import Nav from '../Nav/Nav';
import LogoutButton from '../LogoutButton/LogoutButton';
import logo from '../../assets/images/logo.png';
import './Header.scss';

export default function Header({
  isLoggedIn,
  setIsLoggedIn,
  profileData,
  setProfileData,
}) {
  //checks if there's a user logged in to the accout, if yes renders profile data and logout button
  if (isLoggedIn) {
    return (
      <header className="header">
        <img className="header__logo" src={logo} alt="logo" />
        <h1 className="header__title">
          <span className="header__title">P</span>ersonal Assistant
        </h1>
        <div className="header__container">
          <Nav />
          <LogoutButton />
        </div>
      </header>
    );
  } else {
    // if not user is logged in returns default Header
    return (
      <header className="header">
        <img className="header__logo" src={logo} alt="logo" />
        <h1 className="header__title">Personal Assistant</h1>
      </header>
    );
  }
}
