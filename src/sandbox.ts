import {
  retain,
  createRemoteRoot,
  RemoteChannel,
  release,
} from '@remote-ui/core';

import {endpoint} from '@remote-ui/web-workers/worker';

import { HostProps, RenderCallback} from './global-api';

// By default, a worker can’t call anything on the main thread. This method indicates
// that the worker expects the main thread to expose an `doSomethingOnMainThread()` function,
// which we will use below.
endpoint.callable('doSomethingOnMainThread');

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

// We also expose an additional global method, self.doSomethingOnMainThread(). This function
// will call the `doSomethingOnMainThread()` function exposed by the main thread in
// `WorkerRenderer`.
Reflect.defineProperty(self, 'doSomethingOnMainThread', {
  value: (httpEndpoint: string) => (endpoint.call as {doSomethingOnMainThread(httpEndpoint: string): Promise<any>}).doSomethingOnMainThread(httpEndpoint),
  writable: false,
});

const _state = {
  firstRun: true,
  prevProps: {},
  url: ''
}

// This method will be exposed to the worker thread by 
export function run(script: string, channel: RemoteChannel, hostProps: HostProps) {
  if (_state.firstRun) {

      // `channel` is a function, which is proxied over from the main thread. If you ever
      // "hold on" to a function you receive this way in order to call it later, you
      // **must** call `retain()` in order to prevent it from being automatically garbage
      // collected.
      retain(channel);

      // `hostProps` contains functions, so it also needs to be retained.
      _state.prevProps = retain(hostProps) && hostProps

  } else {
    retain(hostProps)

    if (_state.prevProps) {
      release(_state.prevProps)
    }
  }

  if (_state.url !== script) {
    importScripts(script);
  }

  if (renderCallback == null) {
    throw new Error(`The ${script} script did not register a callback to render UI. Make sure that code runs self.onRender().`)
  }

  const root = createRemoteRoot(channel, {components: []});

  renderCallback(root, hostProps);

  _state.firstRun = false
}
