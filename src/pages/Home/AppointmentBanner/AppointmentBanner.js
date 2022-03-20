import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import { Button, Typography } from '@mui/material';

const appointmentBg = {
    background: `url(${bg})`,
    backgroundColor:'rgba(48, 44, 43 ,0.8)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 175,
  
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
                    <img
                        style={{width:400,marginTop:'-115px'}}
                        src={doctor} alt="" />
          </Grid>
          <Grid item xs={12} md={6}  sx={{ display: 'flex', justifyContent: 'flex-start',textAlign:'left',alignItems: 'center' }}>
                 <Box>
                    <Typography variant='h6' sx={{mb:5}} style={{color:'#3DE5E8'}}>
                        Appointment 
                  </Typography>
                    <Typography variant='h4' style={{color:'white'}}>
                       Make an APPointment Today
                  </Typography>
                    <Typography variant='h6' sx={{my:5}} style={{color:'white',fontSize:14,fontWeight:300}}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore tempora sunt eum enim iure sapiente rem quas optio ratione impedit?
                        
                    </Typography>
                  <Button  variant="contained">Learn More</Button>
               </Box>
          </Grid>
        </Grid>
      </Box>
    );
};

export default AppointmentBanner;