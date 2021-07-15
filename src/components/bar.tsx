import React from 'react';

const Bar = ({hostProps}: any) => <div style={{ backgroundColor: '#3aac91', fontSize: 'x-large' }}>
I am Bar and I run in a web worker!
<pre>`self.location.href` is {self.location.href}</pre>
<pre>`self.performance.timeOrigin` is {self.performance.timeOrigin}</pre>
The viewer sent me prop:
<pre>`self.location.href` is {hostProps.myProp}</pre>
</div>

export default Bar
