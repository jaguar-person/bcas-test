import "@/styles/globals.css";
import "@mantine/core/styles.css";

import type { AppProps, AppType } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";

import { ModalsProvider } from "@mantine/modals";

const MyApp: AppType = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Crypto Test</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider>
        <ModalsProvider>
          <Component {...pageProps} />
        </ModalsProvider>
      </MantineProvider>
    </>
  );
};

export default MyApp;
