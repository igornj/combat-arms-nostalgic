/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import { BsPlayFill, BsPauseFill } from 'react-icons/bs';
import { BiSkipPrevious, BiSkipNext } from 'react-icons/bi';

export const PlayerContainer = styled.div`
  background: #10171e;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 4px rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  position: fixed;
  bottom: 0;
  z-index: 9999;
`;

export const Controls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: #c0c0c0;
`;

export const Play = styled(BsPlayFill)``;
//export const Pause = styled(BsPauseFill)``;
export const Prev = styled(BiSkipPrevious)``;
export const Next = styled(BiSkipNext)``;
