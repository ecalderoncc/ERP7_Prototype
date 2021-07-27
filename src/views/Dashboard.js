import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ContentBefore from '../components/GeneralComponents/Utilities/ContentBefore';
import GeneralTitle from '../components/GeneralComponents/Utilities/GeneralTitle';
import CardPaper from '../components/GeneralComponents/Utilities/CardPaper';
import ContentContainer from '../components/GeneralComponents/Utilities/ContentContainer';
import { Grid } from '@material-ui/core';
import ActivityTable from '../components/GeneralComponents/Blocks/ActivityTable';
import ProgramHealth from '../components/GeneralComponents/Blocks/ProgramHealth';

const Dashboard = () => {
  const userReducer = useSelector((state) => state.userReducer);

  return (
    <>
      <ContentBefore height="190px" />
      <ContentContainer maxWidth="md">
        <Grid container spacing={2}>
          <Grid xs={12} item pb={3}>
            <GeneralTitle
              title={`Welcome ${
                userReducer.currentUser.firstName +
                ' ' +
                userReducer.currentUser.lastName
              }!`}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <ActivityTable />
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid container spacing={2}>
              <Grid xs={12} item>
                <ProgramHealth />
              </Grid>
              <Grid xs={12} item></Grid>
            </Grid>
          </Grid>
        </Grid>
      </ContentContainer>
    </>
  );
};

export default Dashboard;
