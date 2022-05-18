import { createContext, ReactElement, useState } from 'react';
import axios from 'axios';
import cheerio from 'cheerio';

export interface AdvertisementList {
  company: string;
  link: string;
  title: string;
}

interface FetchJobinjaAdvertisementPropsInterface {
  children?: JSX.Element | JSX.Element[];
}

const FetchJobinjaAdvertisementsContext = createContext({
  advertisementList: [],
  fetchJobinjaAdvertisements: (searchKeyword: string) => {},
  getJobinjaAdsList: () => {
    return [{ company: '', link: '', title: '' }];
  },
});

export function JobinjaFetchAdProvider(props: FetchJobinjaAdvertisementPropsInterface): ReactElement {
  const [adsList, setAdsList] = useState<Array<AdvertisementList>>([]);

  async function getJobinjaAdvertisements(keyword: string): Promise<Array<AdvertisementList>> {
    const jobinjaSearchUrl: string = `https://jobinja.ir/jobs?filters%5Bkeywords%5D%5B%5D=${keyword}&filters%5Blocations%5D%5B%5D=&filters%5Bjob_categories%5D%5B%5D=`;

    let ads: Array<AdvertisementList> = [];
    for (let i = 0; i < 8; i++) {
      const { data } = await axios.get(jobinjaSearchUrl);
      const $ = cheerio.load(data);
      $('.o-listView__itemInfo', data).each((j, element) => {
        const title = $('a[class=c-jobListView__titleLink]', element).text().trim();
        const link = $('a[class=c-jobListView__titleLink]', element)!.attr('href')!.trim();
        const company = $('li[class=c-jobListView__metaItem]', element)!.first()!.text().trim();
        ads.push({ title, company, link });
      });
    }

    return ads;
  }

  function fetchJobinjaAdvertisements(searchKeyword: string) {
    getJobinjaAdvertisements(searchKeyword).then((response) => setAdsList(response));
  }

  function getJobinjaAdsList(): Array<AdvertisementList> {
    return adsList as Array<AdvertisementList>;
  }

  return (
    <FetchJobinjaAdvertisementsContext.Provider
      value={{
        advertisementList: [],
        fetchJobinjaAdvertisements: (searchKeyword) => fetchJobinjaAdvertisements(searchKeyword),
        getJobinjaAdsList: () => getJobinjaAdsList(),
      }}
    >
      {props.children}
    </FetchJobinjaAdvertisementsContext.Provider>
  );
}

export default FetchJobinjaAdvertisementsContext;
