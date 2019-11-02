import React from 'react';
import './App.css';
import LanguageSwitcher from './LanguageSwitcher';
import { observer } from 'mobx-react';
import {IntlProvider} from 'react-intl';
import MessageLog from './MessageLog';
import Header from './Header';
import messages from './messages';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';


import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerRetinaIcon from 'leaflet/dist/images/marker-icon-2x.png'
import shadowIcon from 'leaflet/dist/images/marker-shadow.png'

leaflet.Icon.Default.imagePath = ' ' // Set image path to non-empty to prevent Leaflet from trying to auto-detect it and fail horribly.
leaflet.Icon.Default.prototype.options.iconUrl = markerIcon
leaflet.Icon.Default.prototype.options.iconRetinaUrl = markerRetinaIcon
leaflet.Icon.Default.prototype.options.shadowUrl = shadowIcon
leaflet.Icon.Default.prototype.options.shadowRetinaUrl = shadowIcon



const mapState = {
  lat: 51.505,
  lng: -0.09,
  zoom: 13,
}

const position = [mapState.lat, mapState.lng];

const App = observer((props) => (
  <IntlProvider locale={props.store.language} messages={messages[props.store.language]}>
    <div className="App">
      <Header />
      <LanguageSwitcher store={ props.store }/>
      <MessageLog />
      <Map center={position} zoom={mapState.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    </div>
  </IntlProvider>
));

export default App;
