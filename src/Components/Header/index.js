/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { listEve } from '../../Services/firebase-config';
import PropTypes from 'prop-types';
import { HeaderContainer } from './HeaderElements';

// const urlsGetter = () => {
//   listEve('combatarms - lifetime / )
// };

function Header() {
  const [urlsArray, seturlsArray] = useState([]);

  useEffect(() => {
    seturlsArray(listEve('combatarms-lifetime/'));
  }, []); // <-

  // const handleUrl = async () => {
  //   console.log(seturlsArray(listEve('combatarms-lifetime/')));
  // };

  return (
    <HeaderContainer>
      <img src={urlsArray[0]} alt="dale" />;
      {/* <img src="https://firebasestorage.googleapis.com/v0/b/combat-arms-nostalgic.appspot.com/o/combatarms-lifetime%2FENGINE%202013-12-15%2017-22-45-87.bmp?alt=media&token=d3b2c7e7-8468-448d-8749-76d25d885d93"></img> */}
    </HeaderContainer>
  );
}

Header.propTypes = {
  data: PropTypes.array,
};

export default Header;

// {data.forEach((element) => {
//   <img src={element}></img>;
// })}
