import React from 'react';
import './App.css';
import { Settings } from './components/Settings';
import { Timer } from './components/Timer';

export default () => {
  return (
    <div className="App">
      <Settings />
      {/* <Timer
        date={
          'Mon Apr 01 2019 02:00:00 GMT+0300 (Восточная Европа, летнее время)'
        }
        interval={1000}
        key="idx"
        autoStart
      /> */}
    </div>
  );
};
