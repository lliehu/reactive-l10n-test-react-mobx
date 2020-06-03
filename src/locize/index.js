import React, { Component } from 'react';
import { IntlProvider as IP } from 'react-intl';
import locizer from 'locizer';
import locizeEditor from 'locize-editor';

const IS_DEV = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
const DEFAULTNAMESPACE = 'common'; // the translation file to use
const PROJECTID = process.env.REACT_APP_LOCIZE_PROJECT_ID;

const REFERENCELANGUAGE = 'en';
const FALLBACKLANGUAGE = 'en';
const PRIVATE = false; // private publish

// TODO See more at https://github.com/locize/locize-react-intl-example.
locizer
  .init({
    lng: 'fi',
    fallbackLng: FALLBACKLANGUAGE,
    referenceLng: REFERENCELANGUAGE,
    // No limit. 0 doesn't work because inside the library that would convert
    // to a condition like 0 >= (0 || 1), which will evaluate to false and
    // not to true as wanted.
    loadIfTranslatedOver: -1,
    // For setting environment variables, see:
    // https://create-react-app.dev/docs/adding-custom-environment-variables/
    projectId: PROJECTID,
    apiKey: process.env.REACT_APP_LOCIZE_API_KEY
  })

const translations = {};
let currentLocale;

export class IntlProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: null,
      messages: {}
    };
  }
  
  componentDidMount() {
    const namespace = this.props.namespace || DEFAULTNAMESPACE;
    
    // return if already loaded
    if (currentLocale && translations[currentLocale] && translations[currentLocale][namespace]) return;
    
    // load the given file from Locize and detect language while doing so
    locizer.load(namespace, (err, messages, locale) => {
      currentLocale = locale;
      translations[locale] = messages;

      // update state to render children
      this.setState({
        locale,
        messages
      });
      
      // init editor if development
      if (IS_DEV) {
        // init incontext editor
        locizeEditor.init({
          lng: locale,
          defaultNS: DEFAULTNAMESPACE,
          referenceLng: REFERENCELANGUAGE,
          projectId: PROJECTID,
          private: PRIVATE
        })
      }
    });
  }
  
  render() {
    const { children } = this.props;
    const { locale, messages } = this.state;
    
    if (!locale) return null; // we wait for render until loaded
    
    // render the react-intl IntlProvider with loaded messages
    return (
      <IP locale={locale} messages={messages}>
        {children}
      </IP>
      );
  }
}
