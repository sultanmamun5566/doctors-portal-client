import React from 'react';
import Box from '@mui/material/Box';
import { Button, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import bg from '../../../images/appointment-bg.png'


const bgConnect = {
     background: `url(${bg})`,
     marginTop:175,
    marginBottom: 100,
    padding: 50,
    backgroundColor:'#345354' ,
    backgroundBlendMode: 'multiply'
 }

const Connect = () => {
    return (
        <>
            <Box style={bgConnect} sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item md={12} xs={12} >
                    <Typography variant="h6" gutterBottom component="div">
                         Connect Us
                        </Typography>
                    <Typography variant="h4" gutterBottom component="div">
                         Always Connect With Us
                        </Typography>
                        <form >
                        <input type="email" style={{width:'400px',height:'45px',margin:'10px'}} placeholder="email address" /> <br />
                        <input type="text" style={{width:'400px',height:'45px',margin:"10px"}} placeholder="subject" /> <br />
                        <input type="area" style={{ width: '400px', height: '120px', margin: '10px' }} placeholder="massage" /> <br />
                        <Button type='submit' variant="contained">Submit</Button>
                       </form>
                        
                        
                        
                    </Grid>
                </Grid>
                
         </Box>

        </>

    );
};

export default Connect;