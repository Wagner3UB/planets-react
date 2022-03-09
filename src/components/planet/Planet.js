import React, { useEffect, useState } from "react";
import FormSatellites from "../planets/planet/FormSatellites/FormSatellites";
import DescriptionWithLink from "../shared/DescriptionWithLink/DescriptionWithLink";
import GrayImg from "../shared/GrayImg/GrayImg";

async function getSatellites(id) {
  let response = await fetch(`http://localhost:3000/api/planetas/${id}.json`);
  let data = await response.json();
  return data;
}

const Planet = (props) => {
  const [satellites, setSatellites] = useState([]);

  useEffect(() => {
    let name = props.name.toLowerCase();
    getSatellites(name).then((e) => {
      setSatellites(e.satellites);
    });
  }, [props.name]);

  const addSatellites = (newSatellites) => {
    setSatellites(newSatellites);
  };

  return (
    <div>
      <h4>{props.name}</h4>
      <DescriptionWithLink description={props.description} link={props.link} />
      <GrayImg img_url={props.img_url} imgColor={props.imgColor} />
      <h4>Moons:</h4>
      <hr/>
      <FormSatellites addSatellites={addSatellites} satellites={satellites} />
      <hr/>
      <ul>
        {satellites.map((e, key) => (
          <li key={key}>{e.name}</li>
        ))}
      </ul>

      <hr />
    </div>
  );
};

export default Planet;
