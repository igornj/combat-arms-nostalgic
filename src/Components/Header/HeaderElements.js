import styled from 'styled-components';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Carousel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
  }
`;

export const LeftArrow = styled(FaArrowAltCircleLeft)`
  color: white;
  cursor: pointer;
  font-size: 3rem;
`;
export const RightArrow = styled(FaArrowAltCircleRight)`
  color: white;
  cursor: pointer;
  font-size: 3rem;
`;
