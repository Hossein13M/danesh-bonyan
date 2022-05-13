import { IconButton, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export function GeneralInput(props: any) {
  function search(): void {
    console.log('hello world');
  }

  return (
    <>
      <TextField
        {...props}
        variant="filled"
        className="bg-slate-100 dark:bg-slate-200 rounded-full mb-10"
        InputProps={{
          disableUnderline: true,
          endAdornment: (
            <InputAdornment position="end">
              <IconButton edge="end" size="large" className="text-white bg-sky-500 dark:bg-stone-800" onClick={search}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </>
  );
}
