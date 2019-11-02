import React from 'react';
import './App.css';
import LanguageSwitcher from './LanguageSwitcher';
import { FormattedMessage } from 'react-intl';
import { observer } from 'mobx-react';

const App = observer((props) => (
  <div className="App">
    <h1><FormattedMessage id='applicationName'/></h1>
    <LanguageSwitcher store={ props.store }/>
  </div>
));

export default App;
