import axios from 'axios';
import './Revoke.scss';

//fetches server_URL from environment Variable
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

//component to revoke access to google calendar data
export default function Revoke({ setShowModal, setModalType }) {
  //get request to revoke access to user data
  function revokeAccess() {
    axios
      .get(`${SERVER_URL}/calendar/auth/revoke`, {
        withCredentials: true,
      })
      .then((response) => {
        alert('Success: ' + response.data);
        setShowModal('no');
        setModalType(null);
      })
      .catch((err) => {
        console.log(err);
        alert(err.response);
      });
  }
  //handle revoke request
  function handleOnClick(e) {
    e.preventDefault();
    revokeAccess();
  }
  //handle cancel
  function handleCancel(e) {
    setShowModal('no');
    setModalType(null);
  }
  return (
    <div className="revoke">
      <h1 className="revoke__title">Revoke access to Google Calendar data.</h1>
      <p className="revoke__txt">
        Would you like to revoke the access to your Google Calendar data?
      </p>
      <p className="revoke__txt revoke__txt--warning">
        WARNING: THIS ACTION IS IRREVERSIBLE
      </p>

      <div className="revoke__nav-container">
        <button className="revoke__btn" onClick={handleOnClick}>
          Revoke
        </button>
        <button className="revoke__btn" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
}
