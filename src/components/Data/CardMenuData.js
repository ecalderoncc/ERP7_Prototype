import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FixedSizeList } from 'react-window';
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

import fetchActions from '../../redux/API/fetchHandler.actions';

const drawerWidth = 90;

const useStyles = makeStyles((theme) => ({
  floatingObject: {
    position: 'fixed',
    top: theme.spacing(3),
    left: theme.spacing(3) + drawerWidth,
    zIndex: 2,
    width: '450px',
  },
  root: {
    maxHeight: 350,
    overflow: 'auto',
  },
}));

const CardMenuData = () => {
  const classes = useStyles();

  const url = `https://app.cdmps.org.au/services/data/management/datalayer/saved`;

  const [selectedIndex, setSelectedIndex] = useState();
  const [loading, setLoading] = useState(true);
  const [dataLayers, setdataLayers] = useState([]);

  const userReducer = useSelector((state) => state.userReducer);
  const activeToken = userReducer.currentUser.token;

  const fetchData = useSelector(
    (state) => state.fetchHandlerReducer.dataLayerActive
  );
  const dispatch = useDispatch();

  const headers = {
    'Content-Type': 'application/json',
    Authorization: activeToken,
  };

  useEffect(() => {
    const loadDataLayers = async () => {
      const response = await fetch(url, { headers });
      const data = await response.json();
      setdataLayers(data.data);
      setLoading(false);
    };
    loadDataLayers();
  }, []);

  //console.log(dataLayers);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const showDataLayer = (dataLayer) => {
    //console.log(dataLayer.dl_typename);
    dispatch(fetchActions.dataLayerSelected(dataLayer));
    console.log(fetchData);
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
            <List
              component="nav"
              aria-label="datalist"
              className={classes.root}
            >
              {loading ? (
                <ListItem
                  button
                  disabled={true}
                  // selected={selectedIndex === 2}
                  // onClick={(event) => handleListItemClick(event, 2)}
                >
                  <ListItemText primary="Loading..." />
                </ListItem>
              ) : (
                dataLayers.map((option) => (
                  <ListItem
                    button
                    key={option.sdl_uuid}
                    //selected={selectedIndex}
                    // onClick={(event) =>
                    //   handleListItemClick(event, dataLayers.findIndex(option))
                    // }
                    onClick={() => showDataLayer(option)}
                  >
                    <ListItemText primary={option.dl_title} />
                  </ListItem>
                ))
              )}
            </List>
          </Grid>
          {/* <Grid item xs={12}>
            <Box height={250}></Box>
          </Grid> */}
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
