import React from 'react';
import { observer } from 'mobx-react';
import { FormattedDate } from 'react-intl-phraseapp';
import { useIntl } from './phraseHookIntegration';
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
          { formatMessage(message.messageDescriptor, message.parameters) }
        </p>
      )) }
    </div>
  );
});

export default MessageLog;
