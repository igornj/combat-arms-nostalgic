/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../Assets/logo.jpg';

import {
  HeaderContainer,
  NavContainer,
  NavElements,
  NavMenu,
  Socials,
  Logo,
  Twitter,
  Instagram,
  Github,
} from './HeaderElements';

function Header() {
  return (
    <>
      <NavContainer>
        <NavElements>
          <Logo to="/">
            <img src={logo} alt="logo" />
          </Logo>
          <NavMenu>
            <Link to="#historia">
              <h1>Historia</h1>
            </Link>

            <Link to="/">
              <h1>Videos</h1>
            </Link>

            <Link to="/">
              <h1>Músicas</h1>
            </Link>

            <Link to="/">
              <h1>Sobre</h1>
            </Link>
          </NavMenu>

          <Socials>
            <Link to="https://twitter.com/fosade_">
              <Twitter />
            </Link>

            <Link to="https://www.instagram.com/igor_nj/">
              <Instagram />
            </Link>

            <Link to="https://github.com/igornj">
              <Github />
            </Link>
          </Socials>
        </NavElements>
      </NavContainer>
      <HeaderContainer>
        <h1>COMBAT ARMS</h1>
        <h2>TIMELINE</h2>
      </HeaderContainer>
    </>
  );
}

export default Header;
