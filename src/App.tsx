import React, { useEffect, useState } from 'react';
import { fetchPokemon, fetchSpeciesInfo } from './utils';
import { Pokemon } from './types';


import psyLogo from "./resources/psychic.png"
import colorlessLogo from "./resources/normal.png"
import edition from "./resources/edition.png"

import TopInfoContainer from './components/TopInfoContainer';
import PictureContainer from './components/PictureContainer';
import MovesContainer from './components/MovesContainer';
import BottomInfoContainer from './components/BottomInfoContainer';

import './app.css';

const App = () => {
  
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [speciesInfo, setSpeciesInfo] = useState<"">();
  
  

  useEffect(() => {
    
    fetchPokemon('mewtwo').then((res) => {
      setPokemon(res)
      fetchSpeciesInfo(res.species.url).then((res) => setSpeciesInfo(res.flavor_text_entries[0].flavor_text))
      
    });
  }, []);

  
  if(pokemon){

    return (
      <div className='appRoot'>        
         <div id='cardContainer'>
            <TopInfoContainer pokemon={pokemon} psyLogo={psyLogo} />
            <PictureContainer pokemon={pokemon} edition={edition} />
            <MovesContainer pokemon={pokemon} />
            <BottomInfoContainer pokemon={pokemon} speciesInfo={speciesInfo} psyLogo={psyLogo} colorlessLogo={colorlessLogo} />
        </div>
      </div>
    );
  }
  else{
    return(
      <div className="appRoot">
        <p>Loading....</p>
      </div>
    )
  };
}



export default App;
