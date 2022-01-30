import "../styles/globals.css";

import Header from "../components/header";
import Footer from "../components/footer";
import { View } from "../easy-ui/core-components";
import ListenerProvier from "../components/listener";
import ThemeProvider from "../components/theme-container";
import ToastProvider from "../components/toast-container";
import Fonts from "../components/Fonts";
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <ListenerProvier>
        <ToastProvider>
          <Fonts />
          <Header {...pageProps} />
          <View style={{ flex: 1, overflow: "hidden" }}>
            <Component {...pageProps} />
          </View>
          <Footer />
        </ToastProvider>
      </ListenerProvier>
    </ThemeProvider>
  );
}

export default MyApp;
