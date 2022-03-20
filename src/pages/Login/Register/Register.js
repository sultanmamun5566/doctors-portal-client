import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png'


const Register = () => {
    const [loginData, setLoginData] = useState({})
    const { user,registerUser,isLoading,authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
      
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('did not match password')
            return
        }
        registerUser(loginData.email, loginData.password,loginData.name);
        e.preventDefault();
    }
    return (
        <Container>
        <Grid container spacing={2}>
            <Grid sx={{mt:8}} item xs={12} md={6}>          
                    <Typography variant="body1" gutterBottom>Register</Typography>
                    
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        
                    <TextField 
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Name"
                            type="name"
                            name='name'
                            onBlur={handleOnBlur}
                           variant="standard" />
                       
                    <TextField 
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            type="email"
                            name='email'
                            onBlur={handleOnBlur}
                           variant="standard" />
                       
             
                    <TextField   
                        sx={{ width: '75%' ,m: 1}}    
                        id="standard-basic"
                        label="Your Password"
                        type="password"
                        name='password'
                        onBlur={handleOnBlur}
                        variant="standard" />
                   
                    <TextField   
                        sx={{ width: '75%' ,m: 1}}    
                        id="standard-basic"
                        label="Re-Type Your Password"
                        type="password"
                        name='password2'
                        onBlur={handleOnBlur}
                        variant="standard" />
                   
                <Button type='submit' sx={{ width: '75%' ,m: 1}} variant="contained">Register</Button>
                <NavLink style={{textDecoration:'none'}} to="/login">
                    <Button variant="text">Already Register ? Please Login</Button>
                    </NavLink>
                    </form>}
                    {isLoading && <CircularProgress />}
                    {user.email && <Alert severity="success">User Created  successfully— check it out!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}

            </Grid>           
            <Grid item xs={12} md={6}>
                <img style={{width:'100%'}} src={login} alt="" />
            </Grid>
        </Grid>
        
  </Container>
    );
};

export default Register;