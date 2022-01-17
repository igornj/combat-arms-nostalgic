/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { MainContainer, HistoriaBtn } from './MainElements';

//components
import Historia from '../Historia';

function Main() {
  const [historia, setHistoria] = React.useState(false);

  return (
    <MainContainer>
      {historia ? (
        <>
          <HistoriaBtn type="button" onClick={() => setHistoria(!historia)}>
            Historia
          </HistoriaBtn>
          <Historia />
          <HistoriaBtn
            style={{ marginTop: '6rem' }}
            type="button"
            onClick={() => setHistoria(!historia)}
          >
            Fechar historia
          </HistoriaBtn>
        </>
      ) : (
        <>
          <HistoriaBtn type="button" onClick={() => setHistoria(!historia)}>
            Historia
          </HistoriaBtn>
        </>
      )}
    </MainContainer>
  );
}

export default Main;
