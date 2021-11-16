import { useState, useContext } from "react";
import { DataContext } from "../context/DataContext";
import makeStyles from "@mui/styles/makeStyles";
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import history from "../utils/history";


const useStyles = makeStyles(theme => ({
  container:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
  },
  form:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '3px solid #009688',
    width: '400px',
    height: '600px',
    borderRadius: '10px',
    padding: '20px',
    gap: '5px',
  },
  hiden:{
    display: 'none',
  }
}))

const Register = () => {
  const {user} = useContext(DataContext)
  const [type, setType] = useState('')
  const [name, setName] = useState("")
  const [categories, setCategories] = useState([])
  const [imageUrl, setImageUrl] = useState('')
  const [image, setImage] = useState('')
  const classes = useStyles();

  const handleChange = (e) => {
    setType(e.target.value);
    console.log(image)
  }

  const uploadImage =  async (e) => {
    setImage(e.target.files[0])
    const formData = new FormData();
    formData.append('file', e.target.files[0]);
    formData.append('upload_preset', 'reformapp');

    await axios.post('https://api.cloudinary.com/v1_1/reformapp/image/upload', formData)
    .then(res => {
      setImageUrl(res.data.secure_url)})
    .catch(err => console.log(err))

  }
  const send = async () => {
    const data = {
      authId: user.sub,
      role: type === 'propietario' ? 'owner' : 'company', 
      name: name,
      email: user.email,
      avatar: imageUrl,
      specialty: type
    }
    await axios.post('https://reformappbackend.herokuapp.com/createuser', data)
    .then(res => console.log(res)).then(() =>{ 
      history.push('/profile/home')
      window.location.reload()
    })
    .catch(err => console.log(err))

    console.log(data)
    
  }

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  useState(() => {
    fetch('https://reformappbackend.herokuapp.com/categories')
      .then(response => response.json())
      .then(data => {
        setCategories(data.categories);
      })
  }, []);


  return (
    user ?(
    <div className={classes.container}>
      <div className={classes.form}>
        <Typography variant="h5" color="initial">Completa los datos de tu cuenta:</Typography>
        <TextField variant="outlined" id="name-reform" label={user.name} className={classes.input} onChange={handleNameChange}/>
        <Typography variant="body1" color="initial">¿Cuál es tu especialidad? (si eres propietario selecciona propietario)</Typography>
        <InputLabel id="category" >Categoría</InputLabel>
        <Select
          labelId="category"
          id="category"
          value={type}
          label="category"
          onChange={handleChange}
          className={classes.input}
        >
          {categories.map(category => (
            <MenuItem key={category._id} value={category.subject}>{category.subject}</MenuItem>
          ))}
        </Select>
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
      ><img src={imageUrl} alt={"Avatar"} width="300" height="300"></img></Box>
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
        <Button variant="contained" endIcon={<SendIcon />} className={classes.button} onClick={send}>Send</Button>
      </div>
    </div>) : null
  );
};

export default Register;
