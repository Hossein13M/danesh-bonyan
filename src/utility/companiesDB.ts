// run this file to update the companiesDB once in a while, because of CORS error, and the API is not available in the browser.
// so we need to update the db manually.

// curl 'https://api.daneshbonyan.ir/kb-co-pub-info/excel-list' \
//   -H 'authority: api.daneshbonyan.ir' \
//   -H 'accept: application/json, text/plain, */*' \
//   -H 'accept-language: en-US,en;q=0.9' \
//   -H 'content-type: application/json' \
//   -H 'origin: https://pub.daneshbonyan.ir' \
//   -H 'sec-fetch-dest: empty' \
//   -H 'sec-fetch-mode: cors' \
//   -H 'sec-fetch-site: same-site' \
//   -H 'sec-gpc: 1' \
//   -H 'user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36' \
//   --data-raw '{}' \
//   --compressed

// using the following website I can get the company's name list and then push them all into another json file: https://wtools.io/get-column-from-excel

import * as fs from 'fs';

export const updateDB: () => void = () => {
  // update the bellow string and then after compiling this typeScript file to JS, run it and the json file responsible for companies db will be updated
  const companiesNameText: string = ``;

  const companiesNameArr: Array<string> = [];
  companiesNameText.split('\n').map((item) => companiesNameArr.push(item));
  fs.writeFileSync('../const/companies.json', JSON.stringify(companiesNameArr));
};

updateDB();
