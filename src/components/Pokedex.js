import React, { useEffect,useState} from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import PokeCard from "./PokeCard";
import { useNavigate } from "react-router-dom";



const Pokedex = () => {

  const pokemon= useSelector(state=> state.pokemon);
  const [pokedex, setPokedex]= useState([]);
  const [pokeTypes, setPokeTypes]= useState([]);
  const [pokeSearch, setPokeSearch] = useState("");
  
  
  useEffect(() => {
    axios
      .get(" https://pokeapi.co/api/v2/pokemon")
      .then((res) => setPokedex(res.data.results));

      axios
      .get("https://pokeapi.co/api/v2/type")
      .then((res) => setPokeTypes(res.data.results));

  }, []);

  console.log(pokeTypes)

 
  const navigate = useNavigate();

  const search = () => {
    navigate(`/pokedex/${pokeSearch}`);
  };

  const filterPoke = e =>{
    if(e.target.value !=='All pokemons'){
        axios.get(e.target.value)
        .then(res=>setPokedex(res.data.pokemon))
    }else{
        axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126')
            .then(r=>{
            setPokedex(r.data.results);
            
        });

    };
    
};


const [page,setPage] = useState(1);
const [pokemonNumbers]= useState(20);
const paginate=(pageNumber)=>{setPage(pageNumber)}
const lastIndex= pokemonNumbers*page;
const firstIndex= lastIndex-pokemonNumbers;
const pokemonPaginated= pokedex?.slice(firstIndex,lastIndex);
const lastPage= Math.ceil( pokedex?.length/pokemonNumbers);
const numberPages=[];
for(let i=1;i<=lastPage;i++){
  if(i<page+5 && i>page-5){
      if(numberPages.length<10){
          numberPages.push(i);
      }

  }
 
}

  return (
    <div>
       <div className="position-absolute top-0 start-0"><div className="btn btn-lg text-white"  onClick={() => navigate("/")}><svg _ngcontent-cuh-c7="" xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 16 16" className="bi bi-arrow-left"><path _ngcontent-cuh-c7="" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"></path></svg></div></div>
      <div className="grid">
        <div className="background-1 ">
          <h1 className="title letter ">
            <span>W</span>
            <span>i</span>
            <span>k</span>
            <span>i</span>
            <span>d</span>
            <span>e</span>
            <span>x</span>
          </h1>
        </div>
        
        <div className="background-2 ">
        <img className=" o" style={{width:"60px", height:"60px"}} alt="" src="img/poke.png"/>
        </div>
        
      </div>
      <div className="container mt-5"><span className="color">Welcome {pokemon}!</span> 
     <p> here you can find your favorite pokemon </p></div>
     <div className="container mt-5 grid-1">
       <form className="button-box " action="" onChange={e => e.preventDefault()}>
          <input className="input"
            type="text"
            value={pokeSearch}
            onChange={(e) => setPokeSearch(e.target.value)}
            placeholder="search for characters"
          />
            
            <button className="button" onClick={search}>
            <p className="search">Search</p> 
            </button>
          
          
        </form>
        
        <div className="select">
        <select onChange={filterPoke}>
                    <option>
                        All pokemons
                    </option>
                    {
                        pokeTypes?.map(type=>(
                            <option key={type.name} value={type.url}>{type.name}</option>
                        ))
                    }
                </select>
      
        </div>  
      </div>

      
      <div className="d-flex flex-wrap container mt-5">{
         pokemonPaginated?.map(pokedex=>(
        <PokeCard  key={pokedex.url !== undefined ? pokedex.url : pokedex.pokemon.url}
        pokedexUrl={pokedex.url !== undefined ? pokedex.url : pokedex.pokemon.url} />
        ))
      }</div>
      <div className='pagination '>
        <button onClick={() => setPage(page-1)}disabled={page===1} >
          <div> <i className="fa-solid fa-angles-left"></i></div>
        </button>
        
          {numberPages?.map(numberPage=>(
          <div className="unique" key={numberPage}>
            <button onClick={()=>paginate(numberPage)}>
              {numberPage}
              </button>
              </div>))}
      
        <button onClick={() => setPage(page +1)} disabled={page === lastPage} >
        <div ><i className="fa-solid fa-angles-right"></i> </div>
        </button>
      </div>
    </div>
  );
};

export default Pokedex;








