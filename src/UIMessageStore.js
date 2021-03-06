import { observable, decorate } from 'mobx';
import messages from './messages';
import messageDescriptors from './messageDescriptors';

export class UIMessageStore {
  messages = {}
  messageDescriptors = {}
  setMessages(messages) {
      for (const property in messages) {
          this.messages[property] = messages[property];
      }
  }
  setMessageDescriptors(descriptors) {
    this.messageDescriptors = descriptors;
  }
}

decorate(UIMessageStore, {
  messages: observable,
  messageDescriptors: observable
});

export function createStore() {
  const store = new UIMessageStore();
  store.setMessages(messages);
  store.setMessageDescriptors(messageDescriptors);
  return store;
}
