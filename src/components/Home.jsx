import { Typography} from "@mui/material";
import ReformCard from "./ReformCard";
import { makeStyles } from '@mui/styles';
import Loader from '../components/loader'


const useStyles = makeStyles(theme => ({
  general_container:{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  
  },
  cards_container:{
    display: "flex",
    justifyContent: "center",
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
  const classes = useStyles();
  
  return (
    userDb && reform ? 
    <div className={classes.general_container}>
      <img src={userDb.avatar} alt="profile" className={classes.img}/>
      <Typography variant="h2">{userDb.name}</Typography>
      <Typography variant="h4">Reformas:</Typography>
      <div className = {classes.cards_container}>
        {reform.map(reform => <ReformCard reform={reform} key={reform.id}/>)}
      </div>
    </div>
    : <Loader/>
  );
};

export default  Home;