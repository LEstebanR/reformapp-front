import { Typography, TextField } from "@mui/material"
import { makeStyles } from "@mui/styles";
import MapCreate from "./maptest";

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '10px',
    marginTop: '20px',
  },
  input: {
    width: '400px',
  },
  title: {
    marginTop: '10px',
    textAlign : 'center',
  }
})

const Map = (props) => {
  const {handleAdress, handleCountry, handleCity } = props;
  const classes = useStyles();

  return (
    <>
    <div className={classes.title}>     
      <Typography variant="h4" gutterBottom>Selecciona tu ubicación</Typography>
    </div>
      <MapCreate/>
    <div className={classes.container}>
      <TextField required id="adress-reform" label="¿Cuál es tu dirección?" className={classes.input} onChange={handleAdress}/>
      <TextField required id="adress-reform" label="¿Cuál es tu país?"className={classes.input} onChange={handleCountry}/>
      <TextField required id="adress-reform" label="¿Cuál es tu ciudad?"className={classes.input} onChange={handleCity}/>
    </div>
    </> 
  )
}

export default Map