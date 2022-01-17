import styled from 'styled-components';
import { BsPlayFill, BsPauseFill, BsFillVolumeDownFill } from 'react-icons/bs';
import { BiSkipPrevious, BiSkipNext, BiShuffle } from 'react-icons/bi';

export const PlayerContainer = styled.div`
  background: #ababab;
  color: #0a0a0a;
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
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
  position: relative;
  bottom: 11.2rem;

  div {
    font-size: 15px;
    margin-right: 0.5rem;
  }

  input {
    margin-right: 0.5rem;
  }

  input[type='range'] {
    -webkit-appearance: none;
    width: 100%;
  }
  input[type='range']:focus {
    outline: none;
  }
  input[type='range']::-webkit-slider-runnable-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    background: #3071a9;
    border-radius: 1.3px;
    border: 0.2px solid #010101;
  }
  input[type='range']::-webkit-slider-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid #000000;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background: #ffffff;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -5px;
  }
  input[type='range']:focus::-webkit-slider-runnable-track {
    background: #367ebd;
  }
  input[type='range']::-moz-range-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    background: #3071a9;
    border-radius: 1.3px;
    border: 0.2px solid #010101;
  }
  input[type='range']::-moz-range-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid #000000;
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: #ffffff;
    cursor: pointer;
  }
  input[type='range']::-ms-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    border-width: 16px 0;
    color: transparent;
  }
  input[type='range']::-ms-fill-lower {
    background: #2a6495;
    border: 0.2px solid #010101;
    border-radius: 2.6px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }
  input[type='range']::-ms-fill-upper {
    background: #3071a9;
    border: 0.2px solid #010101;
    border-radius: 2.6px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }
  input[type='range']::-ms-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid #000000;
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: #ffffff;
    cursor: pointer;
  }
  input[type='range']:focus::-ms-fill-lower {
    background: #3071a9;
  }
  input[type='range']:focus::-ms-fill-upper {
    background: #367ebd;
  }
`;

export const ArtistLabel = styled.div`
  position: absolute;
  left: 2rem;
  width: 20%;
  color: #0a0a0a;
  font-size: 0.8rem;
`;

export const Controls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.7rem;
  margin-left: 1.5rem;
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
  :active {
    color: red;
  }
`;
export const Shuffle = styled(BiShuffle)`
  color: #0a0a0a;
  cursor: pointer;
  font-size: 1.2rem;
`;

export const VolumeControl = styled.div`
  position: relative;
  top: 11.5rem;
  left: 14rem;
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
    bottom: 30.2rem;
    right: -2.2rem;
  }
`;

export const VolumeButton = styled(BsFillVolumeDownFill)`
  cursor: pointer;
  color: #0a0a0a;
  font-size: 1.5rem;
`;
