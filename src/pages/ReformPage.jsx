import { useLocation} from "react-router";
import { useState, useEffect } from "react";
import axios from 'axios';
import reform from "../assets/mock/reform";
import Typography from '@mui/material/Typography'
import makeStyles from "@mui/styles/makeStyles";
import TimeLine from "../components/TimeLine.jsx";
import Loader from "../components/loader";

const useStyles = makeStyles(theme => ({
  img:{
    width: "10vw",
    height: "10vw",
    minWidth: "200px",
    minHeight: "200px",
    borderRadius: "50%",
    border: "10px solid #009688",
  },
  container:{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "25px",
    marginTop: "10px",
  }
}))

const ReformPage = () => {
  const classes = useStyles();
  const [reformData, setReformData] = useState();
  const  id  = useLocation().pathname.split("/")[2];
  
  useEffect(() => {
    
    const getReform = async () => {
      try {
        const response = await axios.get(`https://reformappbackend.herokuapp.com/reformbyid/${id}`);
        setReformData(response.data.reform[0]);
      } catch (error) {
        console.error(error);
      } 
    }
    getReform();
    
  } , [id]);

return (
  reformData?(
    <>
      <div className={classes.container}>
        <img src={reformData.photo} alt="profile" className={classes.img}/>
        <Typography variant="h4" color="initial">{reformData.title}</Typography>
        <Typography variant="body1" color="initial">{reformData.description}</Typography>
        <Typography variant="body1" color="initial">Propietario: {reformData.ownerName}</Typography>
      </div>
      <TimeLine reform={reform} reformData={reformData}/>
    </>)
    : <Loader/>

  );
}

export default ReformPage;