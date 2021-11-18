import { Provider } from "next-auth/client";
import type { AppProps } from "next/app";

import "../styles/globals.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <Provider session={session}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
