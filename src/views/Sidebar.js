import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Divider, Drawer, Icon, Typography } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import userActions from '../redux/user/user.actions';
import logo_alt from '../assets/img/logo_erp7_contrast.png';
import { toggleMenu } from '../redux/sideMenu/sideMenu.actions';

import CardMenuArea from '../components/Area/CardMenuArea';
import CardMenuData from '../components/Data/CardMenuData';

const drawerWidth = 90;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  menuText: {
    color: 'white',
  },
  whiteBackground: {
    backgroundColor: 'white',
  },
  menuItem: {
    textAlign: 'center',
    width: '100%',
    marginTop: theme.spacing(3),
    cursor: 'pointer',
  },
}));

const Sidebar = () => {
  const classes = useStyles();
  //const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const dispatch = useDispatch();
  const isShowCardMenu = useSelector(
    (state) => state.sideMenuReducer.showCardMenu
  );

  const typeCardMenu = useSelector(
    (state) => state.sideMenuReducer.typeCardMenu
  );

  // const [cardMenuType, setcardMenuType] = useState('');
  // const [isShowing, setisShowing] = useState(false);

  const showAreaCardMenu = () => {
    // setcardMenuType('area');
    // setisShowing(!isShowing);
    dispatch(toggleMenu('Area_Menu'));
  };

  const showDataCardMenu = () => {
    // setcardMenuType('data');
    // setisShowing(!isShowing);
    dispatch(toggleMenu('Data_Menu'));
  };

  const onClickLogoutMenu = () => {
    dispatch(userActions.logout());
  };

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <Box height="100%" style={{ backgroundColor: '#035A8D' }}>
        <Box p={2} align="center" width="100%">
          <img src={logo_alt} alt="logo alt" width="40px" />
        </Box>
        <Box align="center" width="100%" mb={2}>
          <Divider className={classes.whiteBackground} />
        </Box>
        {/* {Routes.map((route, key) => ( */}

        {/* ))} */}

        <Box className={classes.menuItem} pt={1} onClick={showAreaCardMenu}>
          <Box>
            <Icon className={classes.menuText}>public</Icon>
          </Box>
          <Box>
            <Typography variant="body1" className={classes.menuText}>
              Area
            </Typography>
          </Box>
        </Box>

        <Box className={classes.menuItem} pt={1} onClick={showDataCardMenu}>
          <Box>
            <Icon className={classes.menuText}>grid_on</Icon>
          </Box>
          <Box>
            <Typography variant="body1" className={classes.menuText}>
              Data
            </Typography>
          </Box>
        </Box>

        <Box className={classes.menuItem} pt={1}>
          <Box>
            <Icon className={classes.menuText}>visibility</Icon>
          </Box>
          <Box>
            <Typography variant="body1" className={classes.menuText}>
              Visualise
            </Typography>
          </Box>
        </Box>

        <Box className={classes.menuItem} pt={1}>
          <Box>
            <Icon className={classes.menuText}>timeline</Icon>
          </Box>
          <Box>
            <Typography variant="body1" className={classes.menuText}>
              Analysis
            </Typography>
          </Box>
        </Box>

        <Box className={classes.menuItem} pt={10} onClick={onClickLogoutMenu}>
          <Box>
            <Icon className={classes.menuText}>logout</Icon>
          </Box>
          <Box>
            <Typography variant="body1" className={classes.menuText}>
              Logout
            </Typography>
          </Box>
        </Box>
      </Box>
      <div>
        {/* {isShowing ? (
          <CardMenuSelector type={cardMenuType} />
        ) : (
          <CardMenuSelector type={''} />
        )} */}
        {isShowCardMenu && typeCardMenu === 'Area_Menu' && <CardMenuArea />}
        {isShowCardMenu && typeCardMenu === 'Data_Menu' && <CardMenuData />}
      </div>
    </Drawer>
  );
};

export default Sidebar;
