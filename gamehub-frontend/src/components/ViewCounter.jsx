import React, { useState, useEffect } from 'react';

function ViewCounter() {
  const [views, setViews] = useState(() => {
    return Number(localStorage.getItem('views') || 0);
  });

  useEffect(() => {
    setViews(prev => {
      const newViews = prev + 1;
      localStorage.setItem('views', newViews);
      return newViews;
    });
  }, []);

  return <p>Просмотров: {views}</p>;
}

export default ViewCounter;
