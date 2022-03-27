import React from 'react';
import { Pokemon } from '../types';

interface Props {
    pokemon?: Pokemon;
    edition?: string;
}

const PictureContainer: React.FunctionComponent<Props> = ({pokemon, edition}) => {
  if (pokemon) {
    
    //Converts height and weight to kg and meters
    const height = pokemon.height/10
    const weight = pokemon.weight/10
    
    return (
        <div className='col100'>
          <div id='pictureContainer'>
            <img
                id='mainPic'
                src={pokemon.sprites.other.dream_world.front_default}
                alt={`${pokemon.name} illustration`}
            />
          </div>
          <div className='col100'>
            <img id="editionBadge" src={edition} alt='1st edition badge'/>
            <div id='imgTxt'>
              Genetic Pokemon. Length: {height}m, Weight: {weight}kg
            </div>
          </div>
        </div>
        
      );
    }
    return null;
  };
  

export default PictureContainer;