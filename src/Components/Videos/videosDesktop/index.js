import React from 'react';

import { VideoContainer, VideoContent, VideoText } from '../VideosElements';

function VideoDesktop() {
  return (
    <VideoContainer id="video">
      <VideoContent>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/2AtfTz8ITI8"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/x3o63-flK6M"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/eWMHYYoE5J4"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/AzWe5GtdoXs"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/0QurhR9qKhA"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/wcSkehsgkhA"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoContent>

      <VideoText>
        <h1>Videos</h1>
        <p>
          Felizmente uma boa parte da minha jornada jogando Combat Arms foi
          registrada em video, tanto ?? ??poca que eu ainda estava jogando no{' '}
          <a href="https://www.youtube.com/user/ScNCaBr">ScreeN</a>, quanto a
          ??poca no{' '}
          <a href="https://www.youtube.com/user/UpperClutchTV">UpperClutch</a>.
          <br />
          <br />
          Aqui separei alguns dos videos mais relevantes pra mim e que costumo
          retornar pra ver, os demais est??o nos hyperlinks.
        </p>
      </VideoText>
    </VideoContainer>
  );
}

export default VideoDesktop;
