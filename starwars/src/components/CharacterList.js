import React from 'react';
import Character from './Character';
import'./StarWars.css';

const CharacterList = props =>{
    return (
        <div className= "container">
            {props.starwarsChars.map(character =>
                <div key ={character.name} className="card">  
                     {/* map needs a key  */}
                    <Character character = {character} />
                </div>
             )}
        </div>
    );
};

export default CharacterList;