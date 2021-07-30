import React, { useState } from 'react';
import { useMap } from 'react-leaflet';
import { useDispatch, useSelector } from 'react-redux';
import fetchActions from '../../redux/API/fetchHandler.actions';
import { WMSTileLayer } from 'react-leaflet';

const ChangeDataLayer = () => {
  const fetchDataLayer = useSelector(
    (state) => state.fetchHandlerReducer.dataLayer
  );
  //const map = useMap();
  console.log(fetchDataLayer);
  const [layerName, setlayerName] = useState('');

  if (fetchDataLayer != null) {
    const name = fetchDataLayer.dl_typename;
    setlayerName(name);
  }
  return (
    <WMSTileLayer
      layers={layerName}
      url="https://ds2.digitwin.com.au:8443/geoserver/ERP7/wms?service=WMS"
      format="image/png"
      transparent={true}
    />
  );
};

export default ChangeDataLayer;
