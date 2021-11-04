import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import companies from '../assets/mock/company'

const company = companies[0]

const CompanyCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image={company.profile.avatar}
        alt="Logo"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {company.profile.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {company.profile.description}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Especialidad: 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {company.profile.specialty}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  )
}

export default CompanyCard;