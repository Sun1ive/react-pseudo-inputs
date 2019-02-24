import React, { SFC, useState, useEffect, Fragment } from 'react';
import dateFns, { differenceInSeconds } from 'date-fns';

interface ITimerProps {
  autoStart?: boolean;
  date: any;
  interval: number;
}

export const Timer: SFC<ITimerProps> = ({
  date,
  autoStart = true,
  interval = 1000
}) => {
  const [running, setRunning] = useState(autoStart);
  const [diff, setDiff] = useState(0);
  const [now, setNow] = useState(new Date());
  const [finish, setFinish] = useState(dateFns.addSeconds(now, 2));
  const [reverse, setReverse] = useState(false);

  const tick = () => {
    if (diff === 0) {
      console.log('diff!!reverse');
    }

    return (
      running &&
      setTimeout(() => {
        setNow(new Date());
        setDiff(Date.parse(finish.toString()) - Date.parse(now.toString()));
      }, interval)
    );
  };

  useEffect(() => {
    tick();
  }, [diff, running]);

  return (
    <Fragment>
      <div>
        <div>{diff / 1000}</div>
        {Math.floor((diff / 3600000) % 24)
          .toString()
          .padStart(2, '0')}
        :
        {Math.floor((diff / 60000) % 60)
          .toString()
          .padStart(2, '0')}
        :
        {Math.round((diff / 1000) % 60)
          .toString()
          .padStart(2, '0')}
      </div>
    </Fragment>
  );
};
