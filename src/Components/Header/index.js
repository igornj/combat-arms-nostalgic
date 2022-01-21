import React, { useEffect } from 'react';
import { useAuth } from '../../Context/AuthContext';

import logo from '../../Assets/logo.jpg';
import timeline from '../../Assets/TIMELINE.svg';

import Sidebar from '../Sidebar';

import {
  HeaderContainer,
  NavContainer,
  NavElements,
  NavMenu,
  NavScroll,
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
  const [changeColor, setChangeColor] = React.useState(false);
  const { isHistoryOpen, setisHistoryOpen } = useAuth();

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onScroll = () => {
    if (window.scrollY >= 200) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  const openHistorySection = () => {
    setisHistoryOpen(!isHistoryOpen);
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <NavContainer changeColor={changeColor}>
        <Sidebar toggle={toggle} isOpen={isOpen} />
        <NavElements>
          <Logo to="/">
            <img src={logo} alt="logo" />
          </Logo>
          <NavMenu>
            <NavScroll
              smooth
              duration={1000}
              offset={0}
              to="historia"
              onClick={openHistorySection}
            >
              Historia
            </NavScroll>

            <NavScroll smooth duration={1000} offset={-100} to="musica">
              Músicas
            </NavScroll>

            <NavScroll smooth duration={1000} to="video">
              Vídeos
            </NavScroll>

            <NavScroll smooth duration={1000} offset={-100} to="sobre">
              Sobre
            </NavScroll>
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
