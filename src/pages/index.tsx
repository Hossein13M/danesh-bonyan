import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import GeneralTable from '../components/general-table';
import { GeneralInput } from '../components/general-input';
import * as React from 'react';
import { useState } from 'react';
import { AdvertisementList, JobinjaFetchAdProvider } from '../store/fetchJobinjaAdvertisementsContext';
import EmptyState from '../components/emptyState';
import Script from 'next/script';

const Home: NextPage = () => {
  const [data, setData] = useState<Array<AdvertisementList>>([]);
  const childToParent = (childData: Array<AdvertisementList>) => setData(childData);

  return (
    <>
      <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />

      <Script strategy="lazyOnload" id="google-analytics-id">
        {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                        page_path: window.location.pathname,
                        });
                    `}
      </Script>

      <div className={styles.container}>
        <Head>
          <title>فهرست شرکت‌های دانش‌بنیان</title>
          <base href="/" />
          <meta name="description" content="شما میتونین تو این سایت، موقعیت‌های شغلی مربوط به شرکت‌های دانش‌بنیان در سایت جابینجا رو پیدا کنین" />
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <meta name="keywords" content="دانش بنیان دانش‌بنیان شرکت جابینجا شغل آگهی استخدام سربازی امریه امریه‌ی سربازی" />
          <meta name="author" content="Hossein Mousavi | حسین موسوی" />
          <link rel="icon" href="/favicon.ico" />

          <meta property="og:title" content="فهرست شرکت‌های دانش‌بنیان" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="فهرست شرکت‌های دانش‌بنیان" />
          <meta property="og:url" content="https://danesh-bonyan.hmousavi.dev" />
          <meta
            property="og:image"
            content="https://danesh-bonyan.hmousavi.dev/_ipx/w_828,q_75/%2Fassets%2Fpreview.png?url=%2Fassets%2Fpreview.png&w=828&q=75"
          />
          <meta property="og:image:alt" content="آگهی‌های شغلی دانش‌بنیان" />
          <meta name="published_date" content="2022-06-16T11:00:00.000Z" />
          <meta name="author" content="Hossein Mousavi | حسین موسوی" />
          <meta property="og:description" content="شما میتونین تو این سایت، موقعیت‌های شغلی مربوط به شرکت‌های دانش‌بنیان در سایت جابینجا رو پیدا کنین!" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="موقعیت‌های شغلی شرکت‌های دانش‌بنیان در جابینجا" />
          <meta
            name="twitter:image"
            content="https://danesh-bonyan.hmousavi.dev/_ipx/w_828,q_75/%2Fassets%2Fpreview.png?url=%2Fassets%2Fpreview.png&w=828&q=75"
          />
          <meta name="twitter:image:alt" content="موقعیت‌های شغلی شرکت‌های دانش‌بنیان در جابینجا" />
          <meta name="twitter:site" content="@hossein13m" />
          <meta name="twitter:creator" content="@hossein13m" />
          <meta name="twitter:description" content="شما میتونین تو این سایت، موقعیت‌های شغلی مربوط به شرکت‌های دانش‌بنیان در سایت جابینجا رو پیدا کنین!" />
        </Head>

        <main className="flex flex-col justify-center items-center mt-4 static overflow-hidden">
          <h1 className="font-black text-2xl mb-6">جستجوی آگهی شغلی</h1>
          <JobinjaFetchAdProvider>
            <GeneralInput childToParent={childToParent} />
          </JobinjaFetchAdProvider>
          {data.length ? <GeneralTable dataParentToChild={data} /> : <EmptyState />}
        </main>
      </div>
    </>
  );
};

export default Home;
