import React from 'react';
import AboutCard from '../components/about/about-card';
import { AboutMeInfo, AboutProjectInfo } from '../components/about/about.const';

export default function About() {
  return (
    <>
      <div className="pt-20 flex flex-col items-center container mb-10">
        <h1 className="text-4xl flex justify-center w-1/2 border-b-2 border-red-700 dark:border-blue-600 pb-5">درباره‌</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 w-full">
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
