import React from 'react';
import { Pokemon } from '../types';
import { Moves } from '../moves'

interface Props {
    pokemon?: Pokemon;
    moves?: Moves;
    
}

const PictureContainer: React.FunctionComponent<Props> = ({ pokemon, moves }) => {
  

  if (pokemon) {
      return (
        <div className='PictureContainer'>
          <img
            src={pokemon.sprites.other.dream_world.front_default}
            alt={`${pokemon.name} illustration`}
          />
          <p>foo</p>
          
          
        </div>
      );
    }
    return null;
  };
  

export default PictureContainer;