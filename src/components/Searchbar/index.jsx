// importing components
import { Autocomplete, TextField } from '@mui/material';

// searchbar
const Searchbar = ({ options }) => {
  return (
    <div className="searchbar">
      {options && options.length > 0 && (
        <Autocomplete
          id="searchbar"
          options={options}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Search" />}
        />
      )}
    </div>
  );
};

export default Searchbar;
