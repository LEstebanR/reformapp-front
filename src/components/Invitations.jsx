import ReformCard from "./ReformCard";
import reform from "../assets/mock/reform"
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material"

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    gap: "1rem",
  },
  general_container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }
})
const Invitations = () => {
  const classes = useStyles();
  return (
    <div className={classes.general_container}>
      <Typography variant="h4" gutterBottom>Tus Invitaciones:</Typography>
      <div className={classes.container}>
        <ReformCard reform={reform}/>
        <ReformCard reform={reform}/>
        <ReformCard reform={reform}/>
        <ReformCard reform={reform}/>
        <ReformCard reform={reform}/>
        <ReformCard reform={reform}/>
        <ReformCard reform={reform}/>
        <ReformCard reform={reform}/>
        <ReformCard reform={reform}/>
      </div>
    </div>
  );
}

export default Invitations;