import React from "react";
import { Navbar, Button, Link, Text, useTheme } from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.js";

const navStyles = {
  overflow: "hidden",
};
function Nav() {
  const { isDark } = useTheme();

  return (
    <Navbar
      shouldHideOnScroll
      isBordered={isDark}
      variant="sticky"
      style={navStyles}
      className="dumbNav"
    >
      <Navbar.Brand className="brand">
        <Text b color="inherit" hideIn="xs" className="logo">
          Legacy Lakay
        </Text>
      </Navbar.Brand>
      <Navbar.Content hideIn="xs" variant="underline" className="linkContainer">
        <Navbar.Link isActive href="#">
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Feedback</Navbar.Link>
        <Navbar.Link href="#">Donate</Navbar.Link>
      </Navbar.Content>
    </Navbar>
  );
}

export default Nav;
