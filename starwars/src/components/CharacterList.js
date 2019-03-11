import React from 'react';
import Character from './Character';
import'./StarWars.css';

const CharacterList = props =>{
    return (
        <div className= "boxes">
        {props.characters.map(character =>
            <Character character ={character} />
            // <Character character ={character} key= {character.created} />
        )}
        </div>
    );
};

export default CharacterList;