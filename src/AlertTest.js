import React from 'react';
import { observer } from 'mobx-react';
import { useIntl, FormattedMessage } from 'react-intl';
import Button from '@material-ui/core/Button';

const AlertTest = observer((props) => {
  const { formatMessage } = useIntl();

  const testAlert = () => {
    alert(formatMessage({id: 'alertTestMessage'}));
  };

  return (
    <Button color="primary" onClick={testAlert}>
      <FormattedMessage id='testAlertButton'/>
    </Button>
  );
});

export default AlertTest;
