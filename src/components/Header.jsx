import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import { useMediaQuery } from '@mui/material';
import HeaderMenu from './headerMenu';
import {Link} from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
  },
  button_header : {
    marginLeft: theme.spacing(2),
  
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
  }
  
}));

const Header = (props) =>  {
  const mobileSize = useMediaQuery('(max-width: 600px)');
  const biggerScreens = useMediaQuery('(min-width: 600px)');
  const classes = useStyles();
  const { loginWithRedirect, logout } = useAuth0();

  const login = () => {
    console.log('antes')
    loginWithRedirect()
    console.log('despues')
    
  };

  return (
    <div className={classes.header}>
      <AppBar>
        <Toolbar>
          
          <Button  ton variant="text" color="inherit"  className={classes.button_header}>
            <Link to="/" className={classes.link}>Inicio</Link>
          </Button>
          <div className={classes.separator}></div>
          {biggerScreens &&
          <div className={classes.button_container}>
            <Button 
            ton variant="text" 
            color="inherit" 
            onClick={() => login()} 
            className={classes.button_header}>Iniciar sesión
            </Button>
            <Button 
            ton variant="text" 
            color="inherit" 
            onClick={() => logout({})} 
            className={classes.button_header}>Cerrar sesión
            </Button>
          </div>
          }
          
          {mobileSize && 
          <HeaderMenu/>
          }
          </Toolbar>
      </AppBar>
      <Toolbar/><Toolbar/>
    </div>
  
  );
}

export default Header;

