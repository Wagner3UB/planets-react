import React from "react";

function DescriptionWithLink(props) {

  if (props.link) {
    return (
      <>
        <p>{props.description}</p>
        <p>
          <a href={props.link}>{props.link}</a>
        </p>
      </>
    );
  } else {
    return (
        <p>
          <u>{props.description}</u>
        </p>
    );
  }
}

export default DescriptionWithLink;
