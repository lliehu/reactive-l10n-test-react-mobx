import React from 'react';
import { observer } from 'mobx-react';
import { useIntl, FormattedDate } from 'react-intl';
import { useStore } from './UIMessageStoreProvider';

const MessageLog = observer((props) => {
  const { formatMessage } = useIntl();
  const { messageDescriptors } = useStore();

  return (
    <div>
      <h2>
        { formatMessage(messageDescriptors.messageLogTitle) }
      </h2>
      { props.messageList.map((message, index) => (
        <p key={index}>
          [
            <FormattedDate
              value={message.time}
              year="numeric" month="numeric" day="numeric"
              hour="numeric" minute="numeric" second="numeric"
            />
          ]&nbsp;
          <span>{ formatMessage(message.messageDescriptor, message.parameters) }</span>
        </p>
      )) }
    </div>
  );
});

export default MessageLog;
