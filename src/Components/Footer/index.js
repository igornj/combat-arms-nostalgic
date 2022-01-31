import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

import {
  FooContainer,
  Socials,
  Instagram,
  Twitter,
  Git,
  Nicks,
  Goahead,
} from './FooterElements';

import goAhead from '../../Assets/goAhead.svg';
import logo from '../../Assets/logo.jpg';

function Footer() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <FooContainer>
      <img onClick={scrollToTop} src={logo} alt="logo" />
      <Socials>
        <h1>Sociais</h1>
        <a
          href="https://www.instagram.com/igor_nj/"
          target="_blank"
          rel="noreferrer"
        >
          <Instagram />
        </a>

        <a target="_blank" href="https://twitter.com/fosade_" rel="noreferrer">
          <Twitter />
        </a>

        <a href="https://github.com/igornj" target="_blank" rel="noreferrer">
          <Git />
        </a>
      </Socials>

      <Nicks>
        <h1>igornj</h1>
        <h1>-Black___S2</h1>
        <h1>bllk-</h1>
        <h1>Fosade</h1>
      </Nicks>
      <p>&copy; Todos os direitos reservados</p>

      <Goahead>
        <img src={goAhead} alt="goAhead" />
      </Goahead>
    </FooContainer>
  );
}

export default Footer;
