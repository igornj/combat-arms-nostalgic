import styled from 'styled-components';

export const MusicContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 3rem 2rem 6rem 2rem;

  @media screen and (min-width: 1000px) {
    flex-direction: row;
    justify-content: space-evenly;
    margin: 7rem 0rem 6rem 0rem;
  }
`;

export const MusicContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 1rem;
  margin-bottom: 1.5rem;

  h1 {
    font-weight: 300;
    font-size: 1.8rem;
  }

  p {
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.5rem;
    letter-spacing: 0.02em;
    text-align: center;
  }

  @media screen and (min-width: 1000px) {
    width: 40%;
  }
`;

export const Songs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 1rem;
  height: 100px;
  overflow-y: auto;

  p {
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5rem;
    letter-spacing: 0.02em;
    text-align: justify;
  }

  @media screen and (min-width: 1000px) {
    margin-left: 2rem;
  }
`;
