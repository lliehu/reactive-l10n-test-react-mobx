import React from 'react';
import { observer } from 'mobx-react';
import { useIntl } from './phraseHookIntegration';
import messageDescriptors from './messageDescriptors';

const CatCount = (props) => {
  const { formatMessage } = useIntl();

  const { count, pronoun } = props.catCountStore;

  return (
    <div>
      { formatMessage(messageDescriptors.catCountMessage, {count: count, pronoun: pronoun})}
    </div>
  );
}

export default observer(CatCount);
