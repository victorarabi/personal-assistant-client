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
  //handle delete submit
  return (
    <div className="overlay" onClick={handleOverlayOnClick}>
      <div
        className="profile-modal"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        teste
      </div>
    </div>
  );
}
