import React from "react";
import Image from "next/image";
import { Button } from "@nextui-org/react";

import mapPic from "../images/map.jpg";

function Cta(props) {
  return <div className="mapContainer"></div>;
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
    color: "rgba(107, 52, 35, 1)",
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
