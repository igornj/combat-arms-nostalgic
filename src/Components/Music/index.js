import React from 'react';

import { MusicContainer, MusicContent, Songs } from './MusicElements';

function Music() {
  return (
    <MusicContainer>
      <MusicContent>
        <h1>Músicas</h1>
        <p>
          Muitas músicas fizeram parte da historia enquanto eu jogava. Decidi
          então colocar uma playlist com maioria das músicas que me marcaram na
          época no player do site.
          <br />
          <br />
          Algumas delas parecem que até vieram do jogo mesmo.
        </p>
      </MusicContent>

      <Songs>
        <p>KDREW - Firestarter</p>
        <p>Limp Bizkit - Behind Blue Eyes (Eyes Remix)</p>
        <p>3OH!3 - Touchin on my</p>
        <p>Jason Derulo - Whatcha Say</p>
      </Songs>
    </MusicContainer>
  );
}

export default Music;
