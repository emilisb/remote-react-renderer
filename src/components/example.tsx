import React, {useState} from 'react';

const buttonClass = `material-ui-button`
const buttonCss = `.${buttonClass}{box-sizing:border-box;display:inline-block;position:relative;cursor:pointer;height:35px;line-height:35px;padding:0 1.5rem;font-size:15px;font-weight:600;font-family:Roboto,sans-serif;letter-spacing:.8px;text-align:center;text-decoration:none;text-transform:uppercase;vertical-align:middle;white-space:nowrap;outline:0;border:none;user-select:none;border-radius:2px;transition:all .3s ease-out;box-shadow:0 2px 5px 0 rgba(0,0,0,.225);color:#fff;background-color:#03a9f4}`
const globalCss = ``
const css = [globalCss, buttonCss].join('\n')

function ExampleApp({hostProps}: any) {
  
  const [clicks, setClicks] = useState({
    button: 0,
    div1: 0
  });

  // const [mainThreadRes, setMainThreadRes] = useState(null);

  // const fetchFromMainThread = async () => {
  //   const res = await (self as any).doSomethingOnMainThread(clicks.div1)
  //   setMainThreadRes(res)
  // }

  const eventHandlerFactory = (key: keyof typeof clicks) => () => {
    setClicks((clicks) => ({
      ...clicks,
      [key]: clicks[key] + 1
    }));
  }

  return (
    <div style={{fontSize: 'xx-large'}}>
      <style>
        {css}
      </style>
      <div onClick={eventHandlerFactory('div1')} style={{background: 'lime', padding: '5px', width: '50%'}}>
        <button className={buttonClass} data-eject={true} onClick={eventHandlerFactory('button')}>click</button>
      </div>
      <ul>
        <li>- <strong>button</strong> was clicked {clicks.button} times</li>
        <li>- <strong>div</strong> and/or <strong>button</strong> were clicked {clicks.div1} times (button click event bubbled up)</li>
      </ul>
      {/* <div>
        <button className={buttonClass} onClick={fetchFromMainThread}>Ask Main thread to calc</button>
        <div>{`main thread says: ${mainThreadRes}`}</div>
      </div> */}
    </div>
  );
}

export default ExampleApp