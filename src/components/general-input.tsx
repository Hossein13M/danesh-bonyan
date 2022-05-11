import { IconButton, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export function GeneralInput(props: any) {
  return (
    <>
      <TextField
        {...props}
        variant="outlined"
        className="bg-slate-100 rounded-full  flex items-center m-auto p-auto"
        label="Search"
        InputProps={{
          disableUnderline: true,
          endAdornment: (
            <InputAdornment position="end">
              <IconButton edge="end" className="bg-sky-700 text-white">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </>
  );
}
