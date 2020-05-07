import React from 'react';
import { observer } from 'mobx-react';
import messageDescriptors from './messageDescriptors';

const CatCount = (props) => (
  <div>
    { formatMessage(messageDescriptors.catCount)}
  </div>
);

export default observer(CatCount);
