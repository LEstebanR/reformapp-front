import { useState, useEffect, useContext } from "react";
import { DataContext } from "../context/DataContext";
import axios from "../utils/axios";
import OptionsProfile from "../components/OptionsProfile";
import { Grid } from "@mui/material";
import Home from "../components/Home";
import Register from "./Register";

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
  const [userDb, setUserDb] = useState("")
  const [role, setRole] = useState("owner");
  const [reform, setReform] = useState();
  const [invitations, setInvitations] = useState();
  const {user} = useContext(DataContext)

  
  useEffect(() => {
    const getUser = async() => {
       
      try {
        if (user) {
      const currentUser = await axios.get(`/user/${user.sub}`)
      setUserDb(currentUser.data)
      setRole(currentUser.data.role)}
      } catch (error) {
        console.error(error)
      }
    }
    getUser()
  }, [user]);

  useEffect(() => {
    const getReform = async() => {
      try {
      const currentReform = await axios.get(`/reform/${userDb.authId}`)
      setReform(currentReform.data.reform)
      } catch (error) {
        console.error(error)
      }
    
    }
    getReform()
  }, [userDb]);

  useEffect(() => {
    const getInvitations = async() => {
      try {
      const currentInvitations = await axios.get(`/invitationsaccepted/${userDb._id}`)
      setInvitations(currentInvitations.data.data)
      } catch (error) {
        console.error(error)
      }
    
    }
    getInvitations()
  }, [userDb]);


  return (
    userDb ? 
    <Grid item="true" container >
      <Grid item="true" xs={12} sm={4}>
        <OptionsProfile options={options[role]} />
      </Grid>
      <Grid item="true" xs={12} sm={8}>
        <Home user={userDb} reform={reform} invitations={invitations}/>
      </Grid>
    </Grid>
    : <Register/>
  );
};

export default ProfileHome;