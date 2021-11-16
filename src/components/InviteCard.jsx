import axios from '../utils/axios'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Swal from 'sweetalert2'

const InviteCard = (props) => {
  const reform = props.reform;
  const company = props.company;
  const userDb = props.userDb;

  const invite = async() => {
    try {
      const invitation = {
        companyId: company._id,
        companyName: company.name,
        ownerId: userDb._id,
        ownerName: userDb.name,
        reformDescription: reform.description,
        reformId: reform._id,
        reformPhoto: reform.photo,
        reformTitle: reform.title,
      }
      await axios.post('/invitation', invitation);  
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Tu invitación ha sido enviada',
        showConfirmButton: false,
        timer: 1500
      })
    } catch (error) {
      console.log(error);
    }
    
    
  }

  return (
    <Card sx={{ width: 320 , height:320 }}>
      <CardMedia
        component="img"
        height="140"
        image={reform.photo}
        alt="reform"
      />
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {reform.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {reform.description}
        </Typography> 
      </CardContent>
      <CardActions>
        <Button size="small" onClick={invite}>Invitar</Button>
      </CardActions>

    </Card>
  )
}

export default InviteCard;