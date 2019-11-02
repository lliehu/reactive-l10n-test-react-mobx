import React from 'react';
import { observer } from 'mobx-react';

const LanguageSwitcher = observer((props) => (
  <div>
    <button onClick={() => {props.store.switchLanguageTo('fi')}}>Suomi</button>
    <button onClick={() => {props.store.switchLanguageTo('en')}}>English</button>
    <p>Active language: { props.store.language }</p>
  </div>
));

export default LanguageSwitcher;