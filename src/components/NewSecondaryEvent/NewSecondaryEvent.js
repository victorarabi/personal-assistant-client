import './NewSecondaryEvent.scss';

//form component to create a new, prime event
export default function NewSecondaryEvent({
  eventTitle,
  handleTitleForm,
  eventDescription,
  handleDescriptionForm,
  eventLocation,
  handleLocationForm,
  eventStartDate,
  handleStartDateForm,
  eventEndDate,
  handleEndDateForm,
  handleReminderSelector,
  eventReminder,
  handleEmailAlertSelector,
  eventEmailAlert,
  handleEmailAlertTimeForm,
  handleEmailAlertTimeUnitForm,
  handlePopUpAlertSelector,
  eventPopUpAlert,
  handlePopUpAlertTimeForm,
  handlePopUpAlertTimeUnitForm,
  handleSubmit,
}) {
  return (
    <article className="new-event">
      <h3 className="new-event__title">Create a new secondary event</h3>
      <div className="new-event__form">
        <label className="new-event__label" htmlFor="title">
          Title:
        </label>
        <input
          className="new-event__input"
          id="title"
          name="title"
          type="text"
          required
          minLength="6"
          maxLength="36"
          placeholder="Title of your new event"
          value={eventTitle}
          onChange={handleTitleForm}
        />
        <label className="new-event__label" htmlFor="description">
          Description:
        </label>
        <input
          className="new-event__input"
          id="description"
          name="description"
          type="text"
          required
          minLength="6"
          maxLength="36"
          placeholder="Give a description to your new event"
          value={eventDescription}
          onChange={handleDescriptionForm}
        />
        <label className="new-event__label" htmlFor="location">
          Location:
        </label>
        <input
          className="new-event__input"
          id="location"
          name="location"
          type="text"
          required
          minLength="6"
          maxLength="36"
          placeholder="Location"
          value={eventLocation}
          onChange={handleLocationForm}
        />
        <label className="new-event__label" htmlFor="startDate">
          Start Date:
        </label>
        <input
          className="new-event__input"
          id="startDate"
          name="startDate"
          type="datetime-local"
          required
          value={eventStartDate}
          onChange={handleStartDateForm}
        />
        <label className="new-event__label" htmlFor="endDate">
          End Date:
        </label>
        <input
          className="new-event__input"
          id="endDate"
          name="endDate"
          type="datetime-local"
          required
          value={eventEndDate}
          onChange={handleEndDateForm}
        />
        <label className="new-event__label" htmlFor="reminder">
          Add reminder?
        </label>
        <select
          className="new-event__input new-event__input--selector"
          id="reminder"
          name="reminder"
          required
          onChange={handleReminderSelector}
        >
          <option value={'no'}>No</option>
          <option value={'yes'}>Yes</option>
        </select>
        {eventReminder === 'yes' ? (
          <div className="new-event__reminder-options">
            <div className="new-event__reminder-wrapper">
              <label className="new-event__label" htmlFor="emailAlert">
                E-mail:
              </label>
              <div className="new-event__email-options">
                <select
                  className="new-event__input new-event__input--selector"
                  id="emailAlert"
                  name="emailAlert"
                  onChange={handleEmailAlertSelector}
                  required
                >
                  <option value={'no'}>No</option>
                  <option value={'yes'}>Yes</option>
                </select>
                <input
                  className="new-event__input new-event__input--time"
                  id="emailAlertReminderTime"
                  name="emailAlertReminderTime"
                  type="number"
                  required
                  min="0"
                  max="999"
                  placeholder="0"
                  value={eventEmailAlert.reminderTime}
                  onChange={handleEmailAlertTimeForm}
                />
                <select
                  className="new-event__input new-event__input--units"
                  id="emailAlertTime"
                  name="emailAlert"
                  onChange={handleEmailAlertTimeUnitForm}
                  required
                >
                  <option value={'minutes'}>Minutes</option>
                  <option value={'hours'}>Hours</option>
                  <option value={'days'}>Days</option>
                </select>
              </div>
            </div>
            <div className="new-event__reminder-wrapper">
              <label className="new-event__label" htmlFor="popUpAlert">
                Pop Up:
              </label>
              <div className="new-event__options">
                <select
                  className="new-event__input new-event__input--selector"
                  id="popUpAlert"
                  name="popUpAlert"
                  onChange={handlePopUpAlertSelector}
                  required
                >
                  <option value={'no'}>No</option>
                  <option value={'yes'}>Yes</option>
                </select>
                <input
                  className="new-event__input new-event__input--time"
                  id="popUpAlertReminderTime"
                  name="popUpAlertReminderTime"
                  type="number"
                  required
                  min="0"
                  max="999"
                  placeholder="0"
                  value={eventPopUpAlert.reminderTime}
                  onChange={handlePopUpAlertTimeForm}
                />
                <select
                  className="new-event__input new-event__input--units"
                  id="popUpAlertTime"
                  name="popUpAlert"
                  onChange={handlePopUpAlertTimeUnitForm}
                  required
                >
                  <option value={'minutes'}>Minutes</option>
                  <option value={'hours'}>Hours</option>
                  <option value={'days'}>Days</option>
                </select>
              </div>
            </div>
          </div>
        ) : null}
        <button className="new-event__btn" onClick={handleSubmit}>
          Create Event
        </button>
      </div>
    </article>
  );
}
