import '@/styles/globals.scss'
import {store, wrapper} from "@/redux/store";
import {Provider} from "react-redux";

function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default wrapper.withRedux(App)