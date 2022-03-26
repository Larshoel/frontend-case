import React from 'react';
import { Pokemon } from '../types';

interface Props {
  pokemon?: Pokemon;
}

const MovesContainer: React.FunctionComponent<Props> = ({ pokemon }) => {
  if (pokemon) {
    return (
      <div className='MovesContainer'>
        {pokemon.moves}
      </div>
    );
  }
  return null;
};
export default MovesContainer;
