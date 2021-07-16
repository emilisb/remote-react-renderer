# Generating remote-ui-compatible workers

This work is based on [Shopify/remote-ui](https://github.com/Shopify/remote-ui/tree/main/examples/create-react-app) example:

> This repo demonstrates how to incorporate a few different `@remote-ui` libraries into an app bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

My project bundles two types of workers, compatible with rmeote-ui APIs for running react components on web workers.
- `sandbox`: where each component is rendered.
- `foo/bar/example`: three different vanilla react components.

These bundles are later consumed by the host react:
```js
// host react component
import { createWorkerFactory } from '@remote-ui/web-workers';
import {
  RemoteReceiver,
  RemoteRenderer,
  useWorker,
} from '@remote-ui//react/host';

function MyHostComponent() {
  const receiver = useMemo(() => new RemoteReceiver(), []);
  const sandbox = useWorker(createWorkerFactory(`my-public-sandbox-url`));

  useEffect(() => {
    sandbox.run(componentUrl, receiver.receive);
  }, [receiver, sandbox, componentUrl, hostProps]);

  return (
    <RemoteRenderer receiver={receiver} components={...} />
  );
}
```
