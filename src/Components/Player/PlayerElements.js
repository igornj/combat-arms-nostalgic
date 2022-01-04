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
export const VolumeMinus = styled(BsFillVolumeOffFill)``;
export const VolumePlus = styled(BsFillVolumeUpFill)``;
export const VolumeRange = styled.input`
  cursor: pointer;
`;
