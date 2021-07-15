import React from 'react';

const Foo = ({hostProps}: any) => <div style={{ backgroundColor: '#e383d8', fontSize: 'x-large' }}>
I am Foo and I run in a web worker!
<pre>`self.location.href` is {self.location.href}</pre>
<pre>`self.performance.timeOrigin` is {self.performance.timeOrigin}</pre>
The viewer sent me prop:
<pre>`myProp` is {hostProps.myProp}</pre>
</div>

export default Foo
