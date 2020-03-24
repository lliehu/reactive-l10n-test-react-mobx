import { observable, decorate } from 'mobx';

class UIMessageStore {
  messages = {}
  setMessages(messages) {
      for (const property in messages) {
          this.messages[property] = messages[property];
      }
  }
}

decorate(UIMessageStore, {
  messages: observable
});


export default UIMessageStore;
