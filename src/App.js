import React from 'react';
import './App.css';
import LanguageSwitcher from './LanguageSwitcher';
import { observer } from 'mobx-react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import { Helmet } from "react-helmet";
import MessageLog from './MessageLog';
import Header from './Header';
import messages from './messages';
import MapArea from './MapArea';

function getMessages(locale) {
  // TODO Do this better.
  return messages[locale.substring(0, 2)]
}

const App = observer((props) => (
  <IntlProvider locale={props.store.language} messages={getMessages(props.store.language)}>
    <div className="App">
      <Helmet>
        <title>Test</title>
      </Helmet>
      <Header />
      <LanguageSwitcher store={ props.store }/>
      <MessageLog messageList={ props.messageLogStore.messageList } />
      <MapArea messageLogStore={props.messageLogStore} />
    </div>
  </IntlProvider>
));

export default App;
