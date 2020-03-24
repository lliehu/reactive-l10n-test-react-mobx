import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Helmet } from "react-helmet";
import Typography from '@material-ui/core/Typography';
import messageDescriptors from './messageDescriptors';
import { trace } from 'mobx';
import { observer } from 'mobx-react';

const Header = observer((props) => {
  const intl = useIntl();

  trace();

  return (
  <div style={{flexGrow: 1, textAlign: 'left'}}>
    <Helmet>
        <title>{intl.formatMessage(messageDescriptors.applicationName)}</title>
    </Helmet>
    <Typography variant="h6">
      <FormattedMessage {...messageDescriptors.applicationName}/>
    </Typography>
  </div>
  );
});

export default Header;
