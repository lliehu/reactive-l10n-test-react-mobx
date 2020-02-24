import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { useIntl, FormattedMessage } from 'react-intl';

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
  const zoomInTitle = formatMessage({id: 'zoomInTitle'});
  const zoomOutTitle = formatMessage({id: 'zoomOutTitle'});

  const [dialogOpen, setDialogOpen] = useState(false);
  const toggle = () => setDialogOpen(!dialogOpen);

  function addMarker(event) {
    props.messageLogStore.addLogMessage('markerAddedMessage', {
      position: event.latlng.toString()
    })
    props.store.addMarker(event.latlng)
  }

  return (
    <div>
      <h2><FormattedMessage id='mapTitle'/></h2>
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
                    {comment.time.toString()}
                  </span>
                  <br/>
                  {comment.text}
                </p>
              ))}
              <Button variant="contained" color="primary" onClick={toggle}><FormattedMessage id='addNewCommentButton'/></Button>
            </Popup>
          </Marker>
        )) }
        {/* Using key forces remounting of ZoomControl when zoomInTitle or zoomOutTitle change. */}
        <ZoomControl zoomInTitle={zoomInTitle} zoomOutTitle={zoomOutTitle} key={zoomInTitle + '|' + zoomOutTitle}/>
      </Map>
      <Dialog open={dialogOpen} onClose={toggle}>
        <DialogTitle>
          <FormattedMessage id='addNewCommentTitle'/>
        </DialogTitle>
        <DialogContent>
          <TextField multiline/>
        </DialogContent>
        <DialogActions>
          <Button onClick={toggle} color="primary">
            <FormattedMessage id='addNewCommentButton'/>
          </Button>
          <Button onClick={toggle} color="secondary">
            <FormattedMessage id='cancelButton'/>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
});

export default MapArea;
