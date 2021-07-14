import { createPlainWorkerFactory, createWorkerFactory } from '@remote-ui/web-workers';

const noop = (..._args: any[]) => () => {}

const foo = noop(createPlainWorkerFactory(() =>
  import(/* webpackChunkName: 'foo' */ './components/foo'),
));

foo()

const bar = noop(createPlainWorkerFactory(() =>
  import(/* webpackChunkName: 'bar' */ './components/bar'),
));

bar()

const sandbox = noop(createWorkerFactory(() =>
  import(/* webpackChunkName: 'sandbox' */ './sandbox'),
));

sandbox()

