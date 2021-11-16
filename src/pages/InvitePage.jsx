import { useState, useEffect, useContext } from "react";
import {DataContext} from "../context/DataContext";
import { useLocation } from "react-router";
import axios from "../utils/axios";
import makeStyles from "@mui/styles/makeStyles";
import Loader from "../components/loader";
import { Typography } from "@mui/material";
import InviteCard from "../components/InviteCard";


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
    marginTop: "20px",
    minHeight: "82vh",
  },
  reform_container:{
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: "25px",
    marginBottom: "25px",
  }

}))

const InvitePage = () => {
  const classes = useStyles();
  const [companyData, setCompanyData] = useState();
  const [reforms, setReforms] = useState();
  const  id  = useLocation().pathname.split("/")[2];
  const {userDb} = useContext(DataContext);
  
  useEffect(() => {
    
    const getCompany = async () => {
      try {
        const response = await axios.get(`userbyid/${id}`);
        setCompanyData(response.data);
      } catch (error) {
        console.error(error);
      } 
    }

    const getReforms = async () => {
      try {
        const response = await axios.get(`reform/${userDb.authId}`);
        setReforms(response.data.reform);
      } catch (error) {
        console.error(error);
      }
    }

    getCompany();
    getReforms();
    
  } , [id, userDb.authId]);




  return (
    companyData && userDb && reforms ? 
    <div className={classes.container}>
      <img src={companyData.avatar} alt="profile" className={classes.img}/>
      <Typography variant="h4">¿Quieres invitar a {companyData.name} a tus reformas?</Typography>
      <div className={classes.reform_container}>
        {reforms.map(reform => (
          <InviteCard reform={reform} company={companyData} userDb={userDb}/>
        ))}
      </div>
    </div>
    : <Loader/>
  );
}

export default InvitePage;