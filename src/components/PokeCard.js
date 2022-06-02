
import React, { useEffect,useState} from "react";
import axios from 'axios';
import { useNavigate} from "react-router-dom";
import colors from '../colors.json'


const PokeCard = ({pokedexUrl}) => {

    const [pokeInfo, setPokeInfo] = useState({});

    const navigate= useNavigate();
    
    

    useEffect(() => {
      axios.get(pokedexUrl)
      .then((res) => setPokeInfo(res.data));
     
    }, [pokedexUrl]);

   
    
    const backgroundColor = ()=>{
        let backActual = colors.filter(e=>{
            return e.type === pokeInfo.types?.[0].type.name
         });
     return backActual[0]?.background
    };

    return (
        <div className="col-sm-6 col-md-4 col-lg-3 p-3">
            <div className=" h-100">
                <div className= "card-body-1"
                    onClick={() => navigate(`/pokedex/${pokeInfo.id}`) } style={{backgroundColor:backgroundColor(),borderColor: backgroundColor()}}>
                    <img src={pokeInfo.sprites?.other["official-artwork"]["front_default"]} alt="" className="w-100 imagefix" />  
                    <div className="card-color">
                        <h1 style={{color:backgroundColor()}}>{pokeInfo.name}</h1>
                        <div className="pokemon-type"> {pokeInfo.types?.map((type,idx) => (
                            <div className="text" key={idx} >{type.type.name} </div> ))}</div>
                        <h6>type</h6>
                        <div className="grid-info">
                            <div> hp <p style={{color:backgroundColor()}}>{pokeInfo.stats?.[0]["base_stat"]}</p></div>
                            <div>attack<p style={{color:backgroundColor()}}>{pokeInfo.stats?.[1]["base_stat"]}</p></div>
                            <div>defense<p style={{color:backgroundColor()}}>{pokeInfo.stats?.[2]["base_stat"]}</p></div>
                            <div>speed<p style={{color:backgroundColor()}}>{pokeInfo.stats?.[5]["base_stat"]}</p></div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PokeCard;