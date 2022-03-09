import React, { useState } from "react";

const FormSatellites = (props) => {
  const [moonList, setMoonList] = useState([])

  const handleChange = (e) => {
    e.stopPropagation();
    const name = e.target.value;    
    setMoonList([...props.satellites, {name: name}])
  }

  const handleSubmit = (e) =>{
    e.stopPropagation();
    e.preventDefault();
    props.addSatellites(moonList);
  }
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="newMoon">Add new moon:</label>
          <input type="text" name="newMoon" id="newMoon" placeholder="New moon name" onChange={handleChange}/>
          <button>+</button>
        </div>
      </form>
    </>
  )
   
};


export default FormSatellites;
