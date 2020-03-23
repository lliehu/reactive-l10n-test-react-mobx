import React from 'react';
import { observer } from 'mobx-react';
import { FormattedMessage } from 'react-intl';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import messageDescriptors from './messageDescriptors';

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

  function isAutomaticLanguageSelected() {
    return !props.store.manuallySelectedLanguage;
  }

  function isLanguageSelected(languageCode) {
    return !!props.store.manuallySelectedLanguage && props.store.language === languageCode;
  }

  return (
      <ButtonGroup color="inherit">
        <Button
          onClick={enableAutomaticUILanguage}
          variant={ isAutomaticLanguageSelected() ? 'contained' : 'outlined' }
          color={ isAutomaticLanguageSelected() ? 'default' : 'inherit' }
          disableElevation
        >
          <FormattedMessage {...messageDescriptors.automaticLanguage}/>
        </Button>
        {languages.map(language => (
          <Button
            onClick={switchLanguageTo.bind(null, language.code)}
            variant={ isLanguageSelected(language.code) ? 'contained' : 'outlined' }
            color={ isLanguageSelected(language.code) ? 'default' : 'inherit' }
            disableElevation
          >
            {language.nativeName}
          </Button>
        ))}
      </ButtonGroup>
  );
});

export default LanguageSwitcher;
