/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../Assets/logo.jpg';
import timeline from '../../Assets/TIMELINE.svg';

import Sidebar from '../Sidebar';

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
  MenuOpenHam,
  MenuClosedHam,
} from './HeaderElements';

function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <NavContainer>
        <Sidebar isOpen={isOpen} />
        <NavElements>
          <Logo to="/">
            <img src={logo} alt="logo" />
          </Logo>
          <NavMenu>
            <Link to="#historia">
              <h1>Historia</h1>
            </Link>

            <Link to="/">
              <h1>Músicas</h1>
            </Link>

            <Link to="/">
              <h1>Vídeos</h1>
            </Link>

            <Link to="/">
              <h1>Sobre</h1>
            </Link>
          </NavMenu>

          <Socials>
            <a href="https://twitter.com/fosade_">
              <Twitter />
            </a>

            <a href="https://www.instagram.com/igor_nj/">
              <Instagram />
            </a>

            <a href="https://github.com/igornj">
              <Github />
            </a>
          </Socials>
          {isOpen ? (
            <MenuClosedHam onClick={() => setIsOpen(!isOpen)} />
          ) : (
            <MenuOpenHam onClick={() => setIsOpen(!isOpen)} />
          )}
        </NavElements>
      </NavContainer>
      <HeaderContainer>
        <h1>COMBAT ARMS</h1>
        <p>TIMELINE</p>
        <img src={timeline} alt="timeline" />
      </HeaderContainer>
    </>
  );
}

export default Header;
