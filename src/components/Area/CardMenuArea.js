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

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const userReducer = useSelector((state) => state.userReducer);
  const activeToken = userReducer.currentUser.token;

  console.log(activeToken);

  const headers = {
    'Content-Type': 'application/json',
    Authorization: activeToken,
  };

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    const loadLGA = async () => {
      const response = await fetch(url, { headers });
      const data = await response.json();
      const [LGAitem] = data.data.features;
      setData(LGAitem);
      setLoading(false);
    };
    loadLGA();
  }, []);

  return { data, loading };
};

const CardMenuArea = () => {
  const classes = useStyles();

  const [count, setCount] = useState(0);
  const { data, loading } = useFetch(
    `https://app.cdmps.org.au/services/caseareas/asgsboundaries?config={"typename":"ABS:lga_2016_aust","propertynames":"lga_code16,lga_name16,ste_code16,ste_name16","cql_filter":"ste_name16='Victoria'"}`
  );

  console.log(data);
  console.log(loading);

  const [sub1values, setsub1values] = useState('');
  const [sub2values, setsub2values] = useState('');
  const [isShowingSubMenu, setisShowingSubMenu] = useState(false);

  const fetchData = useSelector(
    (state) => state.fetchHandlerReducer.currentData
  );
  const dispatch = useDispatch();

  const showSubLevel2 = () => {
    setisShowingSubMenu(!isShowingSubMenu);
  };

  const handleChange = (event) => {
    // const { value, name } = event.target;
    // setValues({ ...values, [name]: value });
    setsub1values(event.target.value);
  };

  // useEffect(() => {
  //   const loadLGAdata = () => {
  //     //care about parenthesis, try
  //     console.log('Is gonna load something');
  //     dispatch(fetchActions.fetchLGAList());
  //   };

  //   loadLGAdata();
  // }, []);

  // const loadLGAdata = () => {
  //   //care about parenthesis, try
  //   console.log('Is gonna load something');
  //   dispatch(fetchActions.fetchLGAList());
  // };

  const handleChange2 = (event) => {
    // const { value, name } = event.target;
    // setValues({ ...values, [name]: value });
    setsub2values(event.target.value);
  };

  // const onClickSave = () => {
  //   alert('Local Government Area selected');
  // };

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
              {subLevel1Data.map((option) => (
                <MenuItem
                  key={option.value}
                  value={option.value}
                  onClick={showSubLevel2}
                >
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          {isShowingSubMenu && (
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
                {subLevel2Data.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          )}

          <Grid item xs={12}>
            <Box height={250}></Box>
          </Grid>
          {/* <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={showCardMenu}>
              Done
            </Button>
          </Grid> */}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CardMenuArea;
