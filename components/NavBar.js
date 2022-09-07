import React from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "../images/logo/cover.png";

const styles = {
  container: {
    width: "100vw",
    height: "8vh",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1%",
    // paddingBottom: "4%",
  },
  logo: {
    // height: "700px",
  },
  logoText: {
    fontSize: "25px",
    fontWeight: "black",
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
        <h1 style={styles.logoText}>Legacy Lakay</h1>
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
