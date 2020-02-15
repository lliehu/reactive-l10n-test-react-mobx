import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LanguageStore from './LanguageStore';
import MessageLogStore from './MessageLogStore';
import MapStore from './MapStore';

const languageStore = new LanguageStore();
const messageLogStore = new MessageLogStore();
const mapStore = new MapStore();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <App store={languageStore} messageLogStore={messageLogStore} mapStore={mapStore} />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
