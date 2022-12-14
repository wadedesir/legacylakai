import * as React from "react";

import { Layout } from "../components/Layout";
import Nav from "../components/Nav";
import NavBar from "../components/NavBar";
import Cta from "../components/Cta";
import RCTA from "../components/RCTA";

function App({}) {
  // 2. Use at the root of your app
  return (
    <Layout>
      <NavBar />
      {/* <Nav /> */}
      <RCTA />
      <Cta />
    </Layout>
  );
}

export default App;
