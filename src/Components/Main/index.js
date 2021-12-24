/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { MainContainer, MainContent, ImgContainer } from './MainElements';

//images
import alanImg from '../../Assets/00.png';
import caImg from '../../Assets/01.bmp';

//components
import Player from '../Player';

function Main() {
  const [toggleImg, setToggleImg] = React.useState(false);

  const toggle = () => {
    setToggleImg(!toggleImg);
  };

  console.log(toggleImg);

  return (
    <MainContainer>
      <MainContent>
        <h1>Inicio da rodada</h1>
        <p>
          Em 2010, meu melhor amigo Alan "flyggon" Pinheiros me falou sobre esse
          FPS que era de graça, leve pro meu PC positivo dual core e divertido
          pra cacete. Mesmo ja tendo visto o jogo no pc dele eu ficava enrolando
          pra baixar e finalmente testar. Até que no natal do mesmo ano eu
          decidi parar de jogar o famoso "Habbo Hotel" que eu tava viciado na
          época, pra finalmente instalar o lendário Combat Arms, jogo que em
          pouco tempo chegou até na comunidade de outros jogos como o
          Counter-strike e CrossFire, se tornando uma novidade na época.
        </p>

        <ImgContainer>
          <img
            src={alanImg}
            alt="Alan na esquerda e eu na direita."
            onClick={toggle}
          />
          <figcaption style={{ textAlign: 'center', fontStyle: 'italic' }}>
            Alan na esquerda e eu na direita.
          </figcaption>
        </ImgContainer>

        <h1>O Grande "igornj"</h1>
        <p>
          No inicio de 2011 eu ja tava completamente entregue ao jogo. Eu saia
          da escola louco pra jogar e ia dormir ainda pensando no jogo. Nessa
          época, o unico nick que eu tinha em mente pra qualquer jogo era
          "igornj", que é basicamente meu nome com as iniciais dos meus
          sobrenomes: "Igor Nunes Jardim". <br />O diferencial maior nessa época
          dentro do jogo era as pantentes que funcionavam como seu nivel dentro
          do jogo. Quanto maior a sua patente mais "brabo" você era. Inclusive
          foi o motivo de eu tirar a primeira print minha dentro do jogo. O
          lendário "JuPanteraBR", jogador com a maior patente do jogo até então
          estava dentro do mesmo lobby que eu.
        </p>
        <ImgContainer>
          <img src={caImg} alt="Minha primeira print dentro do jogo" />
          <figcaption style={{ textAlign: 'center', fontStyle: 'italic' }}>
            Minha primeira print dentro do jogo.
          </figcaption>
        </ImgContainer>
      </MainContent>
      <Player />
    </MainContainer>
  );
}

export default Main;

// E descobri que tudo que ma falavan sobre o jogo era verdade.Mal eu sabia, que por conta desse jogo eu conheceria amigos que eu levaria pra vida e
// momentos inesqueciveis.
