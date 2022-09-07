import React from "react";
import { Button } from "@nextui-org/react";

function RCTA(props) {
  return (
    <div style={styles.container}>
      <h1 style={styles.head}>Explore and Conquer the World of Legacy Lakay</h1>
      <h3>lorem Text ipsum dolor lalala and lorem ipsum dolor</h3>
      <div style={styles.buttonContainer}>
        <Button style={styles.buttons}>Buy Now</Button>
        <Button style={styles.buttons}>How to Play</Button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "50vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: "20vw",
    paddingRight: "20vw",
  },
  head: {
    fontSize: "80px",
    fontWeight: "Bold",
    textAlign: "center",
  },
  buttonContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  buttons: {
    margin: "10px",
  },
};

export default RCTA;
