import React, { SFC, useState, useEffect } from 'react';

export const Hook: SFC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount(count => {
        console.log('some logic');

        return (count += 10);
      });
    }, 1000);
  }, []);

  return <div>{count}</div>;
};
