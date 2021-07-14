import { createPlainWorkerFactory, createWorkerFactory } from '@remote-ui/web-workers';

const noop = (..._args: any[]) => () => {}

noop(createPlainWorkerFactory(() =>
  import(/* webpackChunkName: 'foo' */ './components/foo'),
));

noop(createPlainWorkerFactory(() =>
  import(/* webpackChunkName: 'bar' */ './components/bar'),
));

noop(createWorkerFactory(() =>
  import(/* webpackChunkName: 'sandbox' */ './sandbox'),
));

