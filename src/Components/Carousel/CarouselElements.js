import styled from 'styled-components';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

export const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
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
    width: 90%;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 40px;
    overflow: hidden;
    padding: 20px;
  }
`;

export const LeftArrow = styled(AiOutlineArrowLeft)`
  color: #0a0a0a;
  cursor: pointer;
  font-size: 3rem;
`;
export const RightArrow = styled(AiOutlineArrowRight)`
  color: #0a0a0a;
  cursor: pointer;
  font-size: 3rem;
`;
