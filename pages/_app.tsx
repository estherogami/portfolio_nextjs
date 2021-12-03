import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import type { AppProps /*, AppContext */ } from "next/app";
import Layout from "../components/layout/layout";
import { AppContextProvider } from "../store/app-context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContextProvider>
  );
}

export default MyApp;
