import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Helmet } from "react-helmet";
import Typography from '@material-ui/core/Typography';

const Header = (props) => {
  const intl = useIntl();

  return (
  <div style={{flexGrow: 1, textAlign: 'left'}}>
    <Helmet>
        <title>{intl.formatMessage({id: 'applicationName'})}</title>
    </Helmet>
    <Typography variant="h6">
      <FormattedMessage id='applicationName'/>
    </Typography>
  </div>
  );
};

export default Header;
