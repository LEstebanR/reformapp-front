import { Typography} from "@mui/material";
import ReformCard from "./ReformCard";
import { makeStyles } from '@mui/styles';


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
  // const {user} = useContext(DataContext)

  console.log (userDb)
  return (
    userDb ? 
    <div className={classes.general_container}>
      <img src={userDb[0].avatar} alt="profile" className={classes.img}/>
      <Typography variant="h2">{userDb[0].name}</Typography>
      <Typography variant="h4">Reformas:</Typography>
      <div className = {classes.cards_container}>
        <ReformCard reform={reform} />
        <ReformCard reform={reform} />
        <ReformCard reform={reform} />
        <ReformCard reform={reform} />
        <ReformCard reform={reform} />
        <ReformCard reform={reform} />
      </div>
    </div>
    : <div>Loading...</div>
  );
};

export default  Home;