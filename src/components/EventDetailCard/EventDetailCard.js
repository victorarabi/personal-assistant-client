import './EventDetailCard.scss';

//component that display Event Detail data
export default function EventDetailCard({ eventData }) {
  if (!eventData) return null;
  return (
    <section className="event-card">
      <div className="event-card__container">
        <div className="event-card__column-wrapper">
          <h4 className="event-card__label">Event Title:</h4>
          <p className="event-card__txt">{eventData.summary}</p>
        </div>
        <div className="event-card__column-wrapper">
          <h4 className="event-card__label">Description:</h4>
          <p className="event-card__txt">{eventData.description}</p>
        </div>
        <div className="event-card__column-wrapper">
          <h4 className="event-card__label">Event location:</h4>
          <p className="event-card__txt">{eventData.location}</p>
        </div>
        <div className="event-card__column-wrapper">
          <h4 className="event-card__label">Event start date:</h4>
          <p className="event-card__txt">
            {eventData.start.dateTime.slice(0, 19)}
          </p>
        </div>
        <div className="event-card__column-wrapper">
          <h4 className="event-card__label">Event end date:</h4>
          <p className="event-card__txt">
            {eventData.end.dateTime.slice(0, 19)}
          </p>
        </div>
        <div className="event-card__column-wrapper">
          <h4 className="event-card__label">Email alert</h4>
          <p className="event-card__text">
            {eventData.reminders.overrides
              ? eventData.reminders.overrides[0].minutes
              : '0'}
            minutes
          </p>
        </div>
        <div className="event-card__column-wrapper">
          <h4 className="event-card__label">popup alert</h4>
          <p className="event-card__text">
            {eventData.reminders.overrides
              ? eventData.reminders.overrides[1].minutes
              : '0'}{' '}
            minutes
          </p>
        </div>
      </div>
    </section>
  );
}
