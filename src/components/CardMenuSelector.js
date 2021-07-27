import React from 'react';

import CardMenuArea from './Area/CardMenuArea';
import CardMenuData from './Data/CardMenuData';

const CardMenuSelector = (props) => {
  const cardMenu = props.type;

  return (
    <div>
      {cardMenu === 'area' && <CardMenuArea />}
      {cardMenu === 'data' && <CardMenuData />}
    </div>
  );
};

export default CardMenuSelector;
