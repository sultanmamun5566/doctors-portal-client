import React from 'react';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Typography,Container, Box } from '@mui/material';
import { border, height } from '@mui/system';

const bannerBg = {
    background: `url(${bg})`,
   
}
const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height:450,
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item style={{...verticalCenter,textAlign:'left'}} xs={12} md={6}>
                    <Box>
                    <Typography variant='h3'>
                        Your New Smile <br />
                        Starts Here
                    </Typography>
                    <Typography variant='h6' sx={{my:3,fontSize:13,color:'gray',fontWeight:300}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quas accusamus consequuntur quam provident debitis pariatur iste quis unde nemo?

                    </Typography>
                    <Button   variant="contained">Get Appointment</Button>
                    </Box>
          </Grid>
          <Grid item xs={12} md={6} style={verticalCenter}>
           <img style={{width:'350px'}} src={chair} alt="" />
          </Grid>       
        </Grid>
      </Container>
    );
};

export default Banner;