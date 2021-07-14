import React from 'react';
import { render } from '@remote-ui/react';
import { onRender } from '../global-api';

const Bar = ({hostProps}: any) => <div>I am Bar</div>

onRender((root, hostProps) => {
  render(<Bar hostProps={hostProps}/>, root);
});
