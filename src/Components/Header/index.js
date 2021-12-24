/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

import { HeaderContainer } from './HeaderElements';
import { imagesUrls } from './imageUrls';

// const urlsGetter = () => {
//   listEve('combatarms - lifetime / )
// };

function Header() {
  const [urlsArray, seturlsArray] = useState([]);

  // useEffect(() => {
  //   seturlsArray(imagesUrls);
  // }, []); // <-

  // const handleUrl = async () => {
  //   console.log(seturlsArray(listEve('combatarms-lifetime/')));
  // };s

  return (
    <HeaderContainer>
      {/* {urlsArray.map((image, index) => {
        return <img key={index} src={image} alt="combat-arms" />;
      })} */}
      <div />
    </HeaderContainer>
  );
}

export default Header;

// {data.forEach((element) => {
//   <img src={element}></img>;
// })}
