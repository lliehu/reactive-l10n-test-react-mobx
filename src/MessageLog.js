import React from 'react';
import { observer } from 'mobx-react';
import { FormattedDate, FormattedMessage } from 'react-intl';

const MessageLog = observer((props) => (
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
));

export default MessageLog;
