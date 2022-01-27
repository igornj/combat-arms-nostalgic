import styled from 'styled-components';

export const ThanksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 6rem 2rem 6rem 2rem;
`;

export const ThanksText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 1rem;
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

  @media (min-width: 1000px) {
    max-width: 90%;
  }
`;

export const Icons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;

  img {
    width: 20%;
  }

  img:first-child {
    position: relative;
    right: 1rem;
  }

  img:last-child {
    position: relative;
    right: 0.5rem;
  }

  @media (min-width: 1000px) {
    img {
      width: 10%;
    }
  }
`;
