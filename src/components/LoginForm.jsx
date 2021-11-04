import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import { makeStyles } from '@mui/styles';
import { useMediaQuery } from '@mui/material';


const useStyles = makeStyles({

  login_form : {
    display: 'flex',
    flexDirection: 'column',
    height: '500px',
    minWidth: '300px',
    width: '20vw',
    borderRadius: '10px',
    shadow: '0px 0px 10px black',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    
  },
  login_form_mobile : {
    display: 'flex',
    flexDirection: 'column',
    height: '50vh',
    width: '80vw',
    borderRadius: '10px',
    shadow: '0px 0px 10px black',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  container:{
    height: '80vh',
  }
})

const LoginForm = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const mobileSize = useMediaQuery('(max-width: 600px)');

  const  handleClick = () =>  {
    setLoading(true);
    alert('Login')
    setLoading(false);
  }

  return (
    <div>  
      <Box sx={{border: '1px black solid'}} className={mobileSize? classes.login_form_mobile : classes.login_form}>
        <Typography variant="h4">Login</Typography>
        <TextField id="outlined-basic"label="Email"variant="outlined"/>
        <TextField id="outlined-basic"label="Password"variant="outlined"/>
        <LoadingButton
          onClick={handleClick}
          endIcon={<SendIcon />}
          loading={loading}
          loadingPosition="end"
          variant="contained"
          >
          Login  
        </LoadingButton>           
      </Box>
    </div>
  )  
}

export default LoginForm;
