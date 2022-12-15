import { Link } from 'react-router-dom';
import './Nav.scss';

//navigation bar component
export default function Nav() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <Link to="/">
          <li className="nav__item">Home</li>
        </Link>
        <Link to="/new-event">
          <li className="nav__item">New Event</li>
        </Link>
        <Link to="/events">
          <li className="nav__item">Manage Events</li>
        </Link>
        <Link to="/profile">
          <li className="nav__item">Profile</li>
        </Link>
        <Link to="/settings">
          <li className="nav__item">Settings</li>
        </Link>
      </ul>
    </nav>
  );
}
