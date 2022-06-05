import { IconButton, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useContext, useState } from 'react';
import FetchJobinjaAdvertisementsContext, { AdvertisementList } from '../store/fetchJobinjaAdvertisementsContext';
import CircularLoading from './circularLoading';

export function GeneralInput({ childToParent }: any) {
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const jobinjaCtx: { getJobinjaAdvertisements: (keyword: string) => Promise<Array<AdvertisementList>> } = useContext(FetchJobinjaAdvertisementsContext);

  function getAds(): void {
    setLoading(true);
    jobinjaCtx.getJobinjaAdvertisements(searchKeyword).then((result: Array<AdvertisementList>) => {
      setLoading(false);
      let resultArray: Array<AdvertisementList> = [];
      result.map((item) => resultArray.push(item));
      childToParent(resultArray);
    });
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
      <div className="mb-4 pb-4">{loading && <CircularLoading />}</div>
    </>
  );
}
