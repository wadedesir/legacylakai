import { NextUIProvider } from "@nextui-org/react";

import "../style/global.css";
import HomePage from "./index";

export default function App() {
  return (
    <NextUIProvider>
      <HomePage />;
    </NextUIProvider>
  );
}
