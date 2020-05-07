import React from 'react';
import { observer } from 'mobx-react';
import { useIntl } from 'react-intl';
import messageDescriptors from './messageDescriptors';

const CatCount = (props) => {
  const { formatMessage } = useIntl();

  return (
    <div>
      { formatMessage(messageDescriptors.catCountMessage)}
    </div>
  );
}

export default observer(CatCount);
