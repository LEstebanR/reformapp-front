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



// const user = users[0];


const ProfileHome = () => {
  const [userDb, setUserDb] = useState()
  const [loading, setLoading] = useState(true);
  const {user} = useContext(DataContext)

  useEffect(() => {
    const getUser = async() => {
      try {
      const currentUser = await axios.get(`http://localhost:4000/user/${user.sub}`)
      setUserDb(currentUser.data)    
      } catch (error) {
        console.error(error)
      }
    
    }
    getUser()
    setLoading(false)
  }, [user]);



  
  return (
    loading ? '...Loading' 
    :
    <Grid container >
      <Grid item xs={12} sm={4}>
        <OptionsProfile options={options.company} />
      </Grid>
      <Grid items xs={12} sm={8}>
        <Home user={userDb} reform={reform}/>
      </Grid>
    </Grid>
  
    
  );
};

export default ProfileHome;