import * as React from "react";

import { Layout } from "../components/Layout";
import Nav from "../components/Nav";
import Cta from "../components/Cta";

function App({}) {
  // 2. Use at the root of your app
  return (
    <Layout>
      <Nav />
      <Cta />
    </Layout>
  );
}

export default App;
