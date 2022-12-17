import './UpdateEventForm.scss';

//component that renders update event form
export default function UpdateEventForm({
  handleOverlayOnClick,
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
  handleCancelOnClick,
}) {
  return (
    <div className="overlay" onClick={handleOverlayOnClick}>
      <div
        className="update-modal"
        onClick={(e) => {
          e.stopPropagation();
        }}>
        <h3 className="update-modal__title">Update event</h3>
        <div className="update-modal__form">
          <label className="update-modal__label" htmlFor="title">
            Title:
          </label>
          <input
            className="update-modal__input"
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
          <label className="update-modal__label" htmlFor="description">
            Description:
          </label>
          <input
            className="update-modal__input"
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
          <label className="update-modal__label" htmlFor="location">
            Location:
          </label>
          <input
            className="update-modal__input"
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
          <label className="update-modal__label" htmlFor="startDate">
            Start Date:
          </label>
          <input
            className="update-modal__date"
            id="startDate"
            name="startDate"
            type="datetime-local"
            required
            value={eventStartDate}
            onChange={handleStartDateForm}
          />
          <label className="update-modal__label" htmlFor="endDate">
            End Date:
          </label>
          <input
            className="update-modal__date"
            id="endDate"
            name="endDate"
            type="datetime-local"
            required
            value={eventEndDate}
            onChange={handleEndDateForm}
          />
          <label className="update-modal__label" htmlFor="reminder">
            Add reminder?
          </label>
          <select
            className="update-modal__reminder update-modal__reminder--selector"
            id="reminder"
            name="reminder"
            required
            onChange={handleReminderSelector}
            value={eventReminder}>
            <option value={'no'}>No</option>
            <option value={'yes'}>Yes</option>
          </select>
          {eventReminder === 'yes' ? (
            <div className="update-modal__reminder-options">
              <div className="update-modal__reminder-wrapper">
                <label className="update-modal__label" htmlFor="emailAlert">
                  E-mail:
                </label>
                <div className="update-modal__email-options">
                  <select
                    className="update-modal__email-alert"
                    id="emailAlert"
                    name="emailAlert"
                    onChange={handleEmailAlertSelector}
                    value={eventEmailAlert.emailReminder}
                    required>
                    <option value={'no'}>No</option>
                    <option value={'yes'}>Yes</option>
                  </select>
                  <input
                    className="update-modal__input update-modal__input--reminder-time"
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
                    className="update-modal__time-units"
                    id="emailAlertTime"
                    name="emailAlert"
                    onChange={handleEmailAlertTimeUnitForm}
                    value={eventEmailAlert.reminderTimeUnit}
                    required>
                    <option value={'minutes'}>Minutes</option>
                    <option value={'hours'}>Hours</option>
                    <option value={'days'}>Days</option>
                  </select>
                </div>
              </div>
              <div className="update-modal__reminder-wrapper">
                <label className="update-modal__label" htmlFor="popUpAlert">
                  Pop Up:
                </label>
                <div className="update-modal__popup-options">
                  <select
                    className="update-modal__pop-up-alert"
                    id="popUpAlert"
                    name="popUpAlert"
                    onChange={handlePopUpAlertSelector}
                    value={eventPopUpAlert.popUpReminder}
                    required>
                    <option value={'no'}>No</option>
                    <option value={'yes'}>Yes</option>
                  </select>
                  <input
                    className="update-modal__input update-modal__input--reminder-time"
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
                    className="update-modal__time-units"
                    id="popUpAlertTime"
                    name="popUpAlert"
                    onChange={handlePopUpAlertTimeUnitForm}
                    value={eventPopUpAlert.reminderTimeUnit}
                    required>
                    <option value={'minutes'}>Minutes</option>
                    <option value={'hours'}>Hours</option>
                    <option value={'days'}>Days</option>
                  </select>
                </div>
              </div>
            </div>
          ) : null}
        </div>
        <button className="update-modal__btn" onClick={handleSubmit}>
          Update event
        </button>
        <button className="delete-modal__button" onClick={handleCancelOnClick}>
          Cancel
        </button>
      </div>
    </div>
  );
}
