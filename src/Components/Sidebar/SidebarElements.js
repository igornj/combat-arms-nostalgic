import styled from 'styled-components';

import { Link as LinkS } from 'react-scroll';

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

  @media (min-width: 1000px) {
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

export const SidebarLink = styled(LinkS)`
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
