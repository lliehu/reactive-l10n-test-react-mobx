import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import messageDescriptors from './messageDescriptors';

const locations = [
  {
    name: 'Hervanta',
    coordinates: [61.45, 23.85]
  },
  {
    name: 'Kaleva',
    coordinates: [61.498642, 23.800743]
  }
];

const MapNavigator = (props) => {
  const [selectedCoordinates, setSelectedCoordinates] = useState(null);
  const { formatMessage } = useIntl();

  return (
    <div>
      <h2>
        { formatMessage(messageDescriptors.mapNavigatorTitle) }
      </h2>
      <div style={{width: '200px', margin: 'auto'}}>
        <Autocomplete
          options={locations}
          getOptionLabel={option => option.name}
          renderInput={params => (<TextField {...params} fullWidth/>)}
          onChange={(event, value) => {
            setSelectedCoordinates((value && value.coordinates) || null)
          }}
        />
      </div>
      <Button color="primary" onClick={() => {
        props.store.setCenter(selectedCoordinates);
      }
      }>
        { formatMessage(messageDescriptors.navigateMapButton) }
      </Button>
    </div>
  );
};

export default MapNavigator;
