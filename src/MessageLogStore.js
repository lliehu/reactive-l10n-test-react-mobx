import { observable, decorate } from 'mobx';

class MessageLogStore {
  messageList = []
  addLogMessage(messageId, parameters = {}) {
    this.messageList.push({
      time: new Date(),
      messageId,
      parameters
    })
  }
}
decorate(MessageLogStore, {
  messageList: observable
});
export default MessageLogStore;
