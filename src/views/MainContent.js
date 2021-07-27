import React from 'react';
import { Box } from '@material-ui/core';
import LeafletContainer from '../components/Map/LeafletContainer.js';

const MainContent = () => {
  return (
    <Box width="100%">
      <LeafletContainer />
    </Box>
  );
};

export default MainContent;
