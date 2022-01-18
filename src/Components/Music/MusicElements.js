import styled from 'styled-components';

export const MusicContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 3rem 2rem 6rem 2rem;
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
`;

export const Songs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 1rem;

  p {
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5rem;
    letter-spacing: 0.02em;
    text-align: justify;
  }
`;
