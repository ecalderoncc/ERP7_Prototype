import React, { useEffect } from 'react';
import L from 'leaflet';
import LeafletMap from './LeafletMap';
import LeafletMapView from './LeafletMapView';

const LeafletContainer = () => {
  return <LeafletMapView initialMapProps={true} />;
};

export default LeafletContainer;
