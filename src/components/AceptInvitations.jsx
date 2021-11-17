import { useContext, useState, useEffect } from "react"
import { DataContext } from "../context/DataContext"
import axios from "../utils/axios"
import Loader from "../components/loader"
import { Typography } from "@mui/material"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import Swal from 'sweetalert2'

const useStyles = makeStyles({
  card_container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginBottom: '2rem'
  },
  container: {
    minHeight: '85vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px',
    marginTop: '20px'
  }

})


const AceptInvitations = () => {
  const {userDb} = useContext(DataContext)
  const [reforms, setReforms] = useState()
  const classes = useStyles();

  useEffect(() => {
    const getReforms = async () => {
      try{
      const { data } = await axios.get(`/invitationspending/${userDb._id}`)
      setReforms(data.data)
      }catch(error){
        console.log(error)
      }
    }
    getReforms()
  }, [userDb])
    
  
  const acept = async (reform) =>{
    const data = {
      id: reform,
      status: "accepted"
    }
    await axios.patch('/updateinvitation', data)
    window.location.reload();
  }
  

  const reject = async (reform) =>{
    const data = {
      id: reform,
      status: "rejected"
    }
    await axios.patch('/updateinvitation', data)
    window.location.reload(); 
  }



  return (
    reforms ? 
    <div className={classes.container}>
      <Typography variant="h4" gutterBottom>Estas son tus invitaciones pendientes:</Typography>
      <div className={classes.card_container}>
        {reforms.map((reform) => {return (
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="Reform photo"
              height="140"
              image={reform.reformPhoto}
              />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">{reform.reformTitle}</Typography>
              <Typography variant="body2" color="text.secondary">
                {reform.reformDescription}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">Propietario:</Typography>
              <Typography variant="body2" color="text.secondary">
                {reform.ownerName}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" id={reform._id} onClick={(e) => {acept(e.target.id)}}>Aceptar</Button>
              <Button size="small"  id={reform._id} onClick={(e) => {reject(e.target.id)}}>Rechazar</Button>
            </CardActions>
          </Card>
        )})}
      </div>
    </div>
    : <Loader/>
  )
}

export default AceptInvitations