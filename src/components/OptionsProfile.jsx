import { ButtonGroup, Button } from "@mui/material";
import { useMediaQuery } from '@mui/material';
import { makeStyles } from "@mui/styles";
import history from '../utils/history';
import routes from '../utils/redirect'



const useStyles = makeStyles({
  mobile: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  },
  desktop: {
    width: '50%',
  },
  mobile_container:{
    margin: '10px'
  },
  desktop_container:{
    margin: '10px',
    display: 'flex',
    justifyContent: 'center'
  }
});

const redirect = (event) => {
  history.push(`/profile/${routes[event.target.innerText]}`);
}

const OptionsProfile = (props) => {
  const options = props.options;
  const mobileSize = useMediaQuery('(max-width: 600px)');
  const classes = useStyles();

  return (
    <div className={mobileSize ? classes.mobile_container : classes.desktop_container}>
      
      <ButtonGroup 
      variant="contained" 
      aria-label={mobileSize ? "outlined primary button group": "vertical contained button group"}
      orientation={mobileSize ? 'horizontal' : 'vertical'}
      className = {mobileSize ? classes.mobile : classes.desktop}>
        {options.map((option, i) => {
          return (<Button key={i} size= 'medium' onClick={redirect}>{option}</Button>)
        })}
      </ButtonGroup>
    </div>
  )
}

export default OptionsProfile