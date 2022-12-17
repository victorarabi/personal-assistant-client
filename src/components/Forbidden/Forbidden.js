import { Link } from 'react-router-dom';
import './Forbidden.scss';

//Component that renders whenever a user tries to access a route without being logged in
export default function Forbidden() {
  return (
    <Link to={'/'}>
      <article className="forbidden">
        <h3 className="forbidden__title">FORBIDDEN</h3>
        <p className="forbidden__text">Please log in to access this page.</p>

        <button className="forbidden__btn">Home</button>
      </article>
    </Link>
  );
}
