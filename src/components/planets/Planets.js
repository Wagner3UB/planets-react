import React, { useEffect, useState } from "react";
import Planet from "./planet/Planet";
import Form from "./form/Form";
import "./style.css";

async function getPlanets() {
  let response = await fetch("http://localhost:3000/api/planetas/planets.json");
  let data = await response.json();
  return data;
}

const Planets = () => {
  const [planets, setPlanets] = useState([]);
  const [imgColor, setImgColor] = useState("gray-img");

  useEffect(() => {
    getPlanets().then((e) => {
      setPlanets(e.planets);
    });
  }, []);

  const addPlanet = (newPlanet) => {
    setPlanets([...planets, newPlanet]);
  };

  const removeLast = () => {
    const newListPlanets = [...planets];
    newListPlanets.pop();
    setPlanets(newListPlanets);
  };

  const duplicateLastOne = () => {
    const lastPlanet = planets[planets.length - 1];
    const newListPlanets = [...planets, lastPlanet];
    setPlanets(newListPlanets);
  };
  const handleColor = (e) => {
    e.target.checked ? setImgColor("color-img") : setImgColor("gray-img");
  };

  return (
    <>
      <h3>Lista de planetas</h3>
      <button onClick={removeLast}>Remove last</button>
      <button onClick={duplicateLastOne}>Duplicate last</button>
      <div>
        <label htmlFor="color">Color images: </label>
        <input type="checkbox" id="color" name="color" onChange={handleColor} />
      </div>
      <hr />
      <Form addPlanet={addPlanet} />
      <hr />
      <section className="planets">
        {planets.map((e, index) => (
          <div key={index} className="planet-container">
            <Planet
              name={e.name}
              id={e.id}
              description={e.description}
              img_url={e.img_url}
              link={e.link}
              imgColor={imgColor}
            />
          </div>
        ))}
      </section>
    </>
  );
};

/* class Planets extends React.Component {
  componentDidMount() {
    getPlanets().then((e) => {
      this.setState(() => ({
        planets: e["planets"],
      }));
    });
  } 
}*/

export default Planets;
