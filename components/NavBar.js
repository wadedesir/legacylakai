import React from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "../images/logo/cover.png";

const styles = {
  container: {
    width: "100vw",
    height: "15vh",
    borderBottom: "4px solid #F0E9DA",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "5%",
    paddingBottom: "4%",
  },
  logo: {
    // height: "700px",
    width: "15%",
  },
  menu: {
    // border: "1px solid red",
  },
  link: {
    padding: 5,
    color: "#F0E9DA",
    fontSize: "18px",
    fontWeight: "bold",
  },
};

function NavBar(props) {
  return (
    <div style={styles.container}>
      <div style={styles.logo}>
        <Image src={logo} layout="responsive" />
      </div>
      <ul style={styles.menu}>
        <Link href="">
          <a style={styles.link}>Game</a>
        </Link>
        <Link href="">
          <a style={styles.link}>About</a>
        </Link>
        <Link href="">
          <a style={styles.link}>News</a>
        </Link>
      </ul>
    </div>
  );
}

export default NavBar;
