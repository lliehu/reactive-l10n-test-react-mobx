import React from 'react';
import { observer } from 'mobx-react';
import { FormattedMessage } from 'react-intl';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const languages = [
  {
    code: 'en',
    nativeName: 'English'
  },
  {
    code: 'fi',
    nativeName: 'Suomi'
  }
];

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
      <ButtonGroup color="primary">
        <Button onClick={enableAutomaticUILanguage} variant={ !props.store.manuallySelectedLanguage ? 'contained' : 'outlined' } disableElevation>
          <FormattedMessage id='automaticLanguage'/>
        </Button>
        {languages.map(language => (
          <Button
            onClick={switchLanguageTo.bind(null, language.code)}
            variant={ !!props.store.manuallySelectedLanguage && props.store.language === language.code ? 'contained' : 'outlined'}
            disableElevation
          >
            {language.nativeName}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
});

export default LanguageSwitcher;
