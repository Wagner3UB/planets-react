import React from "react";
import "./style.css";

function GrayImg(props) {
  return (
    <>
      <img
        className={props.imgColor}
        src={props.img_url}
        alt="Foto de Mercúrio"
      />
    </>
  );
}

export default GrayImg;
