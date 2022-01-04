/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import {
  BsPlayFill,
  BsPauseFill,
  BsFillVolumeUpFill,
  BsFillVolumeOffFill,
} from 'react-icons/bs';
import { BiSkipPrevious, BiSkipNext } from 'react-icons/bi';

export const PlayerContainer = styled.div`
  background: #fff;
  color: #0a0a0a;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 4px rgba(255, 255, 255, 0.2);
  position: fixed;
  bottom: 0;
  z-index: 9999;
`;

export const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;

  div {
    font-size: 15px;
    margin-right: 0.5rem;
  }

  input {
    margin-right: 0.5rem;
  }
`;

export const Controls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: #c0c0c0;
`;

export const Play = styled(BsPlayFill)`
  cursor: pointer;
  color: #0a0a0a;
`;
export const Pause = styled(BsPauseFill)`
  cursor: pointer;
  color: #0a0a0a;
`;
export const Prev = styled(BiSkipPrevious)`
  color: #0a0a0a;
  cursor: pointer;
`;
export const Next = styled(BiSkipNext)`
  color: #0a0a0a;
  cursor: pointer;
`;

export const VolumeControl = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  position: relative;
  width: 40px;
  height: 400px;
  cursor: pointer;

  :hover input {
    opacity: 1;
    transition: all 0.2s ease;
  }

  input {
    cursor: pointer;
    opacity: 0;
    color: #0a0a0a;
    transform: rotate(-90deg);
    position: absolute;
    bottom: 17.5rem;
    right: -2.2rem;
  }
`;

export const VolumeButton = styled(BsFillVolumeUpFill)`
  cursor: pointer;
  color: #0a0a0a;
`;
