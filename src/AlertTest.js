import React from 'react';
import { observer } from 'mobx-react';
import { useIntl, FormattedMessage } from 'react-intl';
import Button from '@material-ui/core/Button';
import messageDescriptors from './messageDescriptors';

const AlertTest = observer((props) => {
  const { formatMessage } = useIntl();

  const testAlert = () => {
    alert(formatMessage(messageDescriptors.alertTestMessage));
  };

  return (
    <Button color="primary" onClick={testAlert}>
      <FormattedMessage {...messageDescriptors.testAlertButton}/>
    </Button>
  );
});

export default AlertTest;
