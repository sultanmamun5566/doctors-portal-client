import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import img from '../../../images/treatment.png'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';



const Exceptional = () => {
    return (
       <Container> 
            <Grid container  spacing={2} style={{textAlign:'left'}}>

                <Grid item xs={6} ms={8}>
                <ImageList sx={{ width: 1000, height: 450 }} variant="woven" cols={3} gap={8}>
        <ImageListItem >
          <img
            src={img}
          />
        </ImageListItem>
                </ImageList>
           </Grid>
                
           <Grid item xs={6} md={4} style={{marginTop:'20px',textAlign:'left'}}>
           <Typography variant="h3" component="div" gutterBottom>
            Exceptional Dental Care
      </Typography>
      <Typography variant="body2" gutterBottom>
         Nur once ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>
      <Typography variant="body2" gutterBottom>
         Nur once ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>
         </Grid>
            </Grid>
            </Container>    
    );
};

export default Exceptional;