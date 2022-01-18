import React from 'react';
import PropTypes from 'prop-types';

import { SidebarContainer, SidebarLink, SidebarMenu } from './SidebarElements';

function Sidebar({ isOpen }) {
  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarMenu>
        <SidebarLink to="/">Inicio</SidebarLink>
        <SidebarLink to="/">Historia</SidebarLink>
        <SidebarLink to="/">Músicas</SidebarLink>
        <SidebarLink to="/">Videos</SidebarLink>
        <SidebarLink to="/">Sobre</SidebarLink>
      </SidebarMenu>
    </SidebarContainer>
  );
}

export default Sidebar;

Sidebar.defaultProps = {
  isOpen: false,
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool,
};
