import "../styles/globals.css";

import Header from "../components/header";
import { View } from "../easy-ui/core-components";
import ListenerProvier from "../components/listener";
import ThemeProvider from "../components/theme-container";
function MyApp({ Component, pageProps }) {
  return (
    <ListenerProvier>
      <ThemeProvider>
        <Header {...pageProps} />
        <Component {...pageProps} />
      </ThemeProvider>
    </ListenerProvier>
  );
}

export default MyApp;
