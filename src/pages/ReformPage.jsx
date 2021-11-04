import reform from "../assets/mock/reform";
import Typography from '@mui/material/Typography'
import makeStyles from "@mui/styles/makeStyles";
import TimeLine from "../components/TimeLine.jsx";

console.log(reform);

const useStyles = makeStyles(theme => ({
  img:{
    width: "10vw",
    height: "10vw",
    minWidth: "200px",
    minHeight: "200px",
    borderRadius: "50%",
    border: "10px solid #009688",
  },
  container:{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "25px",
  }
}))
const ReformPage = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        <img src={reform[0].company.avatar} alt="profile" className={classes.img}/>
        <Typography variant="h4" color="initial">{reform[0].name}</Typography>
        <Typography variant="body1" color="initial">{reform[0].description}</Typography>
        <Typography variant="body1" color="initial">Propietario: {reform[0].owner.profile.name}</Typography>
      </div>
      <TimeLine/>
    </>
  );
}

export default ReformPage;