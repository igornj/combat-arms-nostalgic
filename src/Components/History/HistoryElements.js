/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import vector from '../../Assets/teste.svg';

export const HistoryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #0a0a0a;
`;

export const HistoryContent = styled.div`
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
  margin-top: 0rem;

  h1 {
    font-weight: 200;
    text-align: left;
    margin: 8rem 4rem 1rem 4rem;
  }

  p {
    font-weight: 100;
    text-align: justify;
    margin: 0 4rem 1rem 4rem;
    line-height: 1.5rem;
  }

  @media screen and (min-width: 1000px){
    flex-direction: row;
    margin-top: 2rem;
    h1 {
      font-weight: 200;
      text-align: left;
      margin: 8rem 0rem 1rem 4rem;
    }

    p {
      font-weight: 100;
      text-align: justify;
      margin: 0 4rem 4rem 4rem;
      line-height: 1.5rem;
    }
  }

`;

export const WhiteContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  color: #0a0a0a;
  margin-top: 2rem;
  margin-bottom: 4rem;


  h1 {
    font-weight: 200;
    text-align: left;
    margin: 6rem 4rem 1rem 4rem;
  }

  p {
    font-weight: 100;
    text-align: justify;
    margin: 0 4rem 0rem 4rem;
    line-height: 1.5rem;
    font-weight: 300;
  }


  @media screen and (min-width: 1000px){
    flex-direction: row;
  }

`;

export const TextContainer = styled.div`
  width: 100%;
  @media screen and (min-height: 1000px){
    width: 50%;
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
    cursor: pointer;
  }

  .fullscreen

  figcaption {
    font-style: italic;
    color: #0a0a0a;
    margin: 0 1rem;
  }

  @media screen and (min-width: 1000px){
    top: 1.4rem;

    figcaption {
      color: #f0f0f0;
    }
  }
`;



export const ImgFullScreen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background:  rgba(0,0,0,0.9);
  width: 100vw;
  height: 100vh;
  z-index: 99999;

  img {
    width: 85%;
    border-radius: 10px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    cursor: pointer;
  }

  figcaption {
    position: absolute;
    bottom: 1rem;
    color: red;
    background:  #0a0a0a;
    padding : 1rem;
    border-radius: 10px;
    font-size: 2rem;
    font-style: italic;
    color: #0a0a0a;
    margin: 0 1rem;
  }
`;
