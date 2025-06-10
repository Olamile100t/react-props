import React from 'react';
import {players} from './Players';
import Player from './Player'



const PlayersList = () => {
  return (
    <div className='grid grid-cols-3 m-4 space-x-6 space-y-5 text-center '>
      {players.map((player) => (
        <Player key={player.index} {...player}/>
      ))}
    </div>
  );
};

export default PlayersList;
