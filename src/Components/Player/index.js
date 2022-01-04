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
  VolumeControl,
  VolumeButton,
} from './PlayerElements';

//songs and tracks details
import tracks from './songsDescription';

function Player() {
  const [isPlaying, setisPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [songIndex, setSongIndex] = useState(0);

  const audioPlayer = useRef();
  const progressBar = useRef();
  const animationRef = useRef();

  //Setting the duration
  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [songIndex, audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  //When the audio ends, play the next one automatically
  useEffect(() => {
    audioPlayer?.current?.addEventListener('ended', () => nextSong());
    return () => {
      audioPlayer?.current?.removeEventListener('ended', handleAudio);
    };
  }, []);


  const handleAudio = () => {
    setisPlaying(!isPlaying);

    if (!isPlaying) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying)
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };


  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
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
  };


  // const changePlayerCurrentTime = () => {
  //   if (!isPlaying) return;
  //   setCurrentTime(audioPlayer?.current?.currentTime);
  // }
  // setInterval(changePlayerCurrentTime, 1000);

  const changePlayerCurrentTime = () => {
    //progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`)
    setCurrentTime(progressBar.current.value);
  };


  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };



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
        <input type="range" defaultValue="0" ref={progressBar} onChange={changeRange} />
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

        <VolumeControl>
          <VolumeButton />
          <input onChange={(e) => handleVolume(e)} type="range" defaultValue="5" />

        </VolumeControl>

      </Controls>

    </PlayerContainer>
  );
}

export default Player;
