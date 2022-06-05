import { IconButton, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useContext, useState } from 'react';
import FetchJobinjaAdvertisementsContext, { AdvertisementList } from '../store/fetchJobinjaAdvertisementsContext';
import CircularLoading from './circularLoading';
import stringSimilarity from 'string-similarity';
import companiesList from '../const/companies.json';

export function GeneralInput({ childToParent }: any) {
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const jobinjaCtx: { getJobinjaAdvertisements: (keyword: string) => Promise<Array<AdvertisementList>> } = useContext(FetchJobinjaAdvertisementsContext);

  function getAds(): void {
    setLoading(true);
    jobinjaCtx.getJobinjaAdvertisements(searchKeyword).then((result: Array<AdvertisementList>) => childToParent(checkForSimilarities(result)));
  }

  function checkForSimilarities(advertisementList: Array<AdvertisementList>): Array<AdvertisementList> {
    const result: Array<AdvertisementList> = [];
    companiesList.map((company: string) => {
      advertisementList.map((ad) => {
        const similarity = stringSimilarity.compareTwoStrings(company, ad.company);
        if (similarity > 0.5) result.push(ad);
      });
    });

    const uniqueResult = Array.from(new Set(result.map((a) => a.title))).map((title) => result.find((item) => item.title === title));

    setLoading(false);
    return (uniqueResult as Array<AdvertisementList>) ?? [];
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
