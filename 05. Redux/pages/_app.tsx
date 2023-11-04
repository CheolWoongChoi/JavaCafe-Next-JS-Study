import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import { Provider } from "react-redux";
import { persistor, wrapper } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";

function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <Navbar />
      <div className="w-9/12 m-auto pt-10">
        <Component {...props.pageProps} />
      </div>
      {/* </PersistGate> */}
    </Provider>
  );
}

export default App;
