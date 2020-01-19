import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LanguageStore from './LanguageStore';
import MessageLogStore from './MessageLogStore';

const languageStore = new LanguageStore();
const messageLogStore = new MessageLogStore();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <App store={languageStore} messageLogStore={messageLogStore}/>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
