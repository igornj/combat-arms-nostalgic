import styled from 'styled-components';

// import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import { Link } from 'react-router-dom';

export const SidebarContainer = styled.aside`
  position: fixed;
  background: #0a0a0a;
  top: ${({ isOpen }) => (isOpen ? '0rem' : '-100vh')};
  left: 0rem;
  right: 0;
  width: 100%;
  height: 100vh;
  z-index: 9999;
  transition: top 0.3s ease-in-out;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const SidebarMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 4rem;
`;

export const SidebarLink = styled(Link)`
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  letter-spacing: 3px;
  padding: 2rem;
  color: white;
  width: 100%;
  height: 100%;
  white-space: nowrap;
  transition: border 0.2s ease-in-out;
  &:hover {
    transition: border 0.2s ease-in-out;
    border-bottom: 5px solid #fff;
  }
`;

export const SidebarScroll = styled(LinkS)`
  cursor: pointer;
  text-align: center;
  padding: 2rem;
  color: white;
  width: 100%;
  height: 100%;
  white-space: nowrap;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #0a0a0a;
  }
`;