import React from 'react';
import { observer } from 'mobx-react';
import { FormattedDate, FormattedMessage } from 'react-intl';
import messageDescriptors from './messageDescriptors';

const MessageLog = observer((props) => (
  <div>
    <h2>
      <FormattedMessage {...messageDescriptors.messageLogTitle}/>
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
        <FormattedMessage {...message.messageDescriptor} values={message.parameters}/>
      </p>
    )) }
  </div>
));

export default MessageLog;
