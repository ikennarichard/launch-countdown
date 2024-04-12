/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from 'react';
import './timecard.css';

function TimeCard({ launchDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const secondsRef = useRef(null);
  const minuteRef = useRef(null);
  const hourRef = useRef(null);
  const dayRef = useRef(null);

  const getTimeLeft = () => {
    // time left to launch date
    const timeLeftTillLaunch = +new Date(launchDate) - +new Date();

    const remainingTime = {
      days: Math.floor(timeLeftTillLaunch / (24 * 3600 * 1000)),
      hours: Math.floor((timeLeftTillLaunch / (3600 * 1000)) % 24),
      minutes: Math.floor((timeLeftTillLaunch / 1000 / 60) % 60),
      seconds: Math.floor((timeLeftTillLaunch / 1000) % 60),
    };

    return remainingTime;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
      secondsRef.current.classList.add('flip');

      if (timeLeft.seconds === 0) {
        minuteRef.current.classList.add('flip');
      }
      if (timeLeft.minutes === 0 && timeLeft.seconds === 0) {
        hourRef.current.classList.add('flip');
      }
      if (timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0) {
        dayRef.current.classList.add('flip');
      }

      setTimeout(() => {
        secondsRef.current.classList.remove('flip');
        minuteRef.current.classList.remove('flip');
        hourRef.current.classList.remove('flip');
        dayRef.current.classList.remove('flip');
      }, 500);
    }, 1000);

    return () => clearInterval(timer);
  });

  // add leading zero
  const addLeadingZero = (value) => (value < 10 ? `0${value}` : value);

  const days = addLeadingZero(timeLeft.days);
  const hours = addLeadingZero(timeLeft.hours);
  const minutes = addLeadingZero(timeLeft.minutes);
  const seconds = addLeadingZero(timeLeft.seconds);

  return (
    <div className="container">
      <div className="time-wrapper" data-top={days}>
        <div className="card">
          <div className="top" ref={dayRef}>
            <span className="days num" data-testid="days">
              {days}
            </span>
            <span className="top-back" />
          </div>
          <div className="bottom">
            <span className="hours num">
              {days}
            </span>
            <span className="bottom-back" />
          </div>
        </div>
        <p className="label">days</p>
      </div>

      {/* hours */}
      <div className="time-wrapper" data-top={hours}>
        <div className="card">
          <div className="top" ref={hourRef}>
            <span className="num hours" data-testid="hours">
              {hours}
            </span>
          </div>
          <div className="bottom">
            <span className="num hours">
              {hours}
            </span>
          </div>
        </div>
        <p className="label">hours</p>
      </div>

      {/* minutes */}
      <div className="time-wrapper" data-top={minutes}>
        <div className="card">
          <div className="top" ref={minuteRef}>
            <span className="num" data-testid="minutes">
              {minutes}
            </span>
            <span className="top-back" />
          </div>
          <div className="bottom">
            <span
              className="num"
            >
              {minutes}
            </span>
            <span className="bottom-back" />
          </div>
        </div>
        <p className="label">minutes</p>
      </div>

      {/* seconds */}
      <div className="time-wrapper" data-top={seconds}>
        <div className="card">
          <div className="sec top" ref={secondsRef}>
            <span
              className="num seconds"
              data-bottom={seconds}
              data-testid="seconds"
            >
              {seconds}
            </span>
          </div>
          <div className="bottom">
            <span className="num seconds">
              {seconds}
            </span>
          </div>
        </div>
        <p className="label">seconds</p>
      </div>
    </div>
  );
}

export default TimeCard;
