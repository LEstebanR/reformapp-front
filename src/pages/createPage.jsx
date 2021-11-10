import { useState } from "react";
import { Grid } from "@mui/material";
import OptionsProfile from "../components/OptionsProfile";
import Create from "../components/Create.jsx";
import Map from "../components/Map.jsx"

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
  const [reform, setReform] = useState({});
  return (
    <Grid container >
      <Grid item xs={12} lg={4}>
        <OptionsProfile options={options.owner} />
      </Grid>
      <Grid items xs={12} lg={4}>
        <Map/>
      </Grid>
      <Grid items xs={12} lg={4}>
        <Create reform={reform} setReform={setReform}/>
      </Grid>
    </Grid>
  );
}

export default CreatePage;