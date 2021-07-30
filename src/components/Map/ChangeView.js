import React from 'react';
import { useMap } from 'react-leaflet';
import { useDispatch, useSelector } from 'react-redux';
import fetchActions from '../../redux/API/fetchHandler.actions';

const ChangeView = () => {
  const fetchLGA = useSelector((state) => state.fetchHandlerReducer.lga);
  const map = useMap();
  //console.log(fetchLGA);
  if (fetchLGA != null) {
    const tempArray = fetchLGA.properties.bbox;
    const lgaLat = tempArray[1];
    const lgaLng = tempArray[0];
    const newCenter = [lgaLat, lgaLng];
    //console.log(newCenter);
    map.flyTo(newCenter, 9);
  }
  return null;
};
//-38.078707, 147.18903401
// 0: 147.18903401
// 1: -38.078707
// 2: 149.976291
// 3: -36.61242765
export default ChangeView;
