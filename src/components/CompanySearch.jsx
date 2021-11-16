import { Typography} from "@mui/material"
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { makeStyles } from "@mui/styles";
import MapCompany from "./MapCompany";
import { useContext, useState, useEffect } from "react";
import { DataContext} from "../context/DataContext";
import axios from '../utils/axios'

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
  const [query, setQuery] = useState('');
  const [reforms, setReforms] = useState([]);
  const {categories} = useContext(DataContext)
  const classes = useStyles();
  
  const handleChange = (event) => {
    event.preventDefault();
    setQuery(event.target.value);
  };
  

  useEffect(() => {
    const reforms = async() => {
      try {
        const response = await axios.get(`/reformbytype/${query}`)
        setReforms(response.data.reform)  
      } catch (error) {
        console.error(error);
      }
      
    }
    reforms()
  }, [query]);

  return(
  
    <>
      <Typography variant="h4" gutterBottom>Selecciona la categoría</Typography>
      <MapCompany reforms={reforms} />
   <div className = {classes.container}>
      <ButtonGroup variant="contained" color="secondary" aria-label="outlined button group" className={classes.button_group}>
       {categories.map((category) =><Button onClick={handleChange} value={category.subject}>{category.subject}</Button> )} 
      </ButtonGroup>
  </div>
  </>
  )
}

export default CompanySearch