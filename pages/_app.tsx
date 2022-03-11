import { Provider } from "next-auth/client";
import type { AppProps } from "next/app";
import "antd/dist/antd.css";

import "./styles.scss";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <Provider session={session}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
