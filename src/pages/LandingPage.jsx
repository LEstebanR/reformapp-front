import { Grid } from "@mui/material";
import { Player} from '@lottiefiles/react-lottie-player';
import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  text: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',  
    alignItems: 'center',
    fontStyle: 'italic',
    padding: '7%',
    height: '87vh',
    
  },
  animation: {
    display: 'flex',  
    justifyContent: 'center',  
    alignItems: 'center',
    width: '60%',
    height: '60%',
  },
  paragraph: {
    fontStyle: 'italic',
    fontSize: '2.5rem',
  },
  strong: {
    fontWeight: 'bold',
    color: '#f50057',
    fontSize: '2.5rem'
  },
  container:{
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    justifyItems: 'center',
    textAlign: 'center',
    backgroundImage : 'url(https://images.unsplash.com/photo-1532210317995-cc56d90177d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80)',
    
  } 
});


const LandingPage = () => {
  const classes = useStyles();

  return(
  <>
    <Grid container spacing={3} className={classes.container}>
      <Grid item xm={12} sm={6} className={classes.text}>
        <h3 className={classes.paragraph}>Encuentra personas dispuestas a ayudarte con los 
        <strong className={classes.strong}> trabajos de tu hogar.</strong>
        <br></br>
        <br></br>
        Encuentra personas que necesitan tus 
        <strong className={classes.strong}> servicios de construcción.</strong></h3>
      </Grid>
      <Grid item xm={12} sm={6} className={classes.animation}>
        <Player autoplay loop
          src="https://assets8.lottiefiles.com/packages/lf20_byuzwmds.json"
          >
        </Player>      
        </Grid>

    </Grid>
  </>
  )
}

export default LandingPage;