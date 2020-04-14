import React from 'react';
import { useIntl } from 'react-intl';
import { Helmet } from "react-helmet";
import Typography from '@material-ui/core/Typography';
import { useStore } from './UIMessageStoreProvider';
import { trace } from 'mobx';
import { observer } from 'mobx-react';

const Header = observer((props) => {
  const { formatMessage } = useIntl();
  const { messageDescriptors } = useStore();

  trace();

  return (
  <div style={{flexGrow: 1, textAlign: 'left'}}>
    <Helmet>
        <title>{formatMessage(messageDescriptors.applicationName)}</title>
    </Helmet>
    <Typography variant="h6">
      { formatMessage(messageDescriptors.applicationName) }
    </Typography>
  </div>
  );
});

export default Header;
