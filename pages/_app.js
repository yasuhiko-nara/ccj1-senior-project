import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { wrapper } from "../redux/store/store";
import Head from "next/head";
import { StylesProvider } from "@material-ui/core/styles";
import "../styles/global.scss";

import "../styles/reset.css";
import "@reach/combobox/styles.css";
import "react-multi-carousel/lib/styles.css";

function MyApp({ Component, pageProps }) {
  // const store = createStore(pageProps.initialReduxState);

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>RAKUTABI</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <StylesProvider>
        {/* <Provider store={store}> */}
        <Component {...pageProps} />
        {/* </Provider> */}
      </StylesProvider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
