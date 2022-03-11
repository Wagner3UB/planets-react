import React from "react";
import DescriptionWithLink from "../../shared/DescriptionWithLink/DescriptionWithLink";
import GrayImg from "../../shared/GrayImg/GrayImg";
import "./style.css";

import { Link } from "react-router-dom";


const Planet = (props) => {

  return (
    <div>
      <h2 className="planet-title">{props.name}</h2>
      <Link to={`/planet/${props.id}`} > More info</Link>
      <DescriptionWithLink description={props.description} link={props.link} />
      <GrayImg img_url={props.img_url} imgColor={props.imgColor} />
    </div>
  );
};

export default Planet;
