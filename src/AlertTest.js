import React from 'react';
import { observer } from 'mobx-react';
import { useIntl } from './phraseHookIntegration';
import Button from '@material-ui/core/Button';
import { useStore } from './UIMessageStoreProvider';

const AlertTest = observer((props) => {
  const { formatMessage } = useIntl();
  const { messageDescriptors } = useStore();

  const testAlert = () => {
    alert(formatMessage(messageDescriptors.alertTestMessage));
  };

  return (
    <Button color="primary" onClick={testAlert}>
      { formatMessage(messageDescriptors.testAlertButton) }
    </Button>
  );
});

export default AlertTest;
