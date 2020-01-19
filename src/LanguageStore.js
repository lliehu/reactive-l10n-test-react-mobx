import { observable, decorate } from 'mobx';

class LanguageStore {
  language = navigator.language;
  manuallySelectedLanguage = false;
  switchLanguageTo(language) {
    this.manuallySelectedLanguage = true;
    this.language = language;
  }
  enableAutomaticUILanguage() {
    this.manuallySelectedLanguage = false;
    this.language = navigator.language;
  }
}

decorate(LanguageStore, {
  language: observable,
  manuallySelectedLanguage: observable
});


export default LanguageStore;
