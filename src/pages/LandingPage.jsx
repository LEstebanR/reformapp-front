import { Grid } from "@mui/material";
import { Player} from '@lottiefiles/react-lottie-player';
import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  text: {
    display: 'flex',
    justifyContent: 'center',  
    alignItems: 'center',
    fontStyle: 'italic',
    padding: '7%',
    
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
  } 
});


const LandingPage = () => {
  const classes = useStyles();

  return(
  <>
    <Grid container spacing={3} className={classes.container}>
      <Grid xm={12} sm={6} className={classes.text}>
        <h3 className={classes.paragraph}>Encuentra personas dispuestas a ayudarte con los 
        <strong className={classes.strong}> trabajos de tu hogar.</strong></h3>
      </Grid>
      <Grid xm={12} sm={6} className={classes.animation}>
        <Player autoplay loop
          src="https://assets4.lottiefiles.com/private_files/lf30_p5tali1o.json"
          >
        </Player>      
        </Grid>
      <Grid xm={12} sm={6} className={classes.animation}>
        <Player autoplay loop
          src="https://assets4.lottiefiles.com/packages/lf20_HX0isy.json"
          >
        </Player>      </Grid>
      <Grid xm={12} sm={6} className={classes.text}>
      <h3 className={classes.paragraph}>Encuentra personas que necesitan tus 
      <strong className={classes.strong}> servicios de construcción.</strong></h3>
      </Grid>
    </Grid>
  </>
  )
}

export default LandingPage;