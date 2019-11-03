import React from 'react';
import { observer } from 'mobx-react';
import { FormattedMessage } from 'react-intl';

const LanguageSwitcher = observer((props) => {
  function switchLanguageTo(language) {
    props.store.switchLanguageTo(language);
  }

  return (
    <div>
      <h2><FormattedMessage id='languageSwitcherTitle'/></h2>
      <button onClick={switchLanguageTo.bind(null, 'fi')}>Suomi</button>
      <button onClick={switchLanguageTo.bind(null, 'en')}>English</button>
      <p>Active language: { props.store.language }</p>
    </div>
  );
});

export default LanguageSwitcher;