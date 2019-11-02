import React from 'react';
import './App.css';
import LanguageSwitcher from './LanguageSwitcher';
import { FormattedMessage } from 'react-intl';
import { observer } from 'mobx-react';
import {IntlProvider} from 'react-intl';

const messages = {
  "en": {
    "applicationName": "Reactive I18n Test with React and MobX"
  },
  "fi": {
    "applicationName": "Reaktiivinen internationalisointitesti Reactilla ja MobX:llä"
  }
};

const App = observer((props) => (
  <IntlProvider locale={props.store.language} messages={messages[props.store.language]}>
    <div className="App">
      <h1><FormattedMessage id='applicationName'/></h1>
      <LanguageSwitcher store={ props.store }/>
    </div>
  </IntlProvider>
));

export default App;
