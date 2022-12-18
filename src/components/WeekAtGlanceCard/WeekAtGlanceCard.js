import { useState, useEffect } from 'react';
import { DateTime } from 'luxon';
import './WeekAtGlanceCard.scss';

//component that renders the week at glance table
export default function WeekAtGlanceCard(eventsData) {
  const [dailyEvents, setDailyEvents] = useState({
    sunday: [],
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
  });
  const weekDays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  useEffect(() => {
    //defines today date for comparison
    const today = DateTime.now();
    //sort event data and save events happening in the same week as today on an array.
    const weekEvents = eventsData.eventsData.filter((eventData) => {
      const dt = DateTime.fromISO(eventData.start.dateTime);
      if (dt.hasSame(today, 'week')) {
        return true;
      } else {
        return false;
      }
    });
    //sort week events into one array for each day of the week
    let sunday = [];
    let monday = [];
    let tuesday = [];
    let wednesday = [];
    let thursday = [];
    let friday = [];
    let saturday = [];
    weekEvents.forEach((event) => {
      const dt = DateTime.fromISO(event.start.dateTime);
      switch (dt.weekday) {
        case 0:
          sunday.push(event);
          break;
        case 1:
          monday.push(event);
          break;
        case 2:
          tuesday.push(event);
          break;
        case 3:
          wednesday.push(event);
          break;
        case 4:
          thursday.push(event);
          break;
        case 5:
          friday.push(event);
          break;
        case 6:
          saturday.push(event);
          break;
        default:
          return null;
      }
    });
    //set daily events with each week event array
    setDailyEvents({
      sunday: sunday,
      monday: monday,
      tuesday: tuesday,
      wednesday: wednesday,
      thursday: thursday,
      friday: friday,
      saturday: saturday,
    });
  }, [eventsData]);
  return (
    <section className="week">
      <article className="week__header">
        <h1 className="week__title">Your week at a glance</h1>
      </article>
      <article className="week__content-container">
        <div className="week__table-header">
          <ul className="week__table-list">
            {weekDays.map((day) => {
              if (day.toLowerCase() === 'saturday') {
                return (
                  <li
                    key={day}
                    className="week__table-item week__table-item--last">
                    {day}
                  </li>
                );
              }
              return (
                <li key={day} className="week__table-item">
                  {day}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="week__table-content">
          <div className="week__table-column">
            {dailyEvents.sunday.map((event, i) => {
              return (
                <p key={'sunday' + i} className="week__column-item">
                  {event.summary}
                </p>
              );
            })}
          </div>
          <div className="week__table-column">
            {dailyEvents.monday.map((event, i) => {
              return (
                <p key={'monday' + i} className="week__column-item">
                  {event.summary}
                </p>
              );
            })}
          </div>
          <div className="week__table-column">
            {dailyEvents.tuesday.map((event, i) => {
              return (
                <p key={'tuesday' + i} className="week__column-item">
                  {event.summary}
                </p>
              );
            })}
          </div>
          <div className="week__table-column">
            {dailyEvents.wednesday.map((event, i) => {
              return (
                <p key={'wednesday' + i} className="week__column-item">
                  {event.summary}
                </p>
              );
            })}
          </div>
          <div className="week__table-column">
            {dailyEvents.thursday.map((event, i) => {
              return (
                <p key={'thursday' + i} className="week__column-item">
                  {event.summary}
                </p>
              );
            })}
          </div>
          <div className="week__table-column">
            {dailyEvents.friday.map((event, i) => {
              return (
                <p key={'friday' + i} className="week__column-item">
                  {event.summary}
                </p>
              );
            })}
          </div>
          <div className="week__table-column week__table-column--last">
            {dailyEvents.saturday.map((event, i) => {
              return (
                <p key={'saturday' + i} className="week__column-item">
                  {event.summary}
                </p>
              );
            })}
          </div>
        </div>
      </article>
    </section>
  );
}
