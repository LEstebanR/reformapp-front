import { useState} from 'react';
import axios from '../utils/axios'
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
    height: '100vh',
    marginTop: '20px',
  },
  results: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: '25px',
    width: '100%',
    height: '100%',
    margin: '20px',
  }
}))

const Search = () => {
  const classes = useStyles();
  const [search, setSearch] = useState('Search');
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [results, setResults] = useState([]);

  const SearchResults = () => {
    getResults();
  }

  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  const getPage = (e, value) => {
    setPage(value);
  }

  const getResults = async () => {
    try{
    const response = await axios.get(`/searchcompany/${search}/${page}`);
    setResults(response.data.data);
    setPages(response.data.count);
  } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className={classes.container}>
      <TextField
        className={classes.search_bar}
        label="Busca contratistas"
        onChange={handleChange}
        onKeyDown={(e) => e.code === 'Enter' && SearchResults()}
        InputProps={{
          endAdornment: (
            <InputAdornment>
              <IconButton onClick={SearchResults}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          )
        }}
      />
      <div className={classes.results}>
        {results.map((result, index) => <CompanyCard key={index} company={result} />)}
      </div>
      <Pagination count={pages} color="primary" onChange={getPage} />
    </div>
  );
}

export default Search;