import { observable, decorate } from 'mobx';

class MessageLogStore {
  messageList = []
  addLogMessage(messageDescriptor, parameters = {}) {
    this.messageList.push({
      time: new Date(),
      messageDescriptor,
      parameters
    })
  }
}
decorate(MessageLogStore, {
  messageList: observable
});
export default MessageLogStore;
