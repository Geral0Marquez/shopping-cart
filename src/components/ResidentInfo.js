/*import axios from "axios";
import React, { useEffect, useState } from "react";

const ResidentInfo = ({ url }) =>{
  const [resident, setResident] = useState({});
  const [color, setColor] = useState("green");

  useEffect(() =>
  {
    if(url)
    {
      axios.get(url).then((res) => setResident(res.data));
      if (resident.status === "Alive") {
        setColor("green");
      } else if (resident.status === "Dead") {
        setColor("red");
      } else {
        setColor("gray");
      }
    }

  }, [url, resident.status]);


  return (
    <div className="container-resident">
      <div className="card">
        <img src={resident.image} alt=""/>
        <div className="data">
          <h4 className="subtitle"><b>{resident.name}</b></h4>
          <h4> <span className={"circle " + color}></span> 
          {resident.status} - {resident.species}</h4>
          <p>origin</p>
          <h4>{resident.origin?.name}</h4>
          <p>episodes where appear</p>
          <h4>{resident.episode?.length}</h4>
        </div>
      </div>
    </div>
    
  );
};

export default ResidentInfo;*/
