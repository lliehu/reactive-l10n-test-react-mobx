import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import LanguageStore from './LanguageStore';
import MessageLogStore from './MessageLogStore';
import MapStore from './MapStore';

const languageStore = new LanguageStore();
const messageLogStore = new MessageLogStore();
const mapStore = new MapStore();

messageLogStore.addLogMessage('testMessage');
messageLogStore.addLogMessage('testMessage');
messageLogStore.addLogMessage('testMessage');

window.addEventListener('languagechange', () => {
  if (!languageStore.manuallySelectedLanguage) {
    languageStore.language = navigator.language;
  }
})

ReactDOM.render(
  <App store={languageStore} messageLogStore={messageLogStore} mapStore={mapStore} />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
