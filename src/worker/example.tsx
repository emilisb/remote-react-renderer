import React, {SyntheticEvent, useState} from 'react';
import {render} from '@remote-ui/react';
import { onRender } from './api';

onRender((root, hostProps) => {
  render(<WorkerApp/>, root);
});

function WorkerApp() {
  const [clicks, setClicks] = useState({
    button: 0,
    div1: 0
  });

  const eventHandlerFactory = (key: keyof typeof clicks) => (event: SyntheticEvent) => {
    setClicks((clicks) => ({
      ...clicks,
      [key]: clicks[key] + 1
    }))
  }
  return (
    <div>
      <h2>interact</h2>
      <div onClick={eventHandlerFactory('div1')} style={{background: 'lime', padding: '5px', width: '50%'}}>
        <button data-eject={true} onClick={eventHandlerFactory('button')}>click</button>
      </div>
      <h2>state report</h2>
      <div>
        button was clicked {clicks.button} times
      </div>
      <div>
        <span style={{background: 'lime'}}>lime</span> div was clicked {clicks.div1} times
      </div>
    </div>
  );
}
