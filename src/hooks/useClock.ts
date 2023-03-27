import { useEffect, useState } from 'react';

const useClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timeInterval);
  }, []);

  return time.toLocaleTimeString();
};

export default useClock;
