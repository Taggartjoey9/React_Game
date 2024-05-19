import { useState } from 'react';


export default function Player({initialName, symbol}) {

    const [playerName, setPlayerName] = useState(initialName)

    const [isEditing, setIsEditing] = useState(false)

    function handleUpdatedName(event) {
        setPlayerName(event.target.value)
    }

    function handleEditClick() {
        setIsEditing((isEditing) => !isEditing)
    }

    let editPlayerName = <span className="player-name">{playerName}</span>  

    if(isEditing) {
        editPlayerName = <input type='text' required value={playerName} onChange={handleUpdatedName}/>
    }


    return (
        <li>
            <span className="player">
              {editPlayerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
          </li>
    )
}