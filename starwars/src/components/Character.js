import React from 'react';

import'./StarWars.css';

const Character = props => {
    return(
        <div>
                <h2>{props.character.name}</h2>
                    <div className = "attributes">
                        <div className ="attributes-names">
                            <p><strong>Birth Year: </strong> </p>
                            <p><strong>Eye Color:</strong></p>
                            <p><strong>Films:</strong></p>
                            <p><strong>Gender:</strong></p>
                            <p><strong>Skin Color:</strong></p>
                        </div>
                        <div className = "attributes-values">
                            <p>{props.character.birth_year}</p>
                            <p>{props.character.eye_color}</p>
                            <p>{props.character.films.length}</p>
                            <p>{props.character.gender}</p>
                            <p>{props.character.skin_color}</p>
                        </div>
                    </div>
                </div>
    );
};

export default Character;