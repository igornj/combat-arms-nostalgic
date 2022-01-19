import styled from 'styled-components';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  position: relative;
  left: 50%;
  transform: translate(-50%);
`;

export const CarouselImgs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    background: #0a0a0a;
    border-radius: 40px 0 40px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 40px;
    overflow: hidden;
    padding: 20px;
  }
`;

export const Controls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 15rem;
  width: 100%;
  margin-top: 0.8rem;

  @media screen and (min-width: 1000px) {
    column-gap: 75rem;
    position: relative;
    bottom: 26rem;
  }
`;

export const LeftArrow = styled(FaArrowLeft)`
  color: #0a0a0a;
  cursor: pointer;
  font-size: 2rem;
  transition: transform 0.2s ease-in;
  :hover {
    transform: scale(1.2);
  }

  @media screen and (min-width: 1000px) {
    font-size: 3rem;
  }
`;
export const RightArrow = styled(FaArrowRight)`
  color: #0a0a0a;
  cursor: pointer;
  font-size: 2rem;
  transition: transform 0.2s ease-in;
  :hover {
    transform: scale(1.2);
  }

  @media screen and (min-width: 1000px) {
    font-size: 3rem;
  }
`;
