import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00',
        space: 10
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '09.00 AM - 10.00',
        space: 8
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '10.00 AM - 11.00',
        space: 8
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '08.00 AM - 09.00',
        space: 5
    },
    {
        id: 5,
        name: 'Pediatric Dental',
        time: '06.00 AM - 07.00',
        space: 10
    },
    {
        id: 6,
        name: 'Oral Surgery',
        time: '07.00 AM - 08.00',
        space: 10
    }
]

const AvailableAppointments = ({ date }) => {
    const [bookingSuccess,setBookingSuccess]=useState(false)
    return (
        <Container>
            <Typography variant="h4" sx={{ color: 'info.main',mb:3 }} variant="h5" gutterBottom component="div">
            Available Appointments{date.toDateString()}
            </Typography>
            {bookingSuccess && <Alert severity="success"> successfully— check it out!</Alert>}
              
        <Grid container  spacing={2}  >
        {
            bookings.map(booking => <Booking booking={booking} key={booking.id} date={date} setBookingSuccess={setBookingSuccess}></Booking>)   
   }
               </Grid> 
        </Container>
    );
};

export default AvailableAppointments;




// <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

    
// </Grid>  