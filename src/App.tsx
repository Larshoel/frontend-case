import React, { useEffect, useState } from 'react';
import { fetchPokemon } from './utils';
import { Pokemon } from './types';

import CardContainer from './components/CardContainer';
import './app.css';

const App = () => {
  
  const [pokemon, setPokemon] = useState<Pokemon>();
  
  useEffect(() => {
    fetchPokemon('mewtwo').then((res) => setPokemon(res));
    
  }, [setPokemon]);

  if(pokemon){
    return (
      <div className='appRoot'>        
        <CardContainer pokemon = {pokemon} />
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
