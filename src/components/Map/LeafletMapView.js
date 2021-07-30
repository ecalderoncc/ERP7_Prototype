import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  LayerGroup,
  MapContainer,
  TileLayer,
  Rectangle,
  WMSTileLayer,
  GeoJSON,
} from 'react-leaflet';
import L from 'leaflet';
import VectorTileLayer from 'react-leaflet-vector-tile-layer';
import ChangeView from './ChangeView';
import ChangeDataLayer from './ChangeDataLayer';

const LeafletMapView = () => {
  // //REDUX
  const fetchDataLayer = useSelector((state) => state.fetchHandlerReducer);
  const userReducer = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  // //LOCAL
  const [dataLayer, setdataLayer] = useState({});
  const [layerName, setlayerName] = useState(null);
  // const [showLga, setshowLga] = useState(LGAactive);
  // const [mapState, setmapState] = useState({
  //   currentLocation: [],
  //   zoom: 0,
  // });

  const getDataLayerProps = () => {
    if (fetchDataLayer.dataLayer != null) {
      console.log('Setting data layer name');
      //console.log(fetchDataLayer.dataLayer.dl_title);
      //setdataLayer(fetchDataLayer.dataLayer);
      const name = fetchDataLayer.dataLayer.dl_typename;
      console.log(name);
      setlayerName(name);
    } else {
      console.log('NO data layer name');
      setlayerName(null);
    }
  };

  //**** FUNCTIONS ****
  useEffect(() => {
    getDataLayerProps();
  }, [fetchDataLayer]);

  // const setMapLocation = (newCenter, newZoom) => {
  //   setmapState({
  //     currentLocation: newCenter,
  //     zoom: newZoom,
  //   });
  //   //console.log(mapState);
  // };
  // const bounds = [
  //   [142.35348021],
  //   [-37.83658331],
  //   [143.29129187],
  //   [-37.14191142],
  // ];
  // const box = [142.35348021, -37.83658331, 143.29129187, -37.14191142];
  // const bounds = [
  //   [box[1], box[0]],
  //   [box[3], box[2]],
  // ];
  // const blackOptions = { color: 'black' };
  return (
    <div>
      <MapContainer center={[-36.9848, 143.3906]} zoom={8}>
        <ChangeView />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* <Rectangle bounds={bounds} pathOptions={blackOptions} /> */}
        <LayerGroup>
          {layerName && (
            <WMSTileLayer
              layers={layerName}
              url="https://ds2.digitwin.com.au:8443/geoserver/ERP7/wms?service=WMS"
              format="image/png"
              transparent={true}
            />
          )}

          {/* <WMSTileLayer
            layers={activeLayer}
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
