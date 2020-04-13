import React from 'react';
import { observer } from 'mobx-react';
import { useIntl, FormattedDate } from 'react-intl';
import messageDescriptors from './messageDescriptors';

const MessageLog = observer((props) => {
  const { formatMessage } = useIntl();

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
