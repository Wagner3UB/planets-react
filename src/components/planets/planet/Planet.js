import React from "react";
import DescriptionWithLink from "../../shared/DescriptionWithLink/DescriptionWithLink";
import GrayImg from "../../shared/GrayImg/GrayImg";


const Planet = (props) => {

  return (
    <div>
      <h4>{props.name}</h4>
      <DescriptionWithLink description={props.description} link={props.link} />
      <GrayImg img_url={props.img_url} imgColor={props.imgColor} />
    </div>
  );
};

export default Planet;
