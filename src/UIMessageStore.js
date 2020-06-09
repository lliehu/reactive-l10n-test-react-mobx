import { observable, decorate } from 'mobx';
import messagesEs from './messages/es';
import messagesFi from './messages/fi';
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
  store.setMessages({
    es: messagesEs,
    fi: messagesFi
  });
  store.setMessageDescriptors(messageDescriptors);
  return store;
}
