/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

import {
  CarouselContainer,
  CarouselImgs,
  RightArrow,
  LeftArrow,
} from './CarouselElements';

//Components
import Loading from '../Loading';

//Images urls
import images from './imageUrls';

function Carousel() {
  const [isLoading, setIsLoading] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);

  const nextImg = () => {
    if (imgIndex >= 0 && imgIndex < images.length) {
      setImgIndex(imgIndex + 1);
    } else if (imgIndex === 318) {
      setImgIndex(0);
    }
  };

  const prevImg = () => {
    if (imgIndex > 0) {
      setImgIndex(imgIndex - 1);
    } else if (imgIndex === 0) {
      setImgIndex(3);
    }
  };

  return (
    <>
      <Loading isLoading={isLoading} />
      <CarouselContainer>
        <CarouselImgs>
          <LeftArrow onClick={prevImg} />
          <div>
            <img src={images[imgIndex].default} alt="combat-arms-img" />
          </div>
          <RightArrow onClick={nextImg} />
        </CarouselImgs>
      </CarouselContainer>
    </>
  );
}

export default Carousel;

// fetch('/reporter/current_user')
// .then(response => response.json())
// .then(files => _.chunk(files, 100).map(cache.addAll))
// .catch(error => console.log(`Error caching file: ${error}`));

// {data.forEach((element) => {
//   <img src={element}></img>;
// })}

// useEffect(() => {
//   seturlsArray(imagesUrls);
// }, []); // <-

// const handleUrl = async () => {
//   console.log(seturlsArray(listEve('combatarms-lifetime/')));
// };s

{
  /* {fileName.map((file, index) => {
          <img
            src={`https://combatarms-lifetime-images.s3.us-east-2.amazonaws.com/${file}`}
            key={index}
            alt="combat-arms"
            onLoad={() => setIsLoading(false)}
          />;
        })} */
}

{
  /* {urlsArray.map((image, index) => {
        return <img key={index} src={image} alt="combat-arms" />;
      })} */
}
