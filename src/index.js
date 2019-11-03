import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { observable, decorate } from 'mobx';

class LanguageStore {
  language = navigator.language
  switchLanguageTo(language) {
    this.language = language;
  }
}
decorate(LanguageStore, {
  language: observable
});

const languageStore = new LanguageStore();

ReactDOM.render(
  <App store={languageStore} />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
