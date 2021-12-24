import React from 'react';
import logo from '../../Assets/logo.jpg';
import { NavContainer, NavElements, Title, Avatar } from './NavElements';

function Nav() {
  return (
    <NavContainer>
      <NavElements>
        <Title>Combat Arms Timeline by bllk-</Title>
        <Avatar to="/">
          <img src={logo} alt="logo" />
        </Avatar>
      </NavElements>
    </NavContainer>
  );
}

export default Nav;
