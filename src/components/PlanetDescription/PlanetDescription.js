import React, { useEffect, useState } from "react";
import FormSatellites from "./FormSatellites/FormSatellites";
import DescriptionWithLink from "../shared/DescriptionWithLink/DescriptionWithLink";
import GrayImg from "../shared/GrayImg/GrayImg";
import { useParams, useNavigate, Link } from "react-router-dom";
import "./style.css";

async function getPlanet(id) {
  let response = await fetch(`http://localhost:3000/api/planetas/${id}.json`);
  let data = await response.json();
  console.log(data);
  return data;
}

const PlanetDescription = () => {
  const [satellites, setSatellites] = useState([]);
  const [planet, setPlanet] = useState({});

  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    getPlanet(id).then((e) => {
      setSatellites(e.satellites);
      setPlanet(e.data);
    });
  }, [id]);

  const goToHome = () => {
    navigate("/");
  };

  const addSatellites = (newSatellites) => {
    setSatellites(newSatellites);
  };

  return (
    <div className="planet-description">
      <h4>{planet.name}</h4>
      <DescriptionWithLink
        description={planet.description}
        link={planet.link}
      />
      <div className="planet-img">
        <GrayImg img_url={planet.img_url} imgColor={planet.imgColor} />
      </div>
      <h4>Moons:</h4>
      <hr />
      <FormSatellites addSatellites={addSatellites} satellites={satellites} />
      <hr />
      <ul>
        {satellites.map((e, key) => (
          <li key={key}>{e.name}</li>
        ))}
      </ul>
      <hr />
      <button className="back-button" type="button" onClick={goToHome}>
        Back with Navigate
      </button>
      <Link className="back-link" to="/">
        Back with Link
      </Link>
    </div>
  );
};

export default PlanetDescription;
