import React, { useState } from "react";
import "./form.css";

const Form = (props) => {
  const [newPlanet, setNewPlanet] = useState({});

  const handleChange = (e) => {
    e.stopPropagation();
    const { name, value } = e.target;
    newPlanet[name] = value;
    setNewPlanet({ ...newPlanet });
  };
  /* 
  Modo do professor:--------
  const HandleFieldChanges = (e) => setFields({
    ...fields,
    [e.target.name]: e.target.value
  });
  */
  const handleSubmit = (e) => {
    e.stopPropagation();
    e.preventDefault();
    props.addPlanet(newPlanet);
  };

  return (
    <form className="planets-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Planet Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          placeholder="Planet name"
        />
      </div>
      <div>
        <label htmlFor="description">Planet description:</label>
        <input
          type="text"
          id="description"
          name="description"
          onChange={handleChange}
          placeholder="Planet description"
        />
      </div>
      <div>
        <label htmlFor="link">Planet link:</label>
        <input
          type="url"
          id="link"
          name="link"
          onChange={handleChange}
          placeholder="Planet link"
        />
      </div>
      <div>
        <label htmlFor="img_url">Planet Image URL:</label>
        <input
          type="url"
          id="img_url"
          name="img_url"
          onChange={handleChange}
          placeholder="Planet image"
        />
      </div>
      <button>Add new Planet</button>
    </form>
  );
};

export default Form;
