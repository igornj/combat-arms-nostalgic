import styled from 'styled-components';

export const AboutContainer = styled.div`
  display: flex;
  row-gap: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3rem 2rem;
  text-align: center;

  h1 {
    font-weight: 300;
    font-size: 1.8rem;
  }

  p {
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.5rem;
    letter-spacing: 0.02em;
  }

  h2 {
    margin-top: 2rem;
    text-align: center;
    font-size: 1.5rem;
    letter-spacing: 0.295em;
  }
`;
