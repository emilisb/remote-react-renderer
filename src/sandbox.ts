import React, {ReactElement} from 'react';
import {
  retain,
  createRemoteRoot,
  RemoteChannel,
  release,
} from '@remote-ui/core';
import {render as remoteRender} from '@remote-ui/react';
import {endpoint} from '@remote-ui/web-workers/worker';
import {HostProps, RenderCallback} from './global-api';
import {loadPartytown, requestPartytownGlobals} from './partytown';

type WixCodeNamespaces = Record<string, any>;

interface RemoteCallable {
  getWixCodeNamespaces(): Promise<WixCodeNamespaces>;
}

declare const self: DedicatedWorkerGlobalScope & {
  document: Document;
  React: typeof React;
  remoteReactApi: {
    register: typeof register;
  };
};

// By default, a worker can’t call anything on the main thread. This method indicates
// that the worker expects the main thread to expose an `doSomethingOnMainThread()` function,
// which we will use below.
endpoint.callable('getWixCodeNamespaces');

let renderCallback: RenderCallback | undefined;

const register = (withUserComp: (props: unknown) => ReactElement): void => {
  renderCallback = (root, hostProps) =>
    remoteRender(withUserComp(hostProps), root);
};

self.remoteReactApi = {
  register,
};

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
    const [, wixCodeNamespaces] = await Promise.all([
      loadPartytown(),
      buildWixCodeNamespaces(),
    ]);

    Reflect.defineProperty(self, '$ns', {
      value: wixCodeNamespaces,
    });

    console.log('~~~ SANDBOX SELF', self, self.document);

    // `channel` is a function, which is proxied over from the main thread. If you ever
    // "hold on" to a function you receive this way in order to call it later, you
    // **must** call `retain()` in order to prevent it from being automatically garbage
    // collected.
    retain(channel);

    importScripts(
      'https://static.parastorage.com/unpkg/react@16.13.1/umd/react.development.js'
    );
  } else {
    if (_state.prevProps) {
      release(_state.prevProps);
    }
  }

  // `hostProps` contains functions, so it also needs to be retained.
  _state.prevProps = retain(hostProps) && hostProps;

  if (_state.url !== script) {
    requestPartytownGlobals();

    // TODO: might need to wait for PT to be set up

    importScripts(script);

    _state.url = `${script}`;
  }

  if (renderCallback == null) {
    throw new Error(
      `The ${script} script did not register a callback to render UI. Make sure that code runs self.onRender().`
    );
  }

  if (_state.firstRun) {
    const root = createRemoteRoot(channel, {components: []});

    renderCallback(root, hostProps);

    _state.firstRun = false;
  }
}
