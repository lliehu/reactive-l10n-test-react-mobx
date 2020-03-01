import React from 'react';
import './App.css';
import LanguageSwitcher from './LanguageSwitcher';
import AlertTest from './AlertTest';
import { observer } from 'mobx-react';
import { IntlProvider } from 'react-intl';
import MessageLog from './MessageLog';
import Header from './Header';
import messages from './messages';
import MapNavigator from './MapNavigator';
import MapArea from './MapArea';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { enUS, fiFI } from '@material-ui/core/locale';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

function getMessages(locale) {
  // TODO Do this better.
  return messages[locale.substring(0, 2)]
}

function getTheme(locale) {
  let materialUiLocale = enUS;
  if (locale.substring(0, 2) === 'fi') {
    materialUiLocale = fiFI;
  }
  return createMuiTheme({}, materialUiLocale);
}

const App = observer((props) => (
  <IntlProvider locale={props.store.language} messages={getMessages(props.store.language)}>
    <ThemeProvider theme={getTheme(props.store.language)}>
      <div className="App">
        <AppBar position="sticky">
          <Toolbar>
            <Header />
            <LanguageSwitcher store={ props.store }/>
        </Toolbar>
        </AppBar>
        <AlertTest/>
        <MessageLog messageList={ props.messageLogStore.messageList } />
        <MapNavigator store={props.mapStore} />
        <MapArea messageLogStore={props.messageLogStore} store={props.mapStore} />
      </div>
    </ThemeProvider>
  </IntlProvider>
));

export default App;
