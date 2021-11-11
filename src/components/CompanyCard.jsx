import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import history from '../utils/history';


const CompanyCard = (props) => {
  const { company } = props;
  console.log(company);

  const goToInvite = () => {
    history.push(`/invite/${company._id}`);
  }

  return (
    <Card sx={{ maxWidth: 345 }} onClick={goToInvite}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image={company.avatar}
        alt="Logo"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {company.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {company.description}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Especialidad: 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {company.specialty}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  )
}

export default CompanyCard;