import axios from '../utils/axios'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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
      console.log(invitation);
      await axios.post('/invitation', invitation);  
    } catch (error) {
      console.log(error);
    }
    
    
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
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