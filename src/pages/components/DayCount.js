import React, { useState, useEffect } from 'react';

// Function to calculate the number of days between today and Diwali
const calculateDaysUntilDiwali = () => {
  const today = new Date();
  const diwali = new Date(today.getFullYear(), 9, 31); // Diwali date (October 31, 2024)
  if (today.getMonth() === 9 && today.getDate() > 31) {
    diwali.setFullYear(diwali.getFullYear() + 1);
  }
  const diffTime = diwali - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

const Countdown = () => {
  const [daysLeft, setDaysLeft] = useState(calculateDaysUntilDiwali());

  useEffect(() => {
    const timer = setInterval(() => {
      setDaysLeft(calculateDaysUntilDiwali());
    }, 1000 * 60 * 60 * 24); // Update every day

    return () => clearInterval(timer); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className='countdown-box'>
      <h4>Days until Diwali: {daysLeft}</h4>
    </div>
  );
};

export default Countdown;
