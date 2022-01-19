import styled from 'styled-components';
import vector from '../../Assets/teste.svg';

export const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${vector});
  background-size: cover;
  width: 100%;

  a {
    text-decoration: none;
    color: #f0f0f0;
    font-weight: bold;
    transition: all 0.3s ease;

    :hover {
      color: #696969;
    }
  }

  @media screen and (min-width: 1000px) {
    flex-direction: row;
  }
`;

export const VideoText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 1rem;
  text-align: center;
  margin: 4rem 2rem 4rem 2rem;

  h1 {
    font-weight: 300;
    font-size: 1.8rem;
    color: #f0f0f0;
  }

  p {
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.5rem;
    letter-spacing: 0.02em;
    color: #f0f0f0;
  }

  @media screen and (min-width: 1000px) {
    margin: 4rem 4rem 4rem 2rem;
    text-align: center;
    align-items: center;
    width: 70%;
  }
`;

export const VideoContent = styled.div`
  display: flex;
  background: #383838;
  width: 100%;
  min-width: 290px;
  column-gap: 1.5rem;
  overflow-x: scroll;
  overflow-y: hidden;
  margin: 3rem 0rem 6rem 0rem;

  @media screen and (min-width: 1000px) {
    margin: 6rem 0rem 6rem 5rem;
  }
`;
