import React, { useState } from 'react';

import {
  CardContent,
  Card,
  Grid,
  TextField,
  MenuItem,
  Typography,
  Box,
  Button,
  ButtonGroup,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import MainContent from '../../views/MainContent';

const drawerWidth = 90;

const useStyles = makeStyles((theme) => ({
  floatingObject: {
    position: 'fixed',
    top: theme.spacing(3),
    left: theme.spacing(3) + drawerWidth,
    zIndex: 2,
    width: '450px',
  },
}));

const dataSet = [
  {
    value: 'ds1',
    label: 'EVC (environmental Vegetation Class)',
    url: 'https://ds2.digitwin.com.au:8443/geoserver/ERP7/wms?service=WMS',
  },
  {
    value: 'ds2',
    label: 'https://ds2.digitwin.com.au:8443/geoserver/ERP7/wms?service=WMS',
    disable: true,
  },
  {
    value: 'ds3',
    label: 'https://ds2.digitwin.com.au:8443/geoserver/ERP7/wms?service=WMS',
    disable: true,
  },
  {
    value: 'ds4',
    label: 'Local Government Areas',
    disable: false,
  },
  {
    value: 'ds5',
    label: 'Statistical Divisions',
    disable: true,
  },
];

const CardMenuData = () => {
  const classes = useStyles();

  const [checked, setChecked] = useState([0]);

  const [selectedIndex, setSelectedIndex] = useState();

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  return (
    <Card className={classes.floatingObject}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6" color="initial">
              <Box fontWeight="fontWeightBold">Avaliable Datasets</Box>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            {/* <ButtonGroup
              fullWidth
              orientation="vertical"
              color="primary"
              aria-label="vertical outlined primary button group"
            >
              <Button>EVC (environmental Vegetation Class)</Button>
              <Button>
                Final VEAC boundary for the River Red Gum Forests Investigation
              </Button>
              <Button>Fire Severity</Button>
            </ButtonGroup> */}
            <List component="nav" aria-label="secondary mailbox folder">
              <ListItem
                button
                selected={selectedIndex === 2}
                onClick={(event) => handleListItemClick(event, 2)}
              >
                <ListItemText primary="River Red gum" />
              </ListItem>
              <ListItem
                button
                selected={selectedIndex === 3}
                onClick={(event) => handleListItemClick(event, 3)}
              >
                <ListItemText primary="Fire severity" />
              </ListItem>
              <ListItem
                button
                selected={selectedIndex === 3}
                onClick={(event) => handleListItemClick(event, 3)}
              >
                <ListItemText primary="Logging history - Harvesting" />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12}>
            <Box height={250}></Box>
          </Grid>
          {/* <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={onClickSave}>
              Done
            </Button>
          </Grid> */}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CardMenuData;
