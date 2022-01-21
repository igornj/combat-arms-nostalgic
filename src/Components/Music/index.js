import React from 'react';

import { MusicContainer, MusicContent, Songs } from './MusicElements';
import tracks from '../Player/songsDescription';

function Music() {
  return (
    <MusicContainer id="musica">
      <MusicContent>
        <h1>Músicas</h1>
        <p>
          Muitas músicas fizeram parte da historia enquanto eu jogava. Decidi
          então cria uma playlist com maioria das músicas que me marcaram na
          época no player do site.
          <br />
          <br />
          Algumas delas parecem que até vieram do jogo mesmo.
        </p>
      </MusicContent>

      <Songs>
        {tracks.map((track) => {
          return <p key={track.src}>{track.title}</p>;
        })}
      </Songs>
    </MusicContainer>
  );
}

export default Music;
