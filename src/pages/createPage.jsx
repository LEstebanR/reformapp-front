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
  const mark=[6.317299789650186, -75.55304450668937];

  const handleAdress = (e) => {
    e.preventDefault();
    setReform({ ...reform, mark: mark, adress: e.target.value });
  } 

  const handleCity = (e) => {
    e.preventDefault();
    setReform({ ...reform, city: e.target.value });
  }

  const handleCountry = (e) => {
    e.preventDefault();
    setReform({ ...reform, country: e.target.value });
  }

  return (
    <Grid container >
      <Grid item xs={12} lg={4}>
        <OptionsProfile options={options.owner} />
      </Grid>
      <Grid items xs={12} lg={4}>
        <Map  
          handleAdress={handleAdress}
          handleCity={handleCity}
          handleCountry={handleCountry}
        />
      </Grid>
      <Grid items xs={12} lg={4}>
        <Create reform={reform} setReform={setReform}/>
      </Grid>
    </Grid>
  );
}

export default CreatePage;