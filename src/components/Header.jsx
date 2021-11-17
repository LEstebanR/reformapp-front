import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import { Avatar, useMediaQuery } from '@mui/material';
import HeaderMenu from './headerMenu';
import { useAuth0 } from '@auth0/auth0-react';
import history from '../utils/history'
import { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import { Typography } from '@mui/material';

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
  },
  button_header : {
    marginLeft: theme.spacing(3),
  
  },
  button_container : {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  separator: {
    flexGrow: 1,

  },
  header: {
    width: 'vw',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  logo:{
    height: '60px',
    margin: '3px'
  }
  
}));

const Header = (props) =>  {
  const biggerScreens = useMediaQuery('(min-width: 600px)');
  const classes = useStyles();
  const { loginWithRedirect, logout } = useAuth0();
  const { userDb } = useContext(DataContext);

  const login = () => {
    loginWithRedirect()
  };

  const home=()=>{
    history.push('/');
  }

  return (
    <div className={classes.header}>
      <AppBar position="fixed">
        <Toolbar>
          <img 
            src="https://res.cloudinary.com/lesteban/image/upload/v1637032304/Bajo_techo_kk63tl.png" 
            alt="logo"
            className={classes.logo}
            onClick={home}
            />
            <Typography variant="h3">ReformApp</Typography>
          {/* <Button  ton="true+" variant="text" color="inherit"  className={classes.button_header}> */}
            {/* <Link to="/" className={classes.link}>Inicio</Link> */}
          {/* </Button> */}
          
          <div className={classes.separator}></div>
          {biggerScreens ?

          userDb ? 
            <div className={classes.button_container}>
              <Button 
                ton="true" variant="text" 
                color="inherit" 
                onClick={() => logout({})} 
                className={classes.button_header}>Cerrar sesión
              </Button>
              <Avatar alt={userDb.name} src={userDb.avatar} /> 
            </div>
          :
            
          <div className={classes.button_container}>
            <Button 
            ton="true" variant="text" 
            color="inherit" 
            onClick={() => login()} 
            className={classes.button_header}>Iniciar sesión
            </Button>
          </div>
          :
          <HeaderMenu/>
}
          </Toolbar>
          
      </AppBar>
      <Toolbar></Toolbar>

    </div>
  
  );
}

export default Header;

