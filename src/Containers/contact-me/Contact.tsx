import './contact.css'
import React, { useState, useEffect } from 'react';

enum DaysOfWeek {
  Sunday = 'SUN',
  Monday = 'MON',
  Tuesday = 'TUE',
  Wednesday = 'WED',
  Thursday = 'THU',
  Friday = 'FRI',
  Saturday = 'SAT',
}

function Contact() {
  const [time, setTime] = useState(new Date());

  // Update the time every second
  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  // Format the time in "8888" format
  const formattedTime = time
    .toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    .replace(':', '');

  // Get the current day of the week
  const dayOfWeek = DaysOfWeek[time.toLocaleString('en-US', { weekday: 'long' }) as keyof typeof DaysOfWeek];

  return (
    <div className="clock">
      <div className="digit-group">
        <div className="digit">{formattedTime[0]}</div>
        <div className="digit">{formattedTime[1]}</div>
        <div className="colon">:</div>
        <div className="digit">{formattedTime[2]}</div>
        <div className="digit">{formattedTime[3]}</div>
      </div>
      <div className="day-of-week">{dayOfWeek}</div>
    </div>
  );
}

export default Contact