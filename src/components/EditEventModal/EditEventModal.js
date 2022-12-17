import './EditEventModal.scss';

export default function EditEventModal({ showUpdateModal, eventToUpdate }) {
  if (showUpdateModal === 'no') {
    return null;
  }
  return (
    <div className="overlay">
      <div className="update-modal"></div>
    </div>
  );
}
