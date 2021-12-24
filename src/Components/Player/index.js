import React from 'react';

import { PlayerContainer, Controls, Play, Prev, Next } from './PlayerElements';

function Player() {
  return (
    <PlayerContainer>
      <Controls>
        <Prev />
        <Play />
        <Next />
      </Controls>
    </PlayerContainer>
  );
}

export default Player;
