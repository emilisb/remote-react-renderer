enum WorkerMessageType {
  MainDataRequestFromWorker = 'pt-0',
  MainDataResponseToWorker = 'pt-1',
  InitializedWebWorker = 'pt-2',
  InitializeEnvironment = 'pt-3',
  InitializedEnvironment = 'pt-4',
  InitializedEnvironmentScript = 'pt-5',
  InitializeNextScript = 'pt-6',
  RefHandlerCallback = 'pt-7',
  ForwardMainTrigger = 'pt-8',
  InitializedSandbox = 'pt-9',
  StartedExternalWorker = 'pt-10',
}

export const loadPartytown = async () => {
  sendExternalWorkerCreatedMessage();

  console.log('~~~ WAITING FOR PT TO SET WORKER');
  await waitForPartytownSandbox();
  console.log('~~~ PT WORKER SET');

  require('./partytown-ww-sw');

  console.log('~~~ WAITING FOR SELF.DOCUMENT');
  await waitForPartytownGlobals();
  console.log('~~~ SELF.DOCUMENT WAS SET');
};

export const requestPartytownGlobals = () => {
  postMessage([WorkerMessageType.MainDataRequestFromWorker]);
};

const waitForPartytownSandbox = async () => {
  return new Promise<void>((resolve) => {
    self.addEventListener('message', (e) => {
      if (e.data[0] === WorkerMessageType.InitializedSandbox) {
        resolve();
      }
    });
  });
};

const waitForPartytownGlobals = async () => {
  return new Promise<void>((resolve) => {
    const interval = setInterval(() => {
      if (self.document) {
        clearInterval(interval);
        resolve();
      }
    }, 100);
  });
};

const sendExternalWorkerCreatedMessage = () => {
  postMessage([WorkerMessageType.StartedExternalWorker]);
};
