import React from 'react';
import './App.css';
import LanguageSwitcher from './LanguageSwitcher';
import { observer } from 'mobx-react';
import { IntlProvider } from 'react-intl';
import MessageLog from './MessageLog';
import Header from './Header';
import messages from './messages';
import MapNavigator from './MapNavigator';
import MapArea from './MapArea';

function getMessages(locale) {
  // TODO Do this better.
  return messages[locale.substring(0, 2)]
}

const App = observer((props) => (
  <IntlProvider locale={props.store.language} messages={getMessages(props.store.language)}>
    <div className="App">
      <Header />
      <LanguageSwitcher store={ props.store }/>
      <MessageLog messageList={ props.messageLogStore.messageList } />
      <MapNavigator store={props.mapStore} />
      <MapArea messageLogStore={props.messageLogStore} store={props.mapStore} />
    </div>
  </IntlProvider>
));

export default App;
