import { useLocation} from "react-router";
import { useState, useEffect, useContext } from "react";
import { DataContext } from "../context/DataContext";
import axios from '../utils/axios';
import Typography from '@mui/material/Typography'
import makeStyles from "@mui/styles/makeStyles";
import Loader from "../components/loader";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Swal from 'sweetalert2';

const useStyles = makeStyles(theme => ({
  img:{
    width: "10vw",
    height: "10vw",
    minWidth: "200px",
    minHeight: "200px",
    borderRadius: "50%",
    border: "10px solid #009688",
  },
  container:{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "25px",
    margin: "10px",
    marginBottom: "50px",
    minHeight: "100vh",
  },
  hidden:{
    display: "none",
  }
}))

const Proposal = () => {
  const classes = useStyles();
  const [reformData, setReformData] = useState();
  const [proposal, setProposal] = useState();
  const [newProposal, setNewProposal] = useState({});
  const  id  = useLocation().pathname.split("/")[2];
  const {userDb} = useContext(DataContext)

  useEffect(() => {
    
    const getReform = async () => {
      try {
        const response = await axios.get(`/reformbyid/${id}`);
        setReformData(response.data.reform[0]);
      } catch (error) {
        console.error(error);
      } 
    }
    getReform();
    
  } , [id]);

  const uploadProposal = async (e) => {
    setProposal(e.target.files[0])
    console.log(proposal)
    const formData = new FormData();
    formData.append('file', e.target.files[0]);
    formData.append('upload_preset', 'reformapp');

    await axios.post('https://api.cloudinary.com/v1_1/reformapp/image/upload', formData)
    .then(res => {
      setNewProposal({
        id: reformData._id,
        name: userDb.name,
        avatar: userDb.avatar,
        propuse: res.data.url,

      })
      axios.patch('/propuesta', newProposal )
    .then(res => {
      console.log(res)
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Tu propuesta ha sido enviada',
        showConfirmButton: false,
        timer: 1500
      })
    })
    .catch(err => console.log(err))

    })
    .catch(err => console.log(err))
  }


return (
  reformData?(
    <>
      <div className={classes.container}>
        <img src={reformData.photo} alt="profile" className={classes.img}/>
        <Typography variant="h4" color="initial">{reformData.title}</Typography>
        <Typography variant="body1" color="initial">{reformData.description}</Typography>
        <Typography variant="body1" color="initial">Propietario: {reformData.ownerName}</Typography>
        <Typography variant="body1" color="initial">Ubicación: {reformData.adress}, {reformData.city} - {reformData.country}</Typography>
        <Typography variant="h5" color="initial">Enviar propuesta: </Typography>
        <input type="file" id="file" name="file" accept="/image*" className={classes.hidden} onChange={uploadProposal}/>
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
          Subir propuesta de reforma
        </Fab>
        </label>
      </div>
    </>
        )
    : <Loader/>

  );
}

export default Proposal;