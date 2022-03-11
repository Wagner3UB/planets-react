import React from "react";
import "./style.css";

function GrayImg(props) {
  return (
    <article className="img-planet">
      <img
        className={props.imgColor}
        src={props.img_url}
        alt="Foto de Mercúrio"
      />
    </article>
  );
}

export default GrayImg;
