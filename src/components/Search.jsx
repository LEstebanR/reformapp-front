import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import { InputAdornment } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CompanyCard from './CompanyCard';
import Pagination from '@mui/material/Pagination';


const useStyles = makeStyles(theme => ({
  search_bar:{
    width: '80%',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  results: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '25px',
    alignItems: 'center',
    width: '100%',
    margin: '20px',

    
  }
}))
const Search = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <TextField
        className={classes.search_bar}
        label="Busca contratistas"
        InputProps={{
          endAdornment: (
            <InputAdornment>
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          )
        }}
      />
      <div className={classes.results}>
        <CompanyCard/>
        <CompanyCard/>
        <CompanyCard/>
        <CompanyCard/>
        <CompanyCard/>
        <CompanyCard/>
        <CompanyCard/>
        <CompanyCard/>
        <CompanyCard/>
      </div>
      <Pagination count={20} color="primary" />
    </div>
  );
}

export default Search;