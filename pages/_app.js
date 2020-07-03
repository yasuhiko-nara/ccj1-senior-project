import { Provider } from "react-redux";
import { createStore } from "../redux/store/store";
import "../styles/style.scss";

export default function App({ Component, pageProps }) {
  const store = createStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
