import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
  import SendIcon from '@mui/icons-material/Send';
import { useState } from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '10px',
    marginBottom: '10px',
    padding: '10px',
  },
  input: {
    width: '350px',
  },
  button: {
    marginBottom: '10px',
  }

})
const Create =  () => {
  const [category, setCategory] = useState('');
  const classes = useStyles();

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div className={classes.container} >
      <Typography variant="h4" gutterBottom>Crear Reforma</Typography>
      <Box sx={{border: '1px solid black', width:400, height: 700, borderRadius: 5 }}
      className={classes.container}>
      <Box
      sx={{
        width: 300,
        height: 300,
        margin: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
      >Agrega una imagen del sitio que quieres reformar</Box>
      <Fab color="primary" aria-label="add"><AddIcon /></Fab>
      <TextField required id="name-reform" label="Nombre de la reforma" className={classes.input}/>
      <FormControl >
        <InputLabel id="category" >Categoría</InputLabel>
        <Select
          labelId="category"
          id="category"
          value={category}
          label="category"
          onChange={handleChange}
          className={classes.input}
        >
          <MenuItem value={10}>Acabados</MenuItem>
          <MenuItem value={20}>Pintura</MenuItem>
          <MenuItem value={30}>Redes</MenuItem>
         
        </Select>
      </FormControl>

      <TextField id="description-reform" label="Descripción de la reforma" multiline rows={3} className={classes.input}/>
      <Button variant="contained" endIcon={<SendIcon />} className={classes.button}>Send</Button>

      </Box>
    </div>
  );
}

export default Create;