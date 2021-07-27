import React, { useEffect } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, WMSTileLayer } from 'react-leaflet';

const LeafletMap = () => {
  useEffect(() => {
    setMap();
  });

  const setMap = () => {
    const map = L.map('map').setView([-36.9848, 143.3906], 8);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // L.tileLayer
    //   .wms(
    //     'https://ds2.digitwin.com.au:8443/geoserver/ERP7/wms?service=WMS&version=1.1.0&request=GetMap&layers=ERP7%3Ariver_red_gum_bnd&bbox=140.9633123%2C-36.822251717%2C147.113586992%2C-33.981352008&width=768&height=354&srs=EPSG%3A4326&format=image%2Fpng',
    //     {
    //       layers: 'ERP7:river_red_gum_bnd',
    //       format: 'image/png',
    //       transparent: true,
    //       attribution: 'ERP7',
    //     }
    //   )
    //   .addTo(map);
  };

  const riverRedGum = () =>
    L.tileLayer.wms(
      'https://ds2.digitwin.com.au:8443/geoserver/ERP7/wms?service=WMS',
      {
        layers: 'ERP7:river_red_gum_bnd',
        format: 'image/png',
        attribution: 'ERP7',
      }
    );

  //   useEffect(() => {
  //     const map = L.map('map').setView([-36.9848, 143.3906], 8);

  //     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //       attribution:
  //         '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
  //     }).addTo(map);
  //   });

  return (
    <div>
      <div id="map" />
    </div>
  );
};

export default LeafletMap;
