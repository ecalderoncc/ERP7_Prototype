import { Icon, IconButton, Snackbar } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeAlert } from '../redux/alert/alert.actions';

const SnackBar = () => {
  const alert = useSelector((state) => state.alertReducer);
  const dispatch = useDispatch();

  const closeSnackBar = () => {
    //setResultSnackBar({ ...resultSnackBar, open: false })
    dispatch(closeAlert());
  };

  return (
    <>
      {/* <div>{alert.open}</div> */}
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        open={alert.open}
        autoHideDuration={5000}
        onClose={closeSnackBar}
        message={alert.msg}
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={closeSnackBar}
          >
            <Icon fontSize="small">close</Icon>
          </IconButton>
        }
      />
    </>
  );
};

export default SnackBar;
