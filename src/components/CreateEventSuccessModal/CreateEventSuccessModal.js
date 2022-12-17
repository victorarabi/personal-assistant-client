import { func } from 'prop-types';
import { Link } from 'react-router-dom';
import './CreateEventSuccessModal.scss';

//client url
const CLIENT_URL = process.env.REACT_APP_CLIENT_URL;

export default function CreateEventSuccessModal({
  showSuccessModal,
  newEventData,
  endUrl,
}) {
  //handles new event request{
  function handleOnClick(e) {
    window.location.href = '/create-secondary-event' + endUrl;
  }

  if (showSuccessModal === 'no') {
    return null;
  }
  return (
    <div className="overlay">
      <div className="success-modal">
        <h3 className="success-modal__title">Event successfully created</h3>
        <div className="success-modal__event-container">
          <p className="success-modal__event-title">
            Title: {newEventData.summary}
          </p>
          <p className="success-modal__txt">
            Description: {newEventData.description}
          </p>
          <p className="success-modal__txt">
            Start Date: {newEventData.start.dateTime}
          </p>
          <p className="success-modal__txt">
            End Date: {newEventData.end.dateTime}
          </p>
        </div>
        <div className="success-modal__nav-container">
          <Link to={'/'}>
            <button className="success-modal__btn success-modal__btn--ok">
              OK
            </button>
          </Link>
          <button
            className="success-modal__btn success-modal__btn--secondary"
            onClick={handleOnClick}>
            Create a related event?
          </button>
        </div>
      </div>
    </div>
  );
}
