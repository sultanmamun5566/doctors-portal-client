import React from 'react';
import Navigation from '../../Shered/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Connect from '../Connect/Connect';
import Exceptional from '../Exceptional/Exceptional';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <Exceptional></Exceptional>
            <AppointmentBanner></AppointmentBanner>
            <Connect></Connect>
        </div>
    );
};

export default Home;