import './LogoutButton.scss';

//fetches server_URL from environment Variable
const SERVER_URL = process.env.SERVER_URL;

/**
 * Component Button used to logout from the app.
 */

export default function LogoutButton() {
  return (
    <a className="button__link" href={`${SERVER_URL}/logout`}>
      <button className="button">
        {/* <img className="button__icon" src={iconSrc} alt="icon" /> */}
        <p className="button__txt">Logout</p>
      </button>
    </a>
  );
}
