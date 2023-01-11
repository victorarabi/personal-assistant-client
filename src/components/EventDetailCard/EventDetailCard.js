import './EventDetailCard.scss';

//component that display Event Detail data
export default function EventDetailCard({
  eventData,
  setEventToDelete,
  setShowDeleteModal,
  setEventToUpdate,
  setShowUpdateModal,
  blockModal,
  setBlockModal,
}) {
  //handles click on update button
  function handleUpdateOnClick(e) {
    setEventToUpdate(eventData);
    setShowUpdateModal('yes');
    setShowDeleteModal('no');
    setBlockModal('yes');
  }
  //handles click on delete button
  function handleDeleteOnClick(e) {
    setEventToDelete(eventData);
    setShowDeleteModal('yes');
    setShowUpdateModal('no');
    setBlockModal('yes');
  }
  if (!eventData) return null;
  return (
    <section className="event-card">
      <div className="event-card__container">
        <div className="event-card__column-wrapper">
          <h4 className="event-card__label">Event Title:</h4>
          <p className="event-card__txt">{eventData.summary}</p>
          <h4 className="event-card__label">Description:</h4>
          <p className="event-card__txt">{eventData.description}</p>
        </div>
        <div className="event-card__column-wrapper">
          <h4 className="event-card__label">Event start date:</h4>
          <p className="event-card__txt">
            {eventData.start.dateTime.slice(0, 19)}
          </p>
          <h4 className="event-card__label">Event end date:</h4>
          <p className="event-card__txt">
            {eventData.end.dateTime.slice(0, 19)}
          </p>
        </div>
        <div className="event-card__column-wrapper">
          <h4 className="event-card__label">Email alert</h4>
          <p className="event-card__txt">
            {eventData.reminders.overrides
              ? eventData.reminders.overrides[0].minutes
              : '0'}
            minutes
          </p>
          <h4 className="event-card__label">popup alert</h4>
          <p className="event-card__txt">
            {eventData.reminders.overrides
              ? eventData.reminders.overrides[1].minutes
              : '0'}
            minutes
          </p>
        </div>
        <div className="event-card__column-wrapper">
          <h4 className="event-card__label">Event location:</h4>
          <p className="event-card__txt">{eventData.location}</p>
          <div className="event-card__btn-container">
            <button
              className="event-card__btn"
              disabled={blockModal === 'yes' ? true : false}
              onClick={handleUpdateOnClick}
            >
              edit
            </button>
            <button
              className="event-card__btn"
              disabled={blockModal === 'yes' ? true : false}
              onClick={handleDeleteOnClick}
            >
              delete
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
