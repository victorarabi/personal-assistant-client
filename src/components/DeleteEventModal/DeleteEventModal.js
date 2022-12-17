import axios from 'axios';
import './DeleteEventModal.scss';

//fetches server_URL from environment Variable
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export default function DeleteEventModal({
  showDeleteModal,
  setShowDeleteModal,
  eventToDelete,
  setBlockModal,
}) {
  //function that handles axios DELETE call to backend
  async function deleteEvent(id) {
    const deleteUrl = SERVER_URL + '/calendar/events/delete/' + id;
    await axios
      .delete(deleteUrl, { withCredentials: true })
      .then((response) => {
        alert(response.data);
        setBlockModal('no');
        setShowDeleteModal('no');
      })
      .catch((err) => {
        console.log(err?.data);
      });
  }
  //handle cancel button click
  function handleCancelOnClick(e) {
    setBlockModal('no');
    setShowDeleteModal('no');
  }
  //handle overlay on click
  function handleOverlayOnClick(e) {
    setBlockModal('no');
    setShowDeleteModal('no');
  }
  //handle delete submit
  function handleDeleteOnClick(e) {
    e.preventDefault();
    const id = eventToDelete.id;
    deleteEvent(id);
  }
  //check modal state
  if (showDeleteModal === 'no') {
    return null;
  }
  return (
    <div className="overlay" onClick={handleOverlayOnClick}>
      <div
        className="delete-modal"
        onClick={(e) => {
          e.stopPropagation();
        }}>
        <h2 className="delete-modal__title">Delete Event?</h2>
        <div className="delete-modal__event-container">
          <p className="delete-modal__txt">Title: {eventToDelete.summary}</p>
          <p className="delete-modal__txt">
            Description: {eventToDelete.description}
          </p>
          <p className="delete-modal__txt">
            Start Date: {eventToDelete.start.dateTime}
          </p>
          <p className="delete-modal__txt">
            End Date: {eventToDelete.end.dateTime}
          </p>
        </div>
        <div className="delete-modal__confirmation">
          <p className="delete-modal__txt">
            Do you wish to delete the event described above? <br /> NOTE: This
            action is final.
          </p>
          <button
            className="delete-modal__button"
            onClick={handleDeleteOnClick}>
            Yes
          </button>
          <button
            className="delete-modal__button"
            onClick={handleCancelOnClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
