import { Pokemon } from './types';
import { Moves } from './moves'

export const fetchPokemon = async (pokemonName: string) =>
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then<Pokemon>(
    (res) => {
      const expectedResponseCode = 200;
      if (res.status === expectedResponseCode) {
        
        return res.json();
      }
      throw new Error(
        `Got HTTP status code ${res.status}, when HTTP status code ${expectedResponseCode} was expected`
      );
    }
);
  
export const fetchMoves = async (url: string) =>
    fetch(url).then<Moves>(
      (result) => {
        const expectedResponseCode = 200;
        if(result.status === expectedResponseCode){
          
          return result.json();
        }
        throw new Error(
          `Got HTTP status code ${result.status}, when HTTP status code ${expectedResponseCode} was expected`
        );
      }
  );

  
export const fetchSpeciesInfo = async (url : string) =>
    fetch(url).then(
      (result) => {
        const expectedResponseCode = 200;
        if(result.status === expectedResponseCode){
          
          return result.json();
        }
        throw new Error(
          `Got HTTP status code ${result.status}, when HTTP status code ${expectedResponseCode} was expected`
        );
      }
  );

