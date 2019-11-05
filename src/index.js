import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { observable, decorate } from 'mobx';

class LanguageStore {
  language = navigator.language;
  manuallySelectedLanguage = false;
  switchLanguageTo(language) {
    this.manuallySelectedLanguage = true;
    this.language = language;
  }
  enableAutomaticUILanguage() {
    this.manuallySelectedLanguage = false;
    this.language = navigator.language;
  }
}
decorate(LanguageStore, {
  language: observable,
  manuallySelectedLanguage: observable
});
const languageStore = new LanguageStore();

class MessageLogStore {
  messageList = []
  addLogMessage(messageId, parameters = {}) {
    this.messageList.push({
      time: new Date(),
      messageId,
      parameters
    })
  }
}
decorate(MessageLogStore, {
  messageList: observable
});
const messageLogStore = new MessageLogStore();

messageLogStore.addLogMessage('testMessage');
messageLogStore.addLogMessage('testMessage');
messageLogStore.addLogMessage('testMessage');

window.addEventListener('languagechange', () => {
  if (!languageStore.manuallySelectedLanguage) {
    languageStore.language = navigator.language;
  }
})

ReactDOM.render(
  <App store={languageStore} messageLogStore={messageLogStore} />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
