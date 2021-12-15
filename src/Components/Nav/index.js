import React from 'react';
import logo from '../../Assets/logo.jpg';
import { NavContainer, NavElements, Logo } from './NavElements';

function Nav() {
  return (
    <NavContainer>
      <NavElements>
        <Logo to="/">
          <img src={logo} alt="logo" />
        </Logo>
      </NavElements>
    </NavContainer>
  );
}

export default Nav;
