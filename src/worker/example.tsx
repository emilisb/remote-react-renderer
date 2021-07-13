import React, {useState} from 'react';
import {render} from '@remote-ui/react';
import { onRender } from './api';

onRender((root, _user) => {
  render(<WorkerApp/>, root);
});

function WorkerApp() {
  const [count, setCount] = useState(0);

  return (
    // <Card>
    //   Welcome, user {user.id}!{' '}
    //   You’ve clicked {count} {count === 1 ? 'time' : 'times'} (from a worker!){' '}
    //   <Button onPress={() => setCount((count) => count + 1)}>Plus one</Button>{' '}
    //   <Button onPress={() => user.getDetails().then(log)}>Fetch user details</Button>{' '}
    //   <Button onPress={() => (self as any).authenticatedFetch('/products.json').then((log))}>Authenticated fetch</Button>
    // </Card>
      <div>
        <h1>{'hello world'}</h1>
        <button data-eject={true} onClick={() => setCount((count) => count + 1)}>{`clicked ${count}`}</button>
      </div>
  );
}
