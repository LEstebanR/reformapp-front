import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Player} from '@lottiefiles/react-lottie-player';
import { makeStyles } from '@mui/styles';
import LoginForm from '../components/LoginForm';
import { useMediaQuery } from '@mui/material';

const useStyles = makeStyles({
  animation_hello_container : {
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center',
  },
 
  animation_hello_mobile : {
    height: '15vh',
    display: 'flex',
    alignItems: 'flex-start'
  },
  form : {
    display: 'flex',
    alignItems: 'center',
    
  },
  form_mobile : {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '10px'
    
  },
  container:{
    height: '80vh',
  }
})


const Login = () => {
  const mobileSize = useMediaQuery('(max-width: 600px)');
  const biggerScreens = useMediaQuery('(min-width: 600px)');
  const classes = useStyles();



  return (
    <>
      <Box >
        <Grid container className={classes.container}>
            {mobileSize &&
            <Grid item xs={12} sm={6} className={classes.animation_hello_mobile}>
            <Player autoplay loop
              src="https://assets8.lottiefiles.com/packages/lf20_30jzypta.json"
              style={{ height: '60%', width: '60%' }}>
            </Player>
            </Grid>}
            {biggerScreens &&
            <Grid item xs={12} sm={6} className={classes.animation_hello_container}>
              <Player autoplay loop
              src="https://assets6.lottiefiles.com/packages/lf20_FYx0Ph.json"
              style={{ height: '700px', width: '700px' }}
              className={classes.animation_hello}>
            </Player>
            </Grid>
            }
          <Grid item xs={12} sm={6} className={mobileSize ? classes.form_mobile : classes.form}>
            <LoginForm />           
          </Grid>  
        </Grid>
      </Box>
    </>
  )
}

export default Login;