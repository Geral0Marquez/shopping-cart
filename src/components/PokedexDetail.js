import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import colors from '../colors.json'

// aqui podemos mostrar los movientos del id, las barras dinamicas y todo lo que queramos

const PokedexDetail = () => {
  const [pokeInfo, setPokeInfo] = useState({});


  const {id} = useParams();
  const navigate = useNavigate();

  
  const colorFixed = () => {

    let colorNew = colors.filter(c => {
        
        return c.type === pokeInfo.types?.[0]?.type.name;

    })
    return colorNew[0]?.background
};

  
  

  useEffect(() => {
      axios.get(` https://pokeapi.co/api/v2/pokemon/${id}`)
          .then(res => 
            setPokeInfo(res.data),)
  }, [id])

console.log(pokeInfo)
  return (
    <div>
      <div className='bg py-5 ' style={{backgroundColor: colorFixed()}}>
      <div className='container'>
        <div className='col-sm-8 offset-sm-2' style={{backgroundColor: colorFixed()}}><h2 className='change-t'> {pokeInfo.name}  #{pokeInfo.id} </h2>
        <div className="col-12 col-md-12 col-sm-12 text-center ex">
          <img src={pokeInfo.sprites?.other["official-artwork"]["front_default"]} alt="" className=" card-body-img " /> 
        </div>
        <ul className="list-group list-group-flush mt-4">
          <li className="list-group-item bg-transparent">
            Experience  <b className="float-end">{pokeInfo["base_experience"]}</b>
          </li>
          <li  className="list-group-item bg-transparent">
            Height <b className="float-end">{pokeInfo.height} </b>
          </li>
          <li className="list-group-item bg-transparent">
            Weight <b className="float-end">{pokeInfo.weight}</b>
          </li>
        </ul>
        </div>
      </div>
        <div className='custom-shape-divider-bottom' style={{backgroundColor: colorFixed()}}>
          <svg  data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path  d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill">
            </path>
          </svg>
          </div>
          </div>
          <div className='container my-3'>
            <div className='row'>
              <div className=' col-sm-8 offset-sm-2'>
                <div className='card mb-3'>
                  <div className='card-body '>
                    <h4 className="card-title ">Stats</h4>
                  <div  className="row mt-3">
                    <div className="col-sm-2">
                      <h6 className="text-sm-end mt-1 stats">Hp</h6>
                    </div>
                    <div className="col-sm-10">
                      <div className="progress" style={{ height:"30px"}} >
                        <div  style={{ height:"30px",width:`${pokeInfo.stats?.[0].base_stat}%`,backgroundColor: colorFixed()}}  className=" progress-bar progress-bar-striped effect "><b >{pokeInfo.stats?.[0]["base_stat"]}</b></div>
                      </div></div></div>
                      <div className="row mt-3"><div className="col-sm-2">
                        <h6 className="text-sm-end mt-1 stats">Attack</h6>
                      </div>
                      <div className="col-sm-10"><div className="progress" style={{ height:"30px"}}><div style={{ height:"30px",width:`${pokeInfo.stats?.[1]["base_stat"]}%`,backgroundColor: colorFixed()}}  className=" progress-bar progress-bar-striped"><b>{pokeInfo.stats?.[1]["base_stat"]}</b></div></div></div></div>
                      <div className="row mt-3">
                        <div className="col-sm-2">
                        <h6 className="text-sm-end mt-1 stats">Guard</h6>
                      </div>
                      <div className="col-sm-10"><div className="progress" style={{ height:"30px"}}><div _ style={{ height:"30px",width:`${pokeInfo.stats?.[2]["base_stat"]}%`,backgroundColor: colorFixed()}} className="bg-grass progress-bar progress-bar-striped"><b>{pokeInfo.stats?.[2]["base_stat"]}</b></div></div></div></div>
                      <div className="row mt-3">
                        <div className="col-sm-2">
                          <h6  className="text-sm-end mt-1 stats">Speed</h6>
                        </div><div className="col-sm-10"><div className="progress" style={{ height:"30px"}}><div  style={{ height:"30px",width:`${pokeInfo.stats?.[5]["base_stat"]}%`,backgroundColor: colorFixed()}}  className="bg-grass progress-bar progress-bar-striped"><b> {pokeInfo.stats?.[5]["base_stat"]}</b></div></div></div></div>
                      </div></div>
                      <div className=" grid-u">
                        <div className="text-center container-direction border-c">
                          <h4 className="card-body">Abilities </h4>
                          <div className=" list-group-item border-a">
                            {pokeInfo.abilities?.map((abilitie) => (<div  key={abilitie.ability?.name} >{abilitie.ability?.name}    
                          </div>))}</div>
                        </div>
                        <div className="text-center container-direction border-c">
                          <h4 className="card-body">Types</h4>
                          {pokeInfo.types?.map((type) => (<div className='list-group-item border-a' key={type.type.name} >{type.type.name}</div>))}
                        </div>
                      </div>
                      <div className=' card  container movements-container-detail'><div>
                    <div className='card-body'><div>
                      <h4>Movements</h4></div>
                    <div className='vector-title-movements'>
                      </div><div></div></div><div>
                        <div className='list-movements'>
                          { pokeInfo.moves?.map(move => (
                          <li style={{backgroundColor: colorFixed()}} key={move.move.name}>{move.move.name}</li>
                            ))}
                        </div>
                      </div></div></div></div></div></div>
                  
                      <div className="position-absolute top-0 start-0">
                        <div className="btn btn-lg text-white"  onClick={() => navigate("/pokedex")}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 16 16" className="bi bi-arrow-left"><path  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"></path></svg></div></div>
    </div>

   
  );
};

export default PokedexDetail;


