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

window.addEventListener('languagechange', () => {
  if (!languageStore.manuallySelectedLanguage) {
    languageStore.language = navigator.language;
  }
})

ReactDOM.render(
  <App store={languageStore} />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
