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
  console.log(dailyEvents);
  return <div>I am an event</div>;
}
