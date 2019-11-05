import React from 'react';
import { observer } from 'mobx-react';
import { FormattedMessage } from 'react-intl';

const LanguageSwitcher = observer((props) => {
  function switchLanguageTo(language) {
    props.store.switchLanguageTo(language);
  }

  function enableAutomaticUILanguage() {
    props.store.enableAutomaticUILanguage();
  }

  return (
    <div>
      <h2><FormattedMessage id='languageSwitcherTitle'/></h2>
      <button onClick={switchLanguageTo.bind(null, 'fi')}>Suomi</button>
      <button onClick={switchLanguageTo.bind(null, 'en')}>English</button>
      <button onClick={enableAutomaticUILanguage}>
        <FormattedMessage id='automaticLanguage'/>
      </button>
      <p>
        <FormattedMessage
          id='currentLanguage'
          values={{language: props.store.language}}
        />
      </p>
    </div>
  );
});

export default LanguageSwitcher;