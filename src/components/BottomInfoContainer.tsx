import React from 'react';
import { Pokemon } from '../types';


interface Props {
    pokemon?: Pokemon;
    speciesInfo?: string;
    psyLogo?: string;
    colorlessLogo?: string;


}

const BottomInfoContainer: React.FunctionComponent<Props> = ({pokemon, speciesInfo, psyLogo, colorlessLogo}) => {
    if(pokemon && speciesInfo){
        //Remove linebreak from species description string
        const speciesInfoFormatted = speciesInfo?.replace(/(\r\n|\n|\r)/gm, " ");

        return(
            <div>
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
                    <p className='col100 centerText' id="bottomTxt">{speciesInfoFormatted} #{pokemon.id}</p> 
                </div>
            </div>
        )
    }
    return null;
};

export default BottomInfoContainer