/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { MainContainer, HistoryBtn } from './MainElements';
import { useAuth } from '../../Context/AuthContext';

//components
import History from '../History';

function Main() {
  const [historia, setHistoria] = React.useState(false);
  const { isHistoryOpen, setisHistoryOpen } = useAuth();

  return (
    <MainContainer id="historia">
      <HistoryBtn type="button" onClick={() => setHistoria(!historia)}>
        Minha Historia
      </HistoryBtn>
      {isHistoryOpen ? (
        <>
          <History />
          <HistoryBtn
            style={{ marginTop: '6rem' }}
            type="button"
            onClick={() => setisHistoryOpen(!isHistoryOpen)}
          >
            Fechar historia
          </HistoryBtn>
        </>
      ) : (
        <></>
      )}

      {historia ? (
        <>
          <History />
          <HistoryBtn
            style={{ marginTop: '6rem' }}
            type="button"
            onClick={() => setHistoria(!historia)}
          >
            Fechar historia
          </HistoryBtn>
        </>
      ) : (
        <></>
      )}
    </MainContainer>
  );
}

export default Main;
