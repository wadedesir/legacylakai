// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";
import App from "./index";

import "../style/global.css";
import "../style/fonts.css";

function MyApp({ Component, pageProps }) {
  return (
    // 2. Use at the root of your app
    <NextUIProvider>
      <App />
    </NextUIProvider>
  );
}

export default MyApp;
