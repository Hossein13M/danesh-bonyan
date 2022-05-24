import React from 'react';
import AboutCard from '../components/about/about-card';
import { AboutArticleInfo, AboutMeInfo, AboutProjectInfo } from '../components/about/about.const';

export default function About() {
  return (
    <>
      <div className="flex flex-col items-center container mb-10">
        <h1 className="text-4xl flex justify-center w-1/2 border-b-2 border-red-700 dark:border-blue-600 pb-5">درباره‌</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 mt-4 w-full">
          <div className="flex justify-center mx-10">
            <AboutCard {...AboutArticleInfo} />
          </div>
          <div className="flex justify-center">
            <AboutCard {...AboutMeInfo} />
          </div>
          <div className="flex justify-center">
            <AboutCard {...AboutProjectInfo} />
          </div>
        </div>
      </div>
    </>
  );
}
