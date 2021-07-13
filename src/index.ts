// import auto-generated components entries
import './lib'
import { createWorkerFactory } from '@remote-ui/web-workers';

createWorkerFactory(() =>
  import(/* webpackChunkName: 'sandbox' */ './sandbox'),
)

