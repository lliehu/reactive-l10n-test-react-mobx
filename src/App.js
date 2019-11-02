import React from 'react';
import './App.css';
import LanguageSwitcher from './LanguageSwitcher';
import { observer } from 'mobx-react';
import {IntlProvider} from 'react-intl';
import MessageLog from './MessageLog';
import Header from './Header';

const messages = {
  "en": {
    "applicationName": "Reactive I18n Test with React and MobX",
    "messageLogTitle": "Message Log"
  },
  "fi": {
    "applicationName": "Reaktiivinen internationalisointitesti Reactilla ja MobX:llä",
    "messageLogTitle": "Viestiloki"
  }
};

const App = observer((props) => (
  <IntlProvider locale={props.store.language} messages={messages[props.store.language]}>
    <div className="App">
      <Header />
      <LanguageSwitcher store={ props.store }/>
      <MessageLog />
    </div>
  </IntlProvider>
));

export default App;
