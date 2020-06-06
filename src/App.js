import React from 'react';
import './App.css';
import LanguageSwitcher from './LanguageSwitcher';
import AlertTest from './AlertTest';
import { observer } from 'mobx-react';
import { IntlProvider } from 'react-intl'; // Can be switched between 'locize' and 'react-intl'.
import CatCount from './CatCount';
import CatCountControls from './CatCountControls';
import MessageLog from './MessageLog';
import Header from './Header';
import MapNavigator from './MapNavigator';
import MapArea from './MapArea';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { enUS, fiFI } from '@material-ui/core/locale';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { createStore } from './UIMessageStore';
import { UIMessageStoreProvider } from './UIMessageStoreProvider';
import CatCountStore from './CatCountStore';

const uiMessageStore = createStore();

window.messageStore = uiMessageStore;

const catCountStore = new CatCountStore();

function getMessages(locale) {
  // Fall back to English if messages with current language are not found.
  return uiMessageStore.messages[locale.substring(0, 2)] || null
}

function getTheme(locale) {
  let materialUiLocale = enUS;
  if (locale.substring(0, 2) === 'fi') {
    materialUiLocale = fiFI;
  }
  window.materialUiLocale = materialUiLocale;
  return createMuiTheme({}, materialUiLocale);
}

const App = (props) => (
  <UIMessageStoreProvider store={uiMessageStore}>
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
          <CatCount catCountStore={catCountStore}/>
          <CatCountControls catCountStore={catCountStore}/>
          <MessageLog messageList={ props.messageLogStore.messageList } />
          <MapNavigator store={props.mapStore} />
          <MapArea messageLogStore={props.messageLogStore} store={props.mapStore} />
        </div>
      </ThemeProvider>
    </IntlProvider>
  </UIMessageStoreProvider>
);

export default observer(App);
