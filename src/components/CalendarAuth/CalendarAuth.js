import googleIcon from '../../assets/icons/google.png';
import './CalendarAuth.scss';

//fetches server_URL from environment Variable
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

/**
 * Component Button used to  from the app.
 */
export default function CalendarAuth() {
  return (
    <div className="calendar-auth">
      <h1 className="calendar-auth__title">Welcome to Personal Assistant! </h1>
      <p className="calendar-auth__txt">
        This app use your Google Calendar account to create, edit and delete
        events on your primary calendar.
        <br /> Please click on the button below to give permission for the
        application to access your Google Calendar data.
        <br />
        NOTE: This process is done only once. You can revoke access to the app
        at any time by going to your google account&nbsp;
        <a
          className="calendar-auth__link  calendar-auth__link--settings"
          href="https://myaccount.google.com/permissions"
        >
          settings
        </a>
        .
      </p>
      <a
        className="calendar-auth__link"
        href={`${SERVER_URL}/calendar/auth/request`}
      >
        <button className="calendar-auth__btn">
          <img className="calendar-auth__icon" src={googleIcon} alt="icon" />
          Authorize
        </button>
      </a>
    </div>
  );
}
