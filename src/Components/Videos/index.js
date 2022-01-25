import React from 'react';

import Media from 'react-media';

//components
import VideoDesktop from './videosDesktop';
import VideoMobile from './videosMobile';

function Video() {
  return (
    <>
      <Media queries={{ big: { minWidth: 1000 } }}>
        {(matches) => (matches.big ? <VideoDesktop /> : <VideoMobile />)}
      </Media>
    </>
  );
}

export default Video;
