import React from 'react';
import { observer } from 'mobx-react';
import { useIntl } from 'react-intl';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { useStore } from './UIMessageStoreProvider';

const languages = [
  {
    code: 'en',
    nativeName: 'English'
  },
  {
    code: 'fi',
    nativeName: 'Suomi'
  },
  {
    code: 'es',
    nativeName: 'In-Context'
  }
];

const LanguageSwitcher = (props) => {
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

  const { formatMessage } = useIntl();
  const { messageDescriptors } = useStore();

  return (
      <ButtonGroup color="inherit">
        <Button
          onClick={enableAutomaticUILanguage}
          variant={ isAutomaticLanguageSelected() ? 'contained' : 'outlined' }
          color={ isAutomaticLanguageSelected() ? 'default' : 'inherit' }
          disableElevation
        >
          { formatMessage(messageDescriptors.automaticLanguage) }
        </Button>
        {languages.map(language => (
          <Button
            key={language.code}
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
};

export default observer(LanguageSwitcher);
