import React from 'react';

import'./StarWars.css';

const Character = props => {
    return(
        <div className="starwar">
        <div>
            <h2>{props.character.name}</h2>
            {/* <img src="https://lumiere-a.akamaihd.net/v1/images/file_2729e1ec.jpeg?width=1200&region=0%2C0%2C2000%2C2000&quality=8" alt="Luke"/> */}
            </div> 
            <div>
            <p><strong>Birth Year: </strong> {props.character.birth_year}</p>
            <p><strong>Height: </strong> {props.character.height}</p>
            <p><strong>Mass: </strong> {props.character.mass}</p>
            <p><strong>Hair Color:</strong> {props.character.hair_color}</p>
            <p><strong>Skin Color:</strong> {props.character.skin_color}</p>
            <p><strong>Eye Color:</strong> {props.character.eye_color}</p>
            <p><strong>Gender:</strong> {props.character.gender}</p>
            <p><strong>Films:</strong> {props.character.films.length}</p>
        </div>
        </div>
    );
};

export default Character;