import React, { useState, useEffect } from 'react';
import { Pokemon } from '../types';
import { Moves } from '../moves'
import { firstToUpper } from '../helper'
import {fetchMoves } from '../utils'

interface Props {
  pokemon?: Pokemon;
}

const MovesContainer: React.FunctionComponent<Props> = ({pokemon}) => {
  
  const [moves, setMoves] = useState<Moves[]>([]);
  useEffect(() => {
    if(pokemon){
      const fetchData = async () => {
        const moveArr : Moves[]=[];
        let numMoves = pokemon.moves.length;

        /*Fetch a random move from the pokemons moveset*/ 
        await fetchMoves(pokemon.moves[randNum(numMoves)].move.url).then((res) => moveArr[0] = res);
        await fetchMoves(pokemon.moves[randNum(numMoves)].move.url).then((res) => moveArr[1] = res);
        setMoves(moveArr);
      }
      fetchData();
    }
  }, [pokemon]);
  
  
  if (pokemon && moves.length === 2) {
    
    //Gets pictures depending on move type
    const imgMove1 = getImg(moves[0].type.name)
    const imgMove2 = getImg(moves[1].type.name)

    return (
      <div id='movesContainer'>
        <div className="col100">
            
            <div className="col15 moveImg">
                <img className='logoMid' src={imgMove1[0].default} alt='Psychic power logo'/>
                <img className='logoMid' src={imgMove1[1].default} alt='Colorless power logo'/>
            </div>    
            
            <div className='col70'>
                <p className='moveDec'> 
                    <span className="moveName"> {firstToUpper(moves[0].name)} </span>
                    {getMoveDesc(moves[0])} 
                </p>
            </div>
            <p className='col15 movePowerTxt'>{moves[0].power}</p>
        </div>
        <div className='col100 blackSplit'></div>
        <div className="col100">
            <div className="col15 moveImg">
                <img className='logoMid' src={imgMove2[0].default}  alt='Psychic power logo'/>
                <img className='logoMid' src={imgMove2[1].default} alt='Psychic power logo'/>
            </div> 
            <div className='col70'>
              <p className='moveDec'> 
                  <span className="moveName">
                      {firstToUpper(moves[1].name)}  
                  </span>

                  {getMoveDesc(moves[1])} 
              </p>
            </div>   
            <p className='col15 movePowerTxt'>{moves[1].power}</p>
        </div>
        
      </div>
    );
  }
  return null;
};

//Returns random number between 1 - max
function randNum(max : number){
  return Math.floor(Math.random() * max)
}

//Returns an array with picture urls based on the attack type
function getImg(type: string){
  let imgArr = []
  let typeImg = require("../resources/"+type+".png")
  imgArr[0] = typeImg

  //50% chance that one of the pictures are of type normal
  if(randNum(2) === 1) imgArr[1] = require("../resources/normal.png")
  else imgArr[1] = typeImg
  
  return imgArr
}

//Returns the move description
function getMoveDesc(move : Moves){
  
  //Checks if the flavored text is in english, if not, find the first english one
  let i = 0
  let moveLang = move.flavor_text_entries[i].language.name
  while (moveLang !== "en"){
    i += 1
    moveLang = move.flavor_text_entries[i].language.name
  }
  
  //Removes linebreak from the flavored text
  const moveDesc = move.flavor_text_entries[i].flavor_text.replace(/(\r\n|\n|\r)/gm, " ");
  return moveDesc;
  
}

export default MovesContainer;
