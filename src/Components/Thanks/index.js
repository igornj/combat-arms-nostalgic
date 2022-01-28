import React from 'react';

import { ThanksContainer, ThanksText, Icons } from './ThanksElements';

import levelup from '../../Assets/leveluplogo.png';
import combatarms from '../../Assets/combatarmslogo.png';
import upperclutch from '../../Assets/upc-logo.png';
import screen from '../../Assets/screenlogo.png';

function Thanks() {
  return (
    <ThanksContainer>
      <ThanksText>
        <h1>Agradecimentos</h1>
        <p>
          Toda essa historia não existiria se não fosse por algumas coisas, que
          mesmo eu sem perceber no momento, estavam marcando uma parte não só da
          minha vida como de muitas outras pessoas.
          <br />
          <br />
          Eu gosto de ficar relembrando de coisas boas do passado, é essa com
          certeza é a melhor delas.
          <br />
          <br />
          <b>Obrigado.</b>
        </p>
      </ThanksText>
      <Icons>
        <img src={levelup} alt="levelupgames" />
        <img src={combatarms} alt="combatarms" />
        <img src={upperclutch} alt="upperclutch" />
        <img src={screen} alt="screen" />
      </Icons>
    </ThanksContainer>
  );
}

export default Thanks;
