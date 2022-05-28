import App from "next/app";

import { Context, initialRender } from "../use-sse";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Context>
      <Component {...pageProps} />
    </Context>
  );
}

export default MyApp;

MyApp.getInitialProps = async (appContext) => {
  const data = await App.getInitialProps(appContext);

  const sse = await initialRender(appContext, data);
  const pageProps = {
    ...data.pageProps,
    ...sse,
  };

  return pageProps;
};
