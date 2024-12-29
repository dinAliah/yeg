// VerticalCountdownTimer.js
'use client'
import React, { useEffect, useState } from 'react';

const VerticalCountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const styles = {
    body: {
      fontFamily: 'Arial, sans-serif',
      justifyContent: 'center',
      height: '100vh',
      margin: '0',
      backgroundColor: '#f0f0f0',
    },
    timer: {
      justifyContent: 'center',
      textAlign: 'center',
      background: 'white',
      padding: '20px',
      borderRadius: '10px',
      display: 'flex',
      alignItems: 'center',
    },
    timeUnit: {
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '10px 0',
    },
    timeValue: {
      fontSize: '48px',
      margin: '5px 0',
    },
    timeLabel: {
      fontSize: '16px',
    },
  };

  return (
    <div style={styles.timer}>
      <div style={styles.timeUnit}>
        <div style={styles.timeValue}>{String(timeLeft.days).padStart(2, '0')}</div>
        <p style={styles.timeLabel}>Days</p>
      </div>
      <div style={styles.timeUnit}>
        <div style={styles.timeValue}>{String(timeLeft.hours).padStart(2, '0')}</div>
        <p style={styles.timeLabel}>Hours</p>
      </div>
      <div style={styles.timeUnit}>
        <div style={styles.timeValue}>{String(timeLeft.minutes).padStart(2, '0')}</div>
        <p style={styles.timeLabel}>Minutes</p>
      </div>
      <div style={styles.timeUnit}>
        <div style={styles.timeValue}>{String(timeLeft.seconds).padStart(2, '0')}</div>
        <p style={styles.timeLabel}>Seconds</p>
      </div>
    </div>
  );
};

export default VerticalCountdownTimer;
