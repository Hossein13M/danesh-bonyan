import React from 'react';
import { CacheProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import createEmotionCache from '../utility/createEmotionCache';
import { MyThemeContextProvider } from '../store/myThemeContext';
import Layout from '../components/layout';
import '../styles/globals.css';

const clientSideEmotionCache = createEmotionCache();

const MyApp = (props: any) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <MyThemeContextProvider>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MyThemeContextProvider>
    </CacheProvider>
  );
};

export default MyApp;
