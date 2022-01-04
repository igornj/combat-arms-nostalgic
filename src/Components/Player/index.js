/* eslint-disable prettier/prettier */
import React, { useState, useEffect, useRef } from 'react';

import {
  PlayerContainer,
  Info,
  Controls,
  Play,
  Pause,
  Prev,
  Next,
  VolumePlus,
  VolumeRange,
  VolumeMinus,
} from './PlayerElements';

//songs and tracks details
import tracks from './songsDescription';

function Player() {
  const [isPlaying, setisPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [songIndex, setSongIndex] = useState(0);

  const audioPlayer = useRef();

  //Setting the duration
  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
  }, [songIndex, audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  //When the audio ends, play the next one automatically
  useEffect(() => {
    audioPlayer?.current?.addEventListener('ended', () => handleAudio);
    return () => {
      audioPlayer?.current?.removeEventListener('ended', handleAudio);
    };
  }, []);


  const handleAudio = () => {
    setisPlaying(!isPlaying);

    if (!isPlaying) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
  };

  const handleVolume = (e) => {
    audioPlayer.current.volume = e.currentTarget.value / 100;
  };

  const prevSong = async () => {
    if (songIndex > 0 && songIndex < 5) {
      setSongIndex(songIndex - 1);
      await audioPlayer.current.readyState;
      audioPlayer.current.play();
    } else {
      setSongIndex(0)
      await audioPlayer.current.readyState;
      audioPlayer.current.play();
    }

  }

  const nextSong = async () => {
    if (songIndex >= 0 && songIndex < 5) {
      setSongIndex(songIndex + 1);
      await audioPlayer.current.readyState;
      audioPlayer.current.play();
    } else {
      setSongIndex(0)
      await audioPlayer.current.readyState;
      audioPlayer.current.play();
    }

  }


  const changePlayerCurrentTime = () => {
    if (!isPlaying) return;
    setCurrentTime(audioPlayer?.current?.currentTime);
  }
  setInterval(changePlayerCurrentTime, 1000);




  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  return (
    <PlayerContainer>

      <Info>
        <audio ref={audioPlayer} src={tracks[songIndex].src} preload="metadata"></audio>
        <div>{calculateTime(currentTime)}</div>
        <div>-</div>
        <div >{(duration && !isNaN(duration)) && calculateTime(duration)}</div>
        <div >{tracks[songIndex].title}</div>
      </Info>


      <Controls>
        <Prev onClick={prevSong} />
        {isPlaying ? (
          <Pause onClick={handleAudio} />
        ) : (
          <Play onClick={handleAudio} />
        )}
        <Next onClick={nextSong} />

        <VolumeMinus />
        <VolumeRange onChange={(e) => handleVolume(e)} type="range" defaultValue={1} />
        <VolumePlus />
      </Controls>

    </PlayerContainer>
  );
}

export default Player;
