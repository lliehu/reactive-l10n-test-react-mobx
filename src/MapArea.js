import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { useIntl, FormattedDate } from 'react-intl';
import messageDescriptors from './messageDescriptors';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { Map, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';


import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerRetinaIcon from 'leaflet/dist/images/marker-icon-2x.png'
import shadowIcon from 'leaflet/dist/images/marker-shadow.png'

leaflet.Icon.Default.imagePath = ' ' // Set image path to non-empty to prevent Leaflet from trying to auto-detect it and fail horribly.
leaflet.Icon.Default.prototype.options.iconUrl = markerIcon
leaflet.Icon.Default.prototype.options.iconRetinaUrl = markerRetinaIcon
leaflet.Icon.Default.prototype.options.shadowUrl = shadowIcon
leaflet.Icon.Default.prototype.options.shadowRetinaUrl = shadowIcon

const mapState = {
  lat: 61.45,
  lng: 23.85,
  zoom: 12,
}

const MapArea = observer((props) => {
  const { formatMessage } = useIntl();
  const zoomInTitle = formatMessage(messageDescriptors.zoomInTitle);
  const zoomOutTitle = formatMessage(messageDescriptors.zoomOutTitle);

  const [dialogOpen, setDialogOpen] = useState(false);
  const open = (marker) => {
    setSelectedMarker(marker);
    setDialogOpen(true);
  };
  const close = () => {
    setDialogOpen(false);
    setNewMarkerCommentText('');
  }

  function addMarker(event) {
    props.messageLogStore.addLogMessage(messageDescriptors.markerAddedMessage, {
      position: event.latlng.toString()
    })
    props.store.addMarker(event.latlng)
  }

  const [selectedMarker, setSelectedMarker] = useState(null);
  const [newMarkerCommentText, setNewMarkerCommentText] = useState('');

  return (
    <div>
      <h2>{ formatMessage(messageDescriptors.mapTitle) }</h2>
      <Map center={props.store.center} zoom={mapState.zoom} zoomControl={false}
        onClick={addMarker}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        { props.store.markerList.map((marker, index) => (
          <Marker key={index} position={marker}>
            <Popup>
              {(props.store.markerComments[marker] || []).map((comment) => (
                <p>
                  <span>
                    { formatMessage(messageDescriptors.commentPrefix, {
                        time: (
                          <FormattedDate
                            value={comment.time}
                            year="numeric" month="numeric" day="numeric"
                            hour="numeric" minute="numeric" second="numeric"
                          />
                        )
                      })
                    }
                  </span>
                  <br/>
                  {comment.text}
                </p>
              ))}
              <Button variant="contained" color="primary" onClick={open.bind(null, marker)}>
                { formatMessage(messageDescriptors.addNewCommentButton) }
              </Button>
            </Popup>
          </Marker>
        )) }
        {/* Using key forces remounting of ZoomControl when zoomInTitle or zoomOutTitle change. */}
        <ZoomControl zoomInTitle={zoomInTitle} zoomOutTitle={zoomOutTitle} key={zoomInTitle + '|' + zoomOutTitle}/>
      </Map>
      <Dialog open={dialogOpen} onClose={close}>
        <DialogTitle>
          { formatMessage(messageDescriptors.addNewCommentTitle) }
        </DialogTitle>
        <DialogContent>
          <TextField multiline value={newMarkerCommentText} onChange={(event) => setNewMarkerCommentText(event.target.value)}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {props.store.addCommentToMarker(selectedMarker, {time: new Date(), text: newMarkerCommentText}); close(); }} color="primary">
            { formatMessage(messageDescriptors.addNewCommentButton) }
          </Button>
          <Button onClick={close} color="secondary">
            { formatMessage(messageDescriptors.cancelButton) }
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
});

export default MapArea;
