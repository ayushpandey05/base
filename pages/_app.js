import "../styles/globals.css";

import Header from "../components/header";
import Footer from "../components/footer";
import { View } from "../easy-ui/core-components";
import ListenerProvier from "../components/listener";
import ThemeProvider from "../components/theme-container";
import Fonts from "../components/Fonts";
function MyApp({ Component, pageProps }) {
  return (
    <ListenerProvier>
      <Fonts />
      <ThemeProvider>
        <Header {...pageProps} />
        <View style={{ flex: 1, overflow: 'hidden' }}>
          <Component {...pageProps} />
        </View>
        <Footer />
      </ThemeProvider>
    </ListenerProvier>
  );
}

export default MyApp;
