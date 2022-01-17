import styled from 'styled-components';

export const MusicContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 3rem 0rem 4rem 2rem;
`;

export const MusicContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  row-gap: 1rem;
  margin-right: 4rem;
  width: 50%;

  h1 {
    font-weight: 300;
    font-size: 1.8rem;
  }

  p {
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.5rem;
    letter-spacing: 0.02em;
    text-align: justify;
  }

  h2 {
    margin-top: 2rem;
    text-align: center;
    font-size: 1.5rem;
    font-style: italic;
    letter-spacing: 0.295em;
  }
`;

export const Songs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 1rem;
  margin-right: 3rem;

  p {
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5rem;
    letter-spacing: 0.02em;
    text-align: left;
  }
`;
