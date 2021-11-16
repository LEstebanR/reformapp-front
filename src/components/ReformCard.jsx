import { Card, CardActionArea, CardMedia, CardContent } from '@mui/material';
import { Typography} from "@mui/material";
import { AvatarGroup, Avatar } from '@mui/material';
import history from '../utils/history';


const ReformCard = (props) =>{
  const reform = props.reform;
  const goToREform = () =>{
    history.push(`/reform/${reform._id}`)
  }

  return(
    <div>
      <Card sx={{ width: 320, height: 470 }} onClick={goToREform}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image= {reform.photo}
          alt="reform_picture"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {reform.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {reform.description}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Contratistas postulados:
          </Typography>
          <AvatarGroup max={6}>
            {reform.options.map((option, i) => (
              <Avatar key={i} alt={option.name} src={option.avatar} />
            ))}
          </AvatarGroup>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  )
}

export default ReformCard;