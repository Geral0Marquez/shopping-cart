import axios from "axios";
import React, {useEffect, useState } from "react";
import ResidentInfo from "./ResidentInfo";
import Page from './Page';
import swal from "sweetalert";



const Location = () => {
  const [search, setSearch] = useState({});
  const [currentPage,setCurrentPage]=useState(1)
  const [postPerPage]=useState(10)
  const [id, setId] = useState("");

  useEffect(() =>
  {
    const random = Math.floor(Math.random()*126)+1;
    axios.get(`https:rickandmortyapi.com/api/location/${random}`).then((res) => setSearch(res.data));
  }, []);




  const searchType = () =>
  {
    console.log(id);
    if(id<=126){axios.get(`https:rickandmortyapi.com/api/location/${id}`).then((res) => setSearch(res.data));}
    else
    {
      swal
      ({
        title:"Ups!",
        icon: "error",
        text:"It was not found, Try it again.",
        button:"Accept",
      })
    }
   
  };
  // tener desde el primer dato y último para darle un rango a la página
  const indexOfLastPost = currentPage * postPerPage
  const indexOfFirstPost = indexOfLastPost - postPerPage
  const currentPost=search.residents?.slice(indexOfFirstPost,indexOfLastPost)

  //cambiar la pagina
  const paginate = (pageNumber)=>
  {setCurrentPage(pageNumber)}


  return (
    <div>
      <div className="button-box">
        <input type="text" onChange={(e) => setId(e.target.value)} value={id} 
        placeholder="type a location id "/>
        <button className="button" onClick={searchType}>Search</button>
      </div>

      <div className="large-image"></div>

      <h3 className="text-center title style ">{search.name}</h3>

      <div className="row">
        <p className="text-center container-direction" ><b className="style">type:  </b>{search.type} </p>
        <p className="text-center container-direction" ><b className="style">dimension:  </b>{search.dimension} </p>
        <p className="text-center container-direction" ><b className="style">population:  </b>{search.residents?.length} </p>
      </div>

      <ul>

        <h2 className="title letter">
          <span>R</span>
          <span>e</span>
          <span>s</span>
          <span>i</span>
          <span>d</span>
          <span>e</span>
          <span>n</span>
          <span>t</span>
          <span>s</span>
        </h2>

        <div className="row">
          {currentPost?.map((resident) =>
          (<ResidentInfo url={resident} key={resident} />))}
        </div>
          
        <div className="card-page">
          <Page postPerPage={postPerPage} residentData={search.residents?.length} paginate={paginate} selected={currentPage}/>
        </div>

      </ul>

    </div>

  );
};

export default Location;