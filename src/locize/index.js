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
      messages: {},
      tick: 0 // For triggering re-render
    };
  }

  componentDidMount() {
    const namespace = this.props.namespace || DEFAULTNAMESPACE;

    // Return if already loaded
    if (currentLocale && translations[currentLocale] && translations[currentLocale][namespace]) return;
    
    // Load the given locale from Locize
    locizer.load(namespace, this.props.locale, (err, messages, locale) => {
      currentLocale = locale;
      translations[locale] = messages;

      // Update state to trigger a re-render for rendering children
      this.setState({
        locale,
        messages
      });

      if (IS_DEV) {
        locizeEditor.init({
          enabled: true,
          lng: locale,
          defaultNS: DEFAULTNAMESPACE,
          referenceLng: REFERENCELANGUAGE,
          projectId: PROJECTID,
          private: PRIVATE,
          onEditorSaved: (lng, ns) => {
            this.setState({tick: this.state.tick + 1});
          }
        })
      }
    });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('IntlProvider.componentDidUpdate called.');

    if (this.state.tick !== prevState.tick
      || this.props.namespace !== prevProps.namespace
      || this.props.locale !== prevProps.locale
      || this.props.messages !== prevProps.messages)
    {
      const namespace = this.props.namespace || DEFAULTNAMESPACE;
      locizer.load(namespace, this.props.locale, (err, messages, locale) => {
        currentLocale = locale;
        translations[locale] = messages;

        this.setState({
          locale,
          messages
        });

        // TODO How to update editor language?
        console.log('Locize editor instance for inspection:', locizeEditor); // TODO Remove this.
      });
    }
  }
  
  render() {
    const { children } = this.props;
    const { locale, messages } = this.state;
    
    if (!locale) return null; // Wait for render until loaded
    
    // render the react-intl IntlProvider with loaded messages
    return (
      <IP locale={locale} messages={messages}>
        {children}
      </IP>
      );
  }
}
