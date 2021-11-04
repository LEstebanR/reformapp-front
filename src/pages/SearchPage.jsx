import { Grid } from "@mui/material";
import OptionsProfile from "../components/OptionsProfile";
import Search from "../components/Search.jsx";


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

const CreatePage = () => {
  return (
    <Grid container >
      <Grid item xs={12} sm={4}>
        <OptionsProfile options={options.owner} />
      </Grid>
      <Grid items xs={12} sm={8}>
        <Search/>
      </Grid>
    </Grid>
  );
}

export default CreatePage;