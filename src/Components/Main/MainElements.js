/* eslint-disable prettier/prettier */
import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #0a0a0a;
  margin: 2rem;

  @media screen and (min-width: 1090px){
    display: grid;
    grid-template-colums: 2fr;
  }

`;

export const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 4rem 0rem;
    line-height: 1.5rem;
    gap: 1rem;
    width: 100%;

  h1 {
    font-weight: 200;

  }

  p {
    text-align: justify;
  }

`;

export const ImgContainer = styled.div`
  margin-bottom: 3rem;

  img {
    max-width: 100%;
    border-radius: 10px;
  }

  p {
    font-style: italic;
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
