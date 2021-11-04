import { createTheme } from "@mui/material";
import { teal, red } from '@mui/material/colors';


const theme = createTheme({
  palette: {
    primary: {main: teal[500]},
    secondary: {main: red[500]}
}});

export default theme;