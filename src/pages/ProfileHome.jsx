import { useState, useEffect, useContext } from "react";
import { DataContext } from "../context/DataContext";
import axios from "axios";


import OptionsProfile from "../components/OptionsProfile";
import { Grid } from "@mui/material";
import Home from "../components/Home";
import Loader from "../components/loader";

const options ={
  owner : [
    'Home',
    'Crear reforma',
    'Buscar Contratista'
  ],
  company : [
    'Home',
    'Buscar Reforma',
    'Invitaciones'
  ]
}

const ProfileHome = () => {
  const [userDb, setUserDb] = useState()
  const [role, setRole] = useState("owner");
  const [reform, setReform] = useState();
  const {user} = useContext(DataContext)

  
  useEffect(() => {
    const getUser = async() => {
      try {
      const currentUser = await axios.get(`https://reformappbackend.herokuapp.com/user/${user.sub}`)
      setUserDb(currentUser.data)
      setRole(currentUser.data.role)
      } catch (error) {
        console.error(error)
      }
    
    }
    getUser()
  }, [user]);

  useEffect(() => {
    const getReform = async() => {
      try {
      const currentReform = await axios.get(`https://reformappbackend.herokuapp.com/reform/${userDb.authId}`)
      setReform(currentReform.data.reform)
      } catch (error) {
        console.error(error)
      }
    
    }
    getReform()
  }, [userDb]);

  return (
    userDb && reform ? 
    <Grid item container >
      <Grid item xs={12} sm={4}>
        <OptionsProfile options={options[role]} />
      </Grid>
      <Grid items xs={12} sm={8}>
        <Home user={userDb} reform={reform}/>
      </Grid>
    </Grid>
    : <Loader/>
  
    
  );
};

export default ProfileHome;