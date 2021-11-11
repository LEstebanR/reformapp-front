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

const useStyles = makeStyles({
  card_container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginBottom: '2rem'
  },
  container: {
    height: '75vh',
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
    
  
  const acept = () =>{
    alert("Aceptado")
  }

  const reject = () =>{
    alert("Rechazado")
  }



  return (
    reforms ? 
    <div className={classes.container}>
      <Typography variant="h4" gutterBottom>Estas son tus invitaciones pendientes:</Typography>
      <div className={classes.card_container}>
        {reforms.map(reform => {return (
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
              <Button size="small" onClick={acept}>Aceptar</Button>
              <Button size="small" onClick={reject}>Rechazar</Button>
            </CardActions>
          </Card>
        )})}
      </div>
    </div>
    : <Loader/>
  )
}

export default AceptInvitations