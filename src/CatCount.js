import React from 'react';
import { observer } from 'mobx-react';
import { useIntl } from 'react-intl';
import messageDescriptors from './messageDescriptors';
import Slider from '@material-ui/core/Slider';

const CatCount = (props) => {
  const { formatMessage } = useIntl();

  const { count, pronoun } = props.catCountStore;

  return (
    <div>
      { formatMessage(messageDescriptors.catCountMessage, {count: count, pronoun: pronoun})}
        <div style={{width: '200px', margin: 'auto'}}>
        <Slider value={count} onChange={(event, newValue) => props.catCountStore.setCount(newValue)} step={1} min={0} max={5}/>
      </div>
    </div>
  );
}

export default observer(CatCount);
