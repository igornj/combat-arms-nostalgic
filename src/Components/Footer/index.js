import React from 'react';
import { Link } from 'react-router-dom';

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
        <Link to="">
          <Instagram />
        </Link>

        <Link to="">
          <Twitter />
        </Link>

        <Link to="">
          <Git />
        </Link>
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
