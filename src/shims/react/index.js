/* eslint-disable */

if (process.env.NODE_ENV === 'production') {
  importScripts(
    'https://static.parastorage.com/unpkg/react@16.13.1/umd/react.production.min.js'
  );
} else {
  importScripts(
    'https://static.parastorage.com/unpkg/react@16.13.1/umd/react.development.js'
  );
}

module.exports = self.React;
