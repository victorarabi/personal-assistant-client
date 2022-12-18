import { Link } from 'react-router-dom';
import './Nav.scss';

//navigation bar component
export default function Nav() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <Link className="nav__link" to="/">
          <li className="nav__item">Home</li>
        </Link>
        <Link className="nav__link" to="/create-event">
          <li className="nav__item">Create Event</li>
        </Link>
        <Link className="nav__link" to="/events">
          <li className="nav__item">Manage Events</li>
        </Link>
        <Link className="nav__link" to="/profile">
          <li className="nav__item">Profile</li>
        </Link>
      </ul>
    </nav>
  );
}
