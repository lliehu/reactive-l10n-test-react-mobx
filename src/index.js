import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {IntlProvider} from 'react-intl';

import { observable, decorate } from 'mobx';

class LanguageStore {
  language = 'en'
  switchLanguageTo(language) {
    this.language = language;
  }
}
decorate(LanguageStore, {
  language: observable
});

const languageStore = new LanguageStore();

const messages = {
  "en": {
    "applicationName": "Reactive I18n Test with React and MobX"
  },
  "fi": {
    "applicationName": "Reaktiivinen internationalisointitesti Reactilla ja MobX:llä"
  }
};

ReactDOM.render(
  <IntlProvider locale={languageStore.language} messages={messages[languageStore.language]}>
    <App store={languageStore} />
  </IntlProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
