import { Card, CardActionArea, CardMedia, CardContent } from '@mui/material';
import { Typography} from "@mui/material";
import history from '../utils/history';


const ReformCardCompany = (props) =>{
  const invitations = props.invitations;

  console.log(invitations);
  const goToReform = () =>{
    history.push(`/reform/${invitations.reformId}`)
  }

  return(
    <div>
      <Card sx={{ maxWidth: 345 }} onClick={goToReform}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image= {invitations.reformPhoto}
          alt="reform_picture"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {invitations.reformTitle}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {invitations.reformName} de {invitations.ownerName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {invitations.reformDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  )
}

export default ReformCardCompany;