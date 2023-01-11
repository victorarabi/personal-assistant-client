import { useState, useEffect } from 'react';
import axios from 'axios';
import ProfileModal from '../../components/ProfileModal/ProfileModal';
import './Profile.scss';

//fetches server_URL from environment Variable
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export default function Profile() {
  const [showModal, setShowModal] = useState('no');
  const [modalType, setModalType] = useState(null);
  const [profileData, setProfileData] = useState(null);
  useEffect(() => {
    axios
      .get(`${SERVER_URL}/profile`, { withCredentials: true })
      .then((res) => {
        setProfileData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [profileData]);
  //handles password change
  function handlePasswordOnClick(e) {
    e.preventDefault();
    setModalType('password');
    setShowModal('yes');
  }
  //handles password change
  function handleTimezoneOnClick(e) {
    e.preventDefault();
    setModalType('timezone');
    setShowModal('yes');
  }
  //handles password change
  function handleRevokeOnClick(e) {
    e.preventDefault();
    setModalType('revoke');
    setShowModal('yes');
  }
  if (!profileData) {
    return (
      <section className="profile">
        <h1 className="profile__loading">Loading...</h1>
      </section>
    );
  }
  return (
    <section className="profile">
      <div className="profile__container">
        <h3 className="profile__label">Name:</h3>
        <p className="profile__text">{profileData.name}</p>
      </div>
      <div className="profile__container">
        <h3 className="profile__label">e-mail:</h3>
        <p className="profile__text">{profileData.email}</p>
      </div>
      <div className="profile__container">
        <h3 className="profile__label">Password:</h3>
        <p className="profile__text">************</p>
        <button className="profile__btn" onClick={handlePasswordOnClick}>
          Change
        </button>
      </div>
      <div className="profile__container">
        <h3 className="profile__label">Timezone:</h3>
        <p className="profile__text">{profileData.timezone}</p>
        <button className="profile__btn" onClick={handleTimezoneOnClick}>
          Change
        </button>
      </div>
      <div className="profile__container profile__container--revoke">
        <h3 className="profile__label">Revoke access to google calendar</h3>
        <button className="profile__btn" onClick={handleRevokeOnClick}>
          Revoke
        </button>
      </div>
      <ProfileModal
        showModal={showModal}
        setShowModal={setShowModal}
        modalType={modalType}
        setModalType={setModalType}
      />
    </section>
  );
}
