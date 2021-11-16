import { useState, useContext } from "react";
import { DataContext } from "../context/DataContext";
import axios from "axios";
import { Typography } from "@mui/material";
import { Box} from "@mui/system";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
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
  },
  hiden: {
    backgroundColor: 'red',
    height: '0px',
    width: '0px',
  }

})

const Create =  ({reform, setReform,}) => {
  const [type, setType] = useState('');
  const [categories, setCategories] = useState(['Categorías']);
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');
  const {userDb} = useContext(DataContext);
  const classes = useStyles();

  const handleChange = (event) => {
    setType(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  useState(() => {
    fetch('https://reformappbackend.herokuapp.com/categories')
      .then(response => response.json())
      .then(data => {
        setCategories(data.categories);
      })
  }, []);



  const send = async (e) => {
    e.preventDefault();
      try {
      setReform({
      ...reform,
      title: name,
      description: description,
      location:"Medellin",
      photo: imageUrl,
      category: type,
      ownerId: userDb.authId,
      ownerName: userDb.name,
      })
      await axios.post('https://reformappbackend.herokuapp.com/reform', reform);
    } catch (error) {
      console.log(error);
    }
  }

  const uploadImage =  async (e) => {
    setImage(e.target.files[0])
    console.log(image)
    const formData = new FormData();
    formData.append('file', e.target.files[0]);
    formData.append('upload_preset', 'reformapp');

    await axios.post('https://api.cloudinary.com/v1_1/reformapp/image/upload', formData)
    .then(res => {
      setImageUrl(res.data.secure_url)})
    .catch(err => console.log(err))

  }

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
      // eslint-disable-next-line jsx-a11y/img-redundant-alt
      ><img src={imageUrl} alt={"Reform photo"} width="300" height="300"></img></Box>
      <input type="file" id="file" name="file" accept="image/*"onChange={uploadImage} className={classes.hiden}/>
      <label htmlFor="file">
        <Fab
          variant="extended"
          size="medium"
          aria-label="add"
          className={classes.button}
          component="span"
          sx={{
            backgroundColor: 'primary.main',
            color: 'white',
            '&:hover': {
              backgroundColor: 'primary.dark',
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
          <AddIcon />
          Subir Foto
        </Fab>
      </label>
      <TextField variant="outlined" id="name-reform" label="Nombre de la reforma" className={classes.input} onChange={handleNameChange}/>
      <FormControl >
        <InputLabel id="category" >Categoría</InputLabel>
        <Select
          labelId="category"
          id="category"
          value={type}
          label="category"
          onChange={handleChange}
          className={classes.input}
        >
          {categories.map((category, i) => (
            <MenuItem key={i} value={category.subject}>{category.subject}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField id="description-reform" label="Descripción de la reforma" multiline rows={3} className={classes.input} onChange={handleDescriptionChange}/>
      <Button variant="contained" endIcon={<SendIcon />} className={classes.button} onClick={send}>Send</Button>
      </Box>
    </div>
  );
}

export default Create;