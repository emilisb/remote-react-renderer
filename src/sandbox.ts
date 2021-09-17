import {
  retain,
  createRemoteRoot,
  RemoteChannel,
  release,
} from '@remote-ui/core';
import {endpoint} from '@remote-ui/web-workers/worker';
import {HostProps, RenderCallback} from './global-api';

type WixCodeNamespaces = Record<string, any>;

interface RemoteCallable {
  getWixCodeNamespaces(): Promise<WixCodeNamespaces>;
}

// By default, a worker can’t call anything on the main thread. This method indicates
// that the worker expects the main thread to expose an `doSomethingOnMainThread()` function,
// which we will use below.
endpoint.callable('getWixCodeNamespaces');

let renderCallback: RenderCallback | undefined;

// We bring third-party code into the environment by running `importScripts()` below.
// We expect that code to call `self.onRender`, which we define below, to register
// to receive the `RemoteRoot` object it needs to start rendering.
Reflect.defineProperty(self, 'onRender', {
  value: (callback: RenderCallback) => {
    renderCallback = callback;
  },
  writable: false,
});

const buildWixCodeNamespaces = async () => {
  return (endpoint.call as RemoteCallable).getWixCodeNamespaces();
};

const _state = {
  firstRun: true,
  prevProps: {},
  url: '',
};

// This method will be exposed to the worker thread by
export async function run(
  script: string,
  channel: RemoteChannel,
  hostProps: HostProps
) {
  if (_state.firstRun) {
    const wixCodeNamespaces = await buildWixCodeNamespaces();
    // console.warn('~~~ WIX CODE NAMESPACES IN SANDBOX', wixCodeNamespaces);

    Reflect.defineProperty(self, '$ns', {
      value: wixCodeNamespaces,
    });

    // `channel` is a function, which is proxied over from the main thread. If you ever
    // "hold on" to a function you receive this way in order to call it later, you
    // **must** call `retain()` in order to prevent it from being automatically garbage
    // collected.
    retain(channel);

    // `hostProps` contains functions, so it also needs to be retained.
    _state.prevProps = retain(hostProps) && hostProps;
  } else {
    retain(hostProps);

    if (_state.prevProps) {
      release(_state.prevProps);
    }
  }

  if (_state.url !== script) {
    importScripts(script);

    _state.url = `${script}`;
  }

  if (renderCallback == null) {
    throw new Error(
      `The ${script} script did not register a callback to render UI. Make sure that code runs self.onRender().`
    );
  }

  const root = createRemoteRoot(channel, {components: []});

  renderCallback(root, hostProps);

  _state.firstRun = false;
}
