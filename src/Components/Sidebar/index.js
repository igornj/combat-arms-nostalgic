import React from 'react';
import PropTypes from 'prop-types';

import { useAuth } from '../../Context/AuthContext';

import { SidebarContainer, SidebarLink, SidebarMenu } from './SidebarElements';

function Sidebar({ isOpen, toggle }) {
  const { isHistoryOpen, setisHistoryOpen } = useAuth();

  const openHistorySection = () => {
    setisHistoryOpen(!isHistoryOpen);
  };
  return (
    <div aria-hidden="true" onClick={toggle}>
      <SidebarContainer isOpen={isOpen}>
        <SidebarMenu>
          <SidebarLink to="/">Inicio</SidebarLink>
          <SidebarLink to="historia" onClick={openHistorySection}>
            Historia
          </SidebarLink>
          <SidebarLink to="musica">Músicas</SidebarLink>
          <SidebarLink to="video">Videos</SidebarLink>
          <SidebarLink to="sobre">Sobre</SidebarLink>
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
