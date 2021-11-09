import { useState, useEffect, useContext } from "react";
import { DataContext } from "../context/DataContext";
import axios from "axios";


import reform from "../assets/mock/reform"
import OptionsProfile from "../components/OptionsProfile";
import { Grid } from "@mui/material";
import Home from "../components/Home";

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
  const {user} = useContext(DataContext)
  
  useEffect(() => {
    const getUser = async() => {
      try {
      const currentUser = await axios.get(`https://reformappbackend.herokuapp.com/user/${user.sub}`)
      setUserDb(currentUser.data)
      setRole(userDb[0].role)   
      } catch (error) {
        console.error(error)
      }
    
    }
    getUser()
  }, [user, userDb]);


  return (
    <Grid container >
      <Grid item xs={12} sm={4}>
        <OptionsProfile options={options[role]} />
      </Grid>
      <Grid items xs={12} sm={8}>
        <Home user={userDb} reform={reform}/>
      </Grid>
    </Grid>
  
    
  );
};

export default ProfileHome;