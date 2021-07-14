// import React from 'react';
// import { render } from '@remote-ui/react';
// import { onRender } from './global-api';
// import ExternalComponent from '.'

// onRender((root, hostProps) => {
//   render(<ExternalComponent hostProps={hostProps}/>, root);
// });

import React from 'react';
import { render } from '@remote-ui/react';
import { onRender } from '../global-api';

const Foo = ({hostProps}: any) => <div>I am Foo</div>

onRender((root, hostProps) => {
  render(<Foo hostProps={hostProps}/>, root);
});
