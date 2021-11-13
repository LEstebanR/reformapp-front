import { Typography, TextField } from "@mui/material"
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
// import Maptest from "./maptest";

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '10px',
  },
  input: {
    width: '400px',
  }
})


const Map = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {/* <Maptest /> */}
      <Typography variant="h4" gutterBottom>Selecciona tu ubicación</Typography>
      <Box sx={{border: '1px solid black', width:400, height: 300, borderRadius: 5 }}></Box>
      <TextField required id="adress-reform" label="¿Cuál es tu dirección?" className={classes.input}/>
      <TextField required id="adress-reform" label="¿Cuál es tu país?"className={classes.input}/>
      <TextField required id="adress-reform" label="¿Cuál es tu ciudad?"className={classes.input}/>
    </div>
  )
}

export default Map