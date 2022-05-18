import { IconButton, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useContext, useState } from 'react';
import FetchJobinjaAdvertisementsContext, { AdvertisementList } from '../store/fetchJobinjaAdvertisementsContext';

export function GeneralInput() {
  const [searchKeyword, setSearchKeyword] = useState('');

  const jobinjaCtx: { advertisementList?: Array<AdvertisementList>; fetchJobinjaAdvertisements: (searchKeyword: string) => void } =
    useContext(FetchJobinjaAdvertisementsContext);

  function getAds(): void {
    jobinjaCtx.fetchJobinjaAdvertisements(searchKeyword);
  }

  return (
    <>
      <TextField
        variant="filled"
        className="bg-slate-100 dark:bg-slate-200 rounded-full mb-10"
        onChange={(event) => setSearchKeyword(event.target.value)}
        InputProps={{
          disableUnderline: true,
          endAdornment: (
            <InputAdornment position="end">
              <IconButton edge="end" size="large" className="text-white bg-sky-500 dark:bg-stone-800" onClick={getAds}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </>
  );
}
