import styled from 'styled-components';
import {
  BsFillPauseCircleFill,
  BsFillVolumeDownFill,
  BsPlayCircleFill,
} from 'react-icons/bs';
import { BiSkipPrevious, BiSkipNext, BiShuffle } from 'react-icons/bi';

export const PlayerContainer = styled.div`
  background: #383838;
  color: white;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 4px rgba(255, 255, 255, 0.2);
  position: fixed;
  bottom: 0;
  z-index: 9999;
`;

export const ArtistLabel = styled.div`
  color: white;
  font-size: 0.6rem;
  width: 30%;
  margin-left: 1rem;
  margin-bottom: 1rem;

  @media screen and (min-width: 1000px) {
    font-size: 0.9rem;
    width: 100%;
    margin: 0rem 0 0 2rem;
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 5px;
  position: absolute;
  left: 50%;
  top: 1rem;
  transform: translate(-50%);
  width: 100%;
`;

export const Controls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.7rem;

  @media screen and (min-width: 1000px) {
    font-size: 2rem;
  }
`;

export const Play = styled(BsPlayCircleFill)`
  cursor: pointer;
  color: white;
  :hover {
    transform: scale(1.1);
  }
`;
export const Pause = styled(BsFillPauseCircleFill)`
  cursor: pointer;
  color: white;
  :hover {
    transform: scale(1.1);
  }
`;
export const Prev = styled(BiSkipPrevious)`
  color: #b5b5b5;
  cursor: pointer;
  :hover {
    color: white;
  }
`;
export const Next = styled(BiSkipNext)`
  color: #b5b5b5;
  cursor: pointer;
  :hover {
    color: white;
  }
`;
export const Shuffle = styled(BiShuffle)`
  color: ${({ isShuffled }) => (isShuffled ? 'white' : '#b5b5b5')};
  cursor: pointer;
  font-size: 1.2rem;
  :hover {
    color: white;
  }
`;

export const AudioTimer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #b5b5b5;
  margin-top: 7px;

  div {
    font-size: 13px;
    margin-right: 0.5rem;
  }

  input {
    margin-right: 0.5rem;
  }

  input[type='range'] {
    -webkit-appearance: none;
    width: 220px;
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
    margin-top: -4.5px;
    :hover {
      transform: scale(1.2);
    }
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

  @media screen and (min-width: 1000px) {
    margin-top: 0px;

    input[type='range'] {
      -webkit-appearance: none;
      width: 600px;
    }
  }
`;

export const VolumeControl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 400px;
  cursor: pointer;
  position: relative;

  :hover input {
    opacity: 1;
    transition: all 0.2s ease;
  }

  input {
    cursor: pointer;
    opacity: 0;
    color: white;
    transform: rotate(-90deg);
    position: absolute;
    bottom: 18.7rem;
    right: -2.7rem;
  }

  input[type='range'] {
    -webkit-appearance: none;
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
    margin-top: -4.5px;
    :hover {
      transform: scale(1.2);
    }
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

export const VolumeButton = styled(BsFillVolumeDownFill)`
  cursor: pointer;
  color: #b5b5b5;
  font-size: 1.5rem;
  margin-bottom: 1.4rem;
  :hover {
    color: white;
  }

  @media screen and (min-width: 1000px) {
    font-size: 1.8rem;
  }
`;
