import React, { useEffect, useState } from 'react';
import { Pokemon } from '../types';
import { Moves } from '../moves'
import { fetchMoves } from '../utils';
import psyLogo from "../resources/psyLogo.png"
import colorlessLogo from "../resources/colorlessLogo.png"
import edition from "../resources/edition.png"



interface Props {
    pokemon?: Pokemon;
    moves?: Moves;
}

const CardContainer: React.FunctionComponent<Props> = ({ pokemon, moves }) => {
  
const [move1, setMove1] = useState<Moves>();
const [move2, setMove2] = useState<Moves>();


useEffect(() => {
    fetchMoves('94').then((result) => setMove1(result));
    fetchMoves('93').then((result) => setMove2(result));

}, []);

  if (pokemon && move1 && move2) {
    
    //Conerverts height and weight to kg and meters
    const height = pokemon.height/10
    const weight = pokemon.weight/10

    //Removes linebreak from move description
    const move1Dec = move1.flavor_text_entries[54].flavor_text.replace(/(\r\n|\n|\r)/gm, " ");
    const move2Dec = move2.flavor_text_entries[64].flavor_text.replace(/(\r\n|\n|\r)/gm, " ");

      return (
        <div id='cardContainer'>
            <div id='col100'>
                <div className='col50' id="name">
                    {pokemon.name.charAt(0).toUpperCase()}{pokemon.name.slice(1)} 
                </div>
                <div className='col50'>
                    <div className='floatRight'>
                        <img className='logoTop inline floatRight' src={psyLogo} alt='Psychic power logo'/>
                        <p className='inline floatRight' id="hp">90 HP</p>
                    </div>
                </div>
                
            </div>
            
            <div id='pictureContainer'>
                <img
                    id='mainPic'
                    src={pokemon.sprites.other.dream_world.front_default}
                    alt={`${pokemon.name} illustration`}
                />
            </div>
            <img className='inline' id="editionBadge" src={edition} alt='1st edition badge'/>
            <div className='inline' id='imgTxt'>
                Genetic Pokemon. Length: {height}m, Weight: {weight}kg
            </div>
            <div id='movesContainer'>
                <div className="col100">
                    
                    <div className="col15 moveImg">
                        <img className='logoMid' src={psyLogo} alt='Psychic power logo'/>
                        <img className='logoMid' src={colorlessLogo} alt='Colorless power logo'/>
                    </div>    
                    
                    <div className='col70'>
                        <p className='moveDec'> 
                            <span className="moveName">
                                {move1.name.charAt(0).toUpperCase()}{move1.name.slice(1)}  
                            </span>
                        
                            {move1Dec} 
                        </p>
                    </div>
                    <p className='col15 movePowerTxt'>10+</p>
                </div>
                <div className='col100 blackSplit'></div>
                <div className="col100">
                    <div className="col15 moveImg">
                        <img className='logoMid' src={psyLogo} alt='Psychic power logo'/>
                        <img className='logoMid' src={psyLogo} alt='Psychic power logo'/>

                    </div>    
                    <p className='col70 moveDec'> 
                        <span className="moveName">
                            {move2.name.charAt(0).toUpperCase()}{move2.name.slice(1)}  
                        </span>
                        
                        {move2Dec} 
                    </p>
                </div>
            </div>
            <div className='col100 blackSplit'></div>

            <div className='col100'>
                <div className='col100' id='biInfo'>
                    <p className='col33 centerText'>weakness</p>
                    <p className='col33 centerText'>resistance</p>
                    <p className='col33 centerText'>retreat cost</p>
                </div>

                <div className='col100'>
                    <div className='col50'>
                        <img className='logoBottom padding25' src={psyLogo} alt='Psychic power logo'/>
                    </div>
                        
                    <div className='col50'>
                        <img className='logoBottom padding45 ' src={colorlessLogo} alt='Colorless power logo'/>
                        <img className='logoBottom  ' src={colorlessLogo} alt='Colorless power logo'/>
                        <img className='logoBottom ' src={colorlessLogo} alt='Colorless power logo'/>
                    </div>
                </div>
            </div>
            <div className='col100'>
            
                
                <div className='col100'>
                    <p className='col100 centerText' id="bottomTxt">A scientist created this Pokémon after years of horrific gene-splicing and DNA engineering experiments #{pokemon.id}</p> 
                </div>            
            </div>
            
        </div>
      );
    }
    return null;
  };
  

export default CardContainer;