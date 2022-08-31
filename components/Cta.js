import React from "react";
import Image from "next/image";
import { Button } from "@nextui-org/react";

import mapPic from "../images/map.jpg";

function Cta(props) {
  return (
    <div className="mapContainer">
      <div style={styles.modalStyles}>
        <h1 style={styles.title}>Are you ready to take over the world?</h1>
        <p>
          lorem ipssum dolor test this and that and latin and lorem ipsum dolor
          lorem ipssum dolor test this and that and latin and lorem ipsum dolor
          lorem ipssum dolor test this and that and latin and lorem ipsum dolor
        </p>
        <Button style={styles.button}>Get Started</Button>
      </div>
    </div>
  );
}

const styles = {
  modalStyles: {
    width: "25%",
    backgroundColor: "white",
    borderRadius: "30px",
    margin: "40px",
    padding: "10px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  title: {
    // fontFamily: "lato",
    fontSize: "35px",
  },
  subtitle: {
    fontSize: "20px",
  },
  button: {
    width: "50%",
    backgroundColor: "teal",
  },
};

export default Cta;
