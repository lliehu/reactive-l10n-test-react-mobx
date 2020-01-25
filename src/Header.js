import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Helmet } from "react-helmet";

const Header = (props) => {
  const intl = useIntl();

  return (
  <h1>
    <Helmet>
      <title>{intl.formatMessage({id: 'applicationName'})}</title>
    </Helmet>
    <FormattedMessage id='applicationName'/>
  </h1>
  );
};

export default Header;
