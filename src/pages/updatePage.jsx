import { useState, useEffect } from "react";
import axios from "../utils/axios";
import { useAuth0 } from "@auth0/auth0-react";
import makeStyles from "@mui/styles/makeStyles";
import { 
  TextField,
  Select,
  MenuItem, Typography, Button } from "@mui/material";

const useStyles = makeStyles((theme) => ({
    container : {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "50px",
        height: "100vh",
        width: "100vw",
        border: "1px solid black",
    },
    form_container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "100px",
        justifyContent: "center",
        height: "500px",
        width: "400px",
        border: "1px solid black",
    }
  }))
  
const UpdatePage = () => {
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [Name, setName] = useState("");
  const classes = useStyles();
  const user = useAuth0().user;

  const send = () => {
    alert('Enviar')
  }

  const getName = (e) => {
    setName(e.target.value)
  }

  useEffect(() => {
    axios
      .get("/categories")
      .then((res) => {
        setCategories(res.data.categories);
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);

  console.log(user)

  return (
    <div className={classes.container}>
      <h1>Completa tu información</h1>
      <div className={classes.form_container}>
        <form>
          <Typography variant="h6" color="initial">Nombre:</Typography>
          <TextField id="name" label={Name} variant="outlined" onChange={getName}/>
          <Typography variant="h6" color="initial">Categoría</Typography>
            <Select
              labelId="category"
              id="category"
              value={category.subject}
              label="category"
              onChange={(e) => setCategory(e.target.value)}>
                {categories.map((category) => (
                  <MenuItem value={category.subject}>{category.subject}</MenuItem>
                ))}
            </Select>
        </form>
          <Button variant="contained" color="primary" onClick={send}>Enviar</Button>
      </div>        
    </div>
  );

}

export default UpdatePage;