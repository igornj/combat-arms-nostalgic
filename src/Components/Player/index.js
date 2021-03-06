/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect, useRef } from 'react';

import {
  PlayerContainer,
  AudioTimer,
  Info,
  ArtistLabel,
  Controls,
  Play,
  Pause,
  Prev,
  Next,
  Shuffle,
  VolumeControl,
  VolumeButton,
} from './PlayerElements';

//songs and tracks details
import tracks from './songsDescription';

function Player() {
  const [isPlaying, setisPlaying] = useState(false);
  const [isShuffled, setisShuffled] = useState(true);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [songIndex, setSongIndex] = useState(0);

  const audioPlayer = useRef();
  const progressBar = useRef();
  const animationRef = useRef();

  //When the component mount, the volume is set low and checks if is shuffled
  useEffect(() => {
    audioPlayer.current.volume = 2 / 100
    if (isShuffled) {
      setSongIndex(shuffledIndex());
    }
  }, []);

  //When the audio ends, play the next one automatically
  useEffect(() => {
    audioPlayer?.current?.addEventListener('ended', async () => {
      if (isShuffled === false && songIndex <= tracks.length) {
        setSongIndex(songIndex + 1)
        const playPromise = await audioPlayer.current.play();

        if (playPromise !== undefined) {
          playPromise.then(_ => {

          })
            .catch(error => {
              console.log(error)
            })
        }
      } else if (isShuffled === false && songIndex >= tracks.length) {
        setSongIndex(0)
        const playPromise = audioPlayer.current.play();

        if (playPromise !== undefined) {
          playPromise.then(_ => {

          })
            .catch(error => {
              console.log(error)
            })
        }
      }

    });
    return () => {
      audioPlayer?.current?.removeEventListener('ended', nextSong);
    };
  }, [songIndex, audioPlayer?.current?.readyState]);


  //When the audio ends and is Shuffled, play the next one random
  useEffect(() => {
    audioPlayer?.current?.addEventListener('ended', () => {
      if (isShuffled) {
        setSongIndex(shuffledIndex());
        const playPromise = audioPlayer.current.play();

        if (playPromise !== undefined) {
          playPromise.then(_ => {

          })
            .catch(error => {
              console.log(error)
            })
        }
      }

    });
    // return () => {
    //   audioPlayer?.current?.removeEventListener('ended', console.log('removed event listener'));
    // };
  }, [songIndex, audioPlayer?.current?.readyState]);




  const onLoadedMetadata = () => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }

  const handleAudio = async () => {
    setisPlaying(!isPlaying);

    if (!isPlaying) {
      await audioPlayer.current.readyState;
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying)
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };


  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime ? audioPlayer.current.currentTime : 0;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };


  const handleVolume = (e) => {
    audioPlayer.current.volume = e.currentTarget.value / 100;
  };


  const prevSong = async () => {
    if (songIndex > 0 && songIndex < tracks.length) {
      setSongIndex(songIndex - 1);
      await audioPlayer.current.readyState;
      audioPlayer.current.play();
      setisPlaying(true);
    } else {
      setSongIndex(0);
      setisPlaying(true);
    }
  }

  const nextSong = async () => {
    if (songIndex >= 0 && songIndex < tracks.length && isShuffled === false) {
      setSongIndex(songIndex + 1);
      await audioPlayer.current.readyState;
      audioPlayer.current.play();
      setisPlaying(true);
    } else if (songIndex >= 0 && songIndex < tracks.length && isShuffled) {
      setSongIndex(shuffledIndex());
      await audioPlayer.current.readyState;
      audioPlayer.current.play();
      setisPlaying(true)
    } else if (songIndex > tracks.length) {
      setSongIndex(0);
      await audioPlayer.current.readyState;
      audioPlayer.current.play();
      setisPlaying(true)
    }

  };


  const shuffledIndex = (min = 0, max = tracks.length) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }


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

      <ArtistLabel>
        <div >{tracks[songIndex].title}</div>
      </ArtistLabel>

      <Info>
        <Controls>
          <Shuffle $isshuffled={isShuffled} onClick={() => setisShuffled(!isShuffled)} />
          <Prev onClick={prevSong} />
          {isPlaying ? (
            <Pause onClick={handleAudio} />
          ) : (
            <Play onClick={handleAudio} />
          )}
          <Next onClick={nextSong} />
        </Controls>

        <AudioTimer>
          <audio ref={audioPlayer} src={tracks[songIndex].src} preload="metadata" onLoadedMetadata={onLoadedMetadata}></audio>
          <div>{calculateTime(currentTime)}</div>
          <input type="range" defaultValue="0" ref={progressBar} onChange={changeRange} />
          <div >{(duration && !isNaN(duration)) && calculateTime(duration)}</div>
        </AudioTimer>
      </Info>


      <VolumeControl>
        <VolumeButton />
        <input onChange={(e) => handleVolume(e)} type="range" defaultValue="5" />
      </VolumeControl>



    </PlayerContainer>
  )
}

export default Player;
