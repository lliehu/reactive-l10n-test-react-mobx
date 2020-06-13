import React from 'react';
import { observer } from 'mobx-react';
import { useIntl } from 'react-intl';
import messageDescriptors from './messageDescriptors';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Slider from '@material-ui/core/Slider';
import { PRONOUN_MALE, PRONOUN_FEMALE, PRONOUN_NEUTRAL } from './CatCountStore';

const pronounMappings = [
  {
    code: PRONOUN_MALE,
    messageDescriptor: messageDescriptors.pronounSelectionMale
  },
  {
    code: PRONOUN_FEMALE,
    messageDescriptor: messageDescriptors.pronounSelectionFemale
  },
  {
    code: PRONOUN_NEUTRAL,
    messageDescriptor: messageDescriptors.pronounSelectionNeutral
  }
];

const CatCountControls = (props) => {
  const { formatMessage } = useIntl();

  const { count, pronoun } = props.catCountStore;

  return (
    <div style={{width: '200px', margin: 'auto'}}>
    <Slider value={count} onChange={(event, newValue) => props.catCountStore.setCount(newValue)} step={1} min={0} max={5}/>
    <ButtonGroup>
      {pronounMappings.map(pronounMapping => (
        <Button
          key={pronounMapping.code}
          onClick={props.catCountStore.setPronoun.bind(props.catCountStore, pronounMapping.code)}
          variant={pronoun === pronounMapping.code ? 'contained' : 'outlined'}
          color="primary"
        >
          <span>{ formatMessage(pronounMapping.messageDescriptor) }</span>
        </Button>
        ))}
    </ButtonGroup>
    
    </div>
  );
}

export default observer(CatCountControls);
