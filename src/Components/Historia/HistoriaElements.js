/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import vector from '../../Assets/teste.svg';

export const HistoriaContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #0a0a0a;

`;

export const HistoriaContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
`;

export const BlackContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url(${vector});
  background-repeat: no-repeat;
  background-size: cover;
  color: #f0f0f0;
  margin-top: 2rem;


  h1 {
    font-weight: 200;
    text-align: left;
    margin: 6rem 4rem 1rem 4rem;
  }

  p {
    font-weight: 100;
    text-align: justify;
    margin: 0 4rem 1rem 4rem;
    line-height: 1.5rem;
  }

`;

export const WhiteContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 1rem;
  width: 100%;
  color: #0a0a0a;
  margin-top: 2rem;
  margin-bottom: 4rem;


  h1 {
    font-weight: 200;
    text-align: left;
    margin: 6rem 4rem 0rem 4rem;

  }

  p {
    font-weight: 100;
    text-align: justify;
    margin: 0 4rem 0rem 4rem;
    line-height: 1.5rem;
    font-weight: 300;
  }

`;

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 2.5rem;

  img {
    max-width: 80%;
    border-radius: 10px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  figcaption {
    font-style: italic;
    color: #0a0a0a;
  }
`;



// export const ImgFullScreen = styled.div`
//   position: absolute;
//   top: 0;
//   background:  rgba(0,0,0,0.8);
//   width: 100%;
//   height: 100vh;
//   z-index: 9999;

//   img{
//     width: 200px;
//   }

// `;
