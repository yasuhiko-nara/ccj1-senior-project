import { Provider } from "react-redux";

import { createStore } from "../redux/store/store";
import "../styles/style.css"; //global css
import "../styles/reset.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@reach/combobox/styles.css";

export default function App({ Component, pageProps }) {
  const store = createStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
