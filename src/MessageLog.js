import React from 'react';
import { FormattedDate, FormattedMessage } from 'react-intl';

const MessageLog = (props) => (
  <div>
    <h2>
      <FormattedMessage id='messageLogTitle'/>
    </h2>
    { props.messageList.map((message, index) => (
      <p key={index}>
        [<FormattedDate value={message.time}/>]&nbsp;
        <FormattedMessage id={message.messageId} values={message.parameters}/>
      </p>
    )) }
  </div>
);

export default MessageLog;
