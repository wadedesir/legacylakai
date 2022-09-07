import { Box } from "./Box.js";

export const Layout = ({ children }) => (
  <Box
    css={{
      maxW: "100%",
      position: "relative",
      overflow: "hidden",
      // backgroundColor: "#826F69",
      width: "100vw",
      height: "100vh",
    }}
  >
    {children}
  </Box>
);
