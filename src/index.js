import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import LanguageStore from './LanguageStore';
import MessageLogStore from './MessageLogStore';
import MapStore from './MapStore';
import {initializePhraseAppEditor} from 'react-intl-phraseapp'

const languageStore = new LanguageStore();
const messageLogStore = new MessageLogStore();
const mapStore = new MapStore();

window.addEventListener('languagechange', () => {
  if (!languageStore.manuallySelectedLanguage) {
    languageStore.language = navigator.language;
  }
})

let config = {
  projectId: process.env.REACT_APP_PHRASE_PROJECT_ID,
  debugMode: true,
  autoLowercase: false,
  phraseEnabled: true,
  prefix: "[[__",
  suffix: "__]]",
  fullReparse: true
};

initializePhraseAppEditor(config);

ReactDOM.render(
  <App store={languageStore} messageLogStore={messageLogStore} mapStore={mapStore} />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
