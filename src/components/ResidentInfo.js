import axios from "axios";
import React, { useEffect, useState } from "react";

const ResidentInfo = ({ url }) =>{
  const [resident, setResident] = useState({});
  



  useEffect(() =>
  {
    axios.get(url).then((res) => setResident(res.data));
  }, [url]);




  return (
    <div className="container-resident">
      <div className="card">
        <img src={resident.image} alt=""/>
        <div className="data">
          <h4 className="subtitle"><b>{resident.name}</b></h4>
          {resident.status} - {resident.species}
          <p>origin</p>
          <h4>{resident.origin?.name}</h4>
          <p>episodes where appear</p>
          <h4>{resident.episode?.length}</h4>
        </div>
      </div>
    </div>
    
  );
};

export default ResidentInfo;