import React from 'react';
import PropTypes from 'prop-types';
import { animateScroll as scroll } from 'react-scroll';

import { useAuth } from '../../Context/AuthContext';

import { SidebarContainer, SidebarLink, SidebarMenu } from './SidebarElements';

function Sidebar({ isOpen, toggle }) {
  const { isHistoryOpen, setisHistoryOpen } = useAuth();

  const openHistorySection = () => {
    setisHistoryOpen(!isHistoryOpen);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div aria-hidden="true" onClick={toggle}>
      <SidebarContainer isOpen={isOpen}>
        <SidebarMenu>
          <SidebarLink
            onClick={() => {
              toggle();
              scrollToTop();
            }}
            to="/"
            smooth
            duration={1000}
          >
            Inicio
          </SidebarLink>
          <SidebarLink
            to="historia"
            onClick={() => {
              openHistorySection();
              toggle();
            }}
            smooth
            duration={1000}
          >
            Historia
          </SidebarLink>
          <SidebarLink
            smooth
            duration={1000}
            offset={-100}
            onClick={toggle}
            to="musica"
          >
            Músicas
          </SidebarLink>
          <SidebarLink
            smooth
            duration={1000}
            offset={-100}
            onClick={toggle}
            to="video"
          >
            Videos
          </SidebarLink>
          <SidebarLink
            smooth
            duration={1000}
            offset={-100}
            onClick={toggle}
            to="sobre"
          >
            Sobre
          </SidebarLink>
        </SidebarMenu>
      </SidebarContainer>
    </div>
  );
}

export default Sidebar;

Sidebar.defaultProps = {
  isOpen: false,
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool,
  toggle: PropTypes.func,
};
