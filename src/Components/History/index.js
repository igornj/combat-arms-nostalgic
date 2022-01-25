/* eslint-disable no-unused-vars */
import React from 'react';
import Media from 'react-media';

//components
import HistoryDesktop from './historyDESKTOP';
import HistoryMobile from './historyMOBILE';

function History() {
  const [toggleImg, setToggleImg] = React.useState(false);

  const toggle = () => {
    setToggleImg(!toggleImg);
  };

  //console.log(toggleImg);

  return (
    <>
      <Media queries={{ big: { minWidth: 1000 } }}>
        {(matches) => (matches.big ? <HistoryDesktop /> : <HistoryMobile />)}
      </Media>
    </>
  );
}

export default History;
