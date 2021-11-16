import { Typography} from "@mui/material";
import ReformCard from "./ReformCard";
import { makeStyles } from '@mui/styles';
import Loader from '../components/loader'
import ReformCardCompany from "../components/ReformCardCompany";


const useStyles = makeStyles(theme => ({
  general_container:{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "10px",
    minHeight: "100vh",
  
  },
  cards_container:{
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "20px",
    marginBottom: "20px",
  },
  img:{
    width: "15vw",
    height: "15vw",
    minWidth: "200px",
    minHeight: "200px",
    borderRadius: "50%",
    border: "10px solid #009688",
  }
}))


const Home = (props) => {
  const userDb = props.user;
  const reform = props.reform;
  const invitations = props.invitations;

  
  const classes = useStyles();
  
  return (
    userDb && reform && invitations ? 
    <div className={classes.general_container}>
      <img src={userDb.avatar} alt="profile" className={classes.img}/>
      <Typography variant="h2">{userDb.name}</Typography>
      <Typography variant="h4">Reformas:</Typography>
      <div className = {classes.cards_container}>
        {
        userDb.role === "owner" ? 
        reform.map(reform => <ReformCard reform={reform} key={reform._id}/>)
        : invitations.map((invitations, i) => <ReformCardCompany invitations={invitations} key={i}/>)
      }
      </div>
    </div>
    : <Loader/>
  );
};

export default  Home;