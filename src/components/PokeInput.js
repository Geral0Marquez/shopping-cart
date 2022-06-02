import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { changePoke } from "../store/slices/pokemon.slice";
import { useDispatch } from "react-redux";

const PokeInput = () => {
  const [pokemonName, setPokemonName] = useState("");

  const navigate = useNavigate();
  const dispatch= useDispatch();

  const getName = () => {
    dispatch(changePoke(pokemonName));
    navigate("/pokedex");
  };

  return (
    <div>
      <div className="box-main" >
        <h1 className="title-1 letter padding ">
          <span>W</span>
          <span>i</span>
          <span>k</span>
          <span>i</span>
          <span>d</span>
          <span>e</span>
          <span>x</span>
          <div className="container mt-5 welcome"><span className="color-1 start">let's start</span> </div></h1>
          <form className=" button-box-1 container mt-5" action="" onChange={e => e.preventDefault()} >
            <input 
            type="text" className="input-1"
            value={pokemonName}
            onChange={(e) =>  setPokemonName(e.target.value)}
            placeholder="your name..."
            />
            <button className="button" onClick={getName}>Send</button></form>
          </div>
          <div className="footer">
            <div>.</div>
        </div>
    </div>
    
  );
};

export default PokeInput;

//https://pokeapi.co/api/v2/pokemon

