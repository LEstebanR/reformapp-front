import users from "../assets/mock/users";
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

const user = users[0];


const ProfileHome = () => {
  return (
    <Grid container >
      <Grid item xs={12} sm={4}>
        <OptionsProfile options={options.company} />
      </Grid>
      <Grid items xs={12} sm={8}>
        <Home user={user} reform={reform}/>
      </Grid>
    </Grid>
  );
};

export default ProfileHome;