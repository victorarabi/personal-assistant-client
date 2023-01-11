import TimezoneForm from '../TimezoneForm/TimezoneForm';
import PasswordChangeForm from '../PasswordChangeForm/PasswordChangeForm';
import './ProfileModal.scss';

export default function ProfileModal({
  showModal,
  setShowModal,
  modalType,
  setModalType,
}) {
  //handle overlay on click
  function handleOverlayOnClick(e) {
    setShowModal('no');
    setModalType(null);
  }
  //check modal state
  if (showModal === 'no') {
    return null;
  }
  return (
    <div className="overlay" onClick={handleOverlayOnClick}>
      <div
        className="profile-modal"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {modalType === 'password' ? (
          <PasswordChangeForm
            setShowModal={setShowModal}
            setModalType={setModalType}
          />
        ) : modalType === 'timezone' ? (
          <TimezoneForm
            setShowModal={setShowModal}
            setModalType={setModalType}
          />
        ) : modalType === 'revoke' ? (
          <div>revoke</div>
        ) : null}
      </div>
    </div>
  );
}
