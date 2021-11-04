import { Card, CardActionArea, CardMedia, CardContent } from '@mui/material';
import { Typography} from "@mui/material";
import { AvatarGroup, Avatar } from '@mui/material';

const ReformCard = (props) =>{
  const reform = props.reform;
  return(
    <div>
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image= {reform[0].image}
          alt="reform_picture"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {reform[0].name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {reform[0].description}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Contratistas postulados:
          </Typography>
          <AvatarGroup max={6}>
            <Avatar alt="Remy Sharp" src={reform[0].company.avatar} />
            <Avatar alt="Remy Sharp" src={reform[0].company.avatar} />
            <Avatar alt="Remy Sharp" src={reform[0].company.avatar} />
          </AvatarGroup>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  )
}

export default ReformCard;