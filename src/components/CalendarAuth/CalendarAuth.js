import './CalendarAuth.scss';

//fetches server_URL from environment Variable
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

/**
 * Component Button used to  from the app.
 */
export default function CalendarAuth() {
  return (
    <div className="calendar-auth">
      <p className="calendar-auth__txt">
        Welcome to Personal Assistant! <br />
        Please click on the button below to give permission for the application
        to access your Google Calendar data. <br />
        NOTE: This process is done only once.
      </p>
      <a
        className="calendar-auth__link"
        href={`${SERVER_URL}/calendar/auth/request`}>
        <button className="calendar-auth__button">
          {/* <img className="button__icon" src={iconSrc} alt="icon" /> */}
          <p className="calendar-auth__txt">
            Authorize Access to Google Calendar Data
          </p>
        </button>
      </a>
    </div>
  );
}
