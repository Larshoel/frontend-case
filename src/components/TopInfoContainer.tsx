import React from 'react';
import { Pokemon } from '../types';
import {firstToUpper} from '../helper'

interface Props {
    pokemon?: Pokemon;
    psyLogo?: string;
}

const TopInfoContainer: React.FunctionComponent<Props> = ({pokemon, psyLogo}) => {
    if(pokemon){
        return(
            <div id='col100'>
                <div className='col50' id="topBox">
                    <span id="type">{firstToUpper(pokemon.types[0].type.name)}</span>
                    <span id="name">{firstToUpper(pokemon.name)} </span>
                </div>
                <div className='col50'>
                    <div className='floatRight'>
                        <img className='logoTop inline floatRight' src={psyLogo} alt='Psychic power logo'/>
                        <p className='inline floatRight' id="hp">{pokemon.stats[0].base_stat}{pokemon.stats[0].stat.name.toUpperCase()}</p>
                    </div>
                </div>
                
            </div>
        )
    }
    return null;
};

export default TopInfoContainer