import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  CardContent,
  Card,
  Grid,
  TextField,
  MenuItem,
  Typography,
  Box,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  subLevel1Data,
  subLevel2Data,
} from '../../lib/Leaflet/AreaLib/sublevelsArea';

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
}));

const CardMenuArea = () => {
  const classes = useStyles();
  const urlLGA = `https://app.cdmps.org.au/services/caseareas/asgsboundaries?config={"typename":"ABS:lga_2016_aust","propertynames":"lga_code16,lga_name16,ste_code16,ste_name16","cql_filter":"ste_name16='Victoria'"}`;

  //LOCAL
  const [sub1values, setsub1values] = useState([]);
  const [sub2values, setsub2values] = useState([]);
  const [loading, setLoading] = useState(true);
  const [butonState, setbutonState] = useState(true);

  //REDUX
  const [lgaData, setlgaData] = useState([]);
  const [isShowingSubMenu, setisShowingSubMenu] = useState(false);
  const [selectedLGA, setselectedLGA] = useState({});

  //const fetchLGA = useSelector((state) => state.fetchHandlerReducer.lga);
  const dispatch = useDispatch();

  //User Token
  const userReducer = useSelector((state) => state.userReducer);
  const activeToken = userReducer.currentUser.token;
  //console.log(activeToken);

  const headers = {
    'Content-Type': 'application/json',
    Authorization: activeToken,
  };

  //**** FUNCTIONS ****

  const loadLGA = async () => {
    const response = await fetch(urlLGA, { headers });
    const data = await response.json();
    const LGAitem = data.data;
    setlgaData(LGAitem.features);
    setLoading(false);
  };

  const showSubLevel2 = () => {
    // setisShowingSubMenu(!isShowingSubMenu);
    setisShowingSubMenu(true);
    loadLGA();
    dispatch(fetchActions.setLGAList(lgaData));
  };

  const sendLGAOption = (lgaOption) => {
    //setselectedLGA(null);
    setselectedLGA(lgaOption);
    //console.log(selectedLGA);
    setbutonState(false);
    //console.log(lgaData);
    //console.log(lgaOption.properties.lga_name16);
  };

  const select = () => {
    dispatch(fetchActions.setLGA(selectedLGA));
    //console.log(fetchLGA);
  };

  const handleChange = (event) => {
    // const { value, name } = event.target;
    // setValues({ ...values, [name]: value });
    setsub1values(event.target.value);
  };

  const handleChange2 = (event) => {
    // const { value, name } = event.target;
    // setValues({ ...values, [name]: value });
    setsub2values(event.target.value);
  };

  return (
    <Card className={classes.floatingObject}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6" color="initial">
              <Box fontWeight="fontWeightBold">
                Define study area in Victoria
              </Box>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="tf_sublevel1"
              fullWidth
              select
              label="Select sub-level"
              value={sub1values}
              onChange={handleChange}
              variant="outlined"
            >
              {/* Pregunta para jeanpi */}
              <MenuItem key="subLv1" value="subLv1" disabled={true}>
                Commonwealth Electoral Divisions
              </MenuItem>
              <MenuItem key="subLv2" value="subLv2" disabled={true}>
                Greater Capital City Statistical Areas
              </MenuItem>
              <MenuItem
                key="subLv3"
                value="subLv3"
                disabled={false}
                onClick={showSubLevel2}
              >
                Local Government Areas
              </MenuItem>
              <MenuItem key="subLv4" value="subLv4" disabled={true}>
                Statistical Divisions
              </MenuItem>
              {/* {subLevel1Data.map((option) => (
                <MenuItem
                  key={option.value}
                  value={option.value}
                  onClick={showSubLevel2}
                >
                  {option.label}
                </MenuItem>
              ))} */}
            </TextField>
          </Grid>
          {isShowingSubMenu && !loading && (
            <Grid item xs={12}>
              <TextField
                id="tf_sublevel2"
                fullWidth
                select
                label="Select sub-level"
                value={sub2values}
                onChange={handleChange2}
                variant="outlined"
              >
                {lgaData.map((option) => (
                  <MenuItem
                    key={option.properties.lga_code16}
                    value={option.properties.lga_name16}
                    onClick={() => sendLGAOption(option)}
                  >
                    {option.properties.lga_name16}
                  </MenuItem>
                ))}
                {/* {subLevel2Data.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))} */}
              </TextField>
            </Grid>
          )}

          <Grid item xs={12}>
            <Box height={150}></Box>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              disabled={butonState}
              onClick={select}
            >
              Select
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CardMenuArea;
