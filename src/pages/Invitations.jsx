import OptionsProfile from "../components/OptionsProfile";
import { Grid } from "@mui/material";
import Invitations from "../components/Invitations.jsx";

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

const InvitationsPage = () => {
  return (
    <Grid container >
      <Grid item xs={12} sm={4}>
        <OptionsProfile options={options.company} />
      </Grid>
      <Grid items xs={12} sm={8}>
        <Invitations/>
      </Grid>
    </Grid>
  );
};

export default InvitationsPage;