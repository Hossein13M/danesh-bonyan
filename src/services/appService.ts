import axios from 'axios';
import cheerio from 'cheerio';

export interface Advertisement {
  company: string;
  link: string;
  title: string;
}

const AppService = {
  getJobinjaAdvertisements: async function (keyword: string): Promise<Array<Advertisement>> {
    const jobinjaSearchUrl: string = `https://jobinja.ir/jobs?filters%5Bkeywords%5D%5B%5D=${keyword}&filters%5Blocations%5D%5B%5D=&filters%5Bjob_categories%5D%5B%5D=`;

    let ads: Array<Advertisement> = [];
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
  },

  getDaneshBonyanCompanies: function (): Array<any> {
    return [];
  },
};

export default AppService;
