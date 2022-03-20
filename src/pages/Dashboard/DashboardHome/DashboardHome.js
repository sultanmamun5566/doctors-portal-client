import * as React from 'react';
import { Button, Grid } from '@mui/material';
import Calender from '../../Shered/Calender/Calender';
import Appointments from '../Appointments/Appointments';

const DashboardHome = () => {
    const [date,setDate]=React.useState(new Date())
    return (
        <Grid container spacing={2}>
        <Grid item xs={8}>     
          <Calender
            date={date}
            setDate={setDate}
          ></Calender>  
        </Grid>       
        <Grid item xs={4}>
          <Appointments></Appointments>
        </Grid>
      </Grid>
    );
};

export default DashboardHome;