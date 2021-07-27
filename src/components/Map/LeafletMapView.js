import React, { useState } from 'react';
import {
  LayerGroup,
  MapContainer,
  TileLayer,
  WMSTileLayer,
} from 'react-leaflet';
import VectorTileLayer from 'react-leaflet-vector-tile-layer';

const LeafletMapView = (props) => {
  const mapUpdate = props;

  const [mapState, setmapState] = useState({
    currentLocation: {
      lat: -36.9848,
      lng: 143.3906,
    },
    zoom: 8,
    setInitial: true,
  });

  const setMapInitialState = () => {
    setmapState({
      currentLocation: { lat: mapUpdate.lat, lng: mapUpdate.lng },
      zoom: mapUpdate.zoom,
    });
  };

  return (
    <div>
      <MapContainer center={mapState.currentLocation} zoom={mapState.zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <LayerGroup>
          {/* <WMSTileLayer
            layers="ERP7:river_red_gum_bnd"
            url="https://ds2.digitwin.com.au:8443/geoserver/ERP7/wms?service=WMS"
            format="image/png"
            transparent={true}
          /> */}
          {/* <WMSTileLayer
            layers="ERP7:log_season"
            url="https://ds2.digitwin.com.au:8443/geoserver/ERP7/wms?service=WMS"
            format="image/png"
            transparent={true}
          /> */}
        </LayerGroup>
      </MapContainer>
    </div>
  );
};

export default LeafletMapView;