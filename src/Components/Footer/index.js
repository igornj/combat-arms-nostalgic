import React from 'react';

import {
  FooContainer,
  Socials,
  Instagram,
  Twitter,
  Git,
  Nicks,
} from './FooterElements';

function Footer() {
  return (
    <FooContainer>
      <Socials>
        <h1>Sociais</h1>
        <a
          href="https://www.instagram.com/igor_nj/"
          target="_blank"
          rel="noreferrer"
        >
          <Instagram />
        </a>

        <a href="https://twitter.com/fosade_" target="_blank" rel="noreferrer">
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
    </FooContainer>
  );
}

export default Footer;
