import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Divider from '@mui/material/Divider';
import { Typography } from '@mui/material';
import { Toolbar } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  text: {
    fontStyle: 'italic',
  },
  container:{
    display: 'flex',
    justifyContent: 'space-between'
  },
  divider: {
    width: '80vw'
  }
  
}));

const Footer = () =>  {

  const classes = useStyles();

  return (
    <Box  >
      
      <Divider className={classes.divider}/>

      <AppBar position="static" color="inherit" >
      <Toolbar className={classes.container}>
      <Typography variant="h6" color="primary" className={classes.text}>
      © 2021 ReformApp
      </Typography>
          <IconButton edge="end" color="primary" aria-label="menu">
            <LinkedInIcon className={classes.icons} />
            <GitHubIcon className={classes.icons}/>
          </IconButton>
      </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Footer;

