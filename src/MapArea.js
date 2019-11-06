import React from 'react';
import { observer } from 'mobx-react';
import { useIntl, FormattedMessage } from 'react-intl';

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

const position = [mapState.lat, mapState.lng];

const MapArea = observer((props) => {
  const { formatMessage } = useIntl();
  const zoomInTitle = formatMessage({id: 'zoomInTitle'});
  const zoomOutTitle = formatMessage({id: 'zoomOutTitle'});

  // TODO Is using a ref here really a good idea?
  const mapRef = React.createRef();

  function addMarker(event) {
    props.messageLogStore.addLogMessage('markerAddedMessage', {
      position: event.latlng.toString()
    })
    let marker = leaflet.marker(event.latlng)
    marker.bindPopup(event.latlng.toString())
    marker.addTo(mapRef.current.leafletElement)
  }

  return (
    <div>
      <h2><FormattedMessage id='mapTitle'/></h2>
      <Map center={position} zoom={mapState.zoom} zoomControl={false}
        onClick={addMarker} ref={mapRef}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        {/* Using key forces remounting of ZoomControl when zoomInTitle or zoomOutTitle change. */}
        <ZoomControl zoomInTitle={zoomInTitle} zoomOutTitle={zoomOutTitle} key={zoomInTitle + '|' + zoomOutTitle}/>
      </Map>
    </div>
  );
});

export default MapArea;
