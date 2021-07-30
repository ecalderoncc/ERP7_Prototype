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
    maxHeight: 450,
    overflow: 'auto',
  },
}));

const CardMenuData = () => {
  const classes = useStyles();
  const urlDatalayers = `https://app.cdmps.org.au/services/data/management/datalayer/saved`;

  //LOCAL
  //const [selectedIndex, setSelectedIndex] = useState();
  const [loading, setLoading] = useState(true);
  const [dataLayers, setdataLayers] = useState([]);
  const [buttonState, setbuttonState] = useState(true);

  //REDUX
  const fetchData = useSelector((state) => state.fetchHandlerReducer.dataLayer);
  const dispatch = useDispatch();

  //User Token
  const userReducer = useSelector((state) => state.userReducer);
  const activeToken = userReducer.currentUser.token;

  const headers = {
    'Content-Type': 'application/json',
    Authorization: activeToken,
  };

  useEffect(() => {
    const loadDataLayers = async () => {
      const response = await fetch(urlDatalayers, { headers });
      const data = await response.json();
      setdataLayers(data.data);
      //console.log(data.data);
      setLoading(false);
    };
    loadDataLayers();
  }, []);

  // const handleListItemClick = (event, index) => {
  //   setSelectedIndex(index);
  // };

  const sendDatalayer = (dataLayer) => {
    dispatch(fetchActions.setDataLayer(dataLayer));
    console.log('Data Card sent');
    //console.log(dataLayer.dl_title);
    setbuttonState(false);
  };

  const clearLayer = () => {
    dispatch(fetchActions.clearDatalayer());
    setbuttonState(true);
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
            <List
              component="nav"
              aria-label="datalist"
              className={classes.root}
            >
              {loading ? (
                <ListItem button disabled={true}>
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
                    onClick={() => sendDatalayer(option)}
                  >
                    <ListItemText primary={option.sdl_displayname} />
                  </ListItem>
                ))
              )}
            </List>
          </Grid>
          <Grid item xs={12}>
            <Box height={30}></Box>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              disabled={buttonState}
              onClick={clearLayer}
            >
              Clear
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CardMenuData;
