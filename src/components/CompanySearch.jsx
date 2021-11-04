import { Typography, TextField } from "@mui/material"
import { Box } from "@mui/system";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { makeStyles } from "@mui/styles";
import categories from '../assets/mock/categories'
import { ClassNames } from "@emotion/react";

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
    margin: '10px',
    marginBottom: '70px'
  },
  button_group: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  }
}));

const CompanySearch = () => {
  const classes = useStyles();
  return(
    <div className = {classes.container}>
      <Typography variant="h4" gutterBottom>Selecciona la categoría</Typography>
      <Box sx={{border: '1px solid black', width:'75%', height: '60vh', borderRadius: 5 }}></Box>
      <ButtonGroup variant="contained" color="secondary" aria-label="outlined button group" className={classes.button_group}>
       {categories.map((category) =><Button>{category}</Button> )} 
      </ButtonGroup>
  </div>
  )
}

export default CompanySearch