import React from 'react';
import ReactHTML from './ReactHTML'

const processProps = (props: Record<string, any>) => Object.entries(props).reduce((acc, [key, val]) => {
  if (typeof val === 'function') {
    acc[key] = () => val()
  } else {
    acc[key] = val
  }
  return acc
}, {} as typeof props)

const aReactCompoent = (compType: string): React.ComponentType<any> => ({children, ...props}) => {
  return React.createElement(compType, processProps(props), children || [])
}

export default function proxyComponentsFactory() {
  return new Proxy(ReactHTML, {
    get: function(_target, compType) {
      if (typeof compType !== 'string') {
        throw new Error(`cannot render component of type ${compType.toString()}`)
      }
      return aReactCompoent(compType);
    }
  });
}