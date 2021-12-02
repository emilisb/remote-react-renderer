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

  require('./vendor/partytown-ww-sw');

  console.log('~~~ WAITING FOR SELF.DOCUMENT');
  await waitForPartytownGlobals();
  console.log('~~~ SELF.DOCUMENT WAS SET');
};

export const requestPartytownGlobals = async () => {
  postMessage([WorkerMessageType.MainDataRequestFromWorker]);
  await waitForPartytownMainDataResponse();
};

const waitForPartytownSandbox = async () => {
  return waitForPartytownMessage(WorkerMessageType.InitializedSandbox);
};

const waitForPartytownMainDataResponse = async () => {
  return waitForPartytownMessage(WorkerMessageType.MainDataResponseToWorker);
};

const waitForPartytownMessage = async (messageType: WorkerMessageType) => {
  return new Promise<void>((resolve) => {
    self.addEventListener('message', (e) => {
      if (e.data[0] === messageType) {
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
    }, 10);
  });
};

const sendExternalWorkerCreatedMessage = () => {
  postMessage([WorkerMessageType.StartedExternalWorker]);
};
