import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavContainer = styled.div`
  width: 100%;
  height: 100px;
  background: red;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavElements = styled.div`
  display: flex;
  justify-content: center;
`;

export const Logo = styled(Link)`
  img {
    width: 70px;
    border-radius: 50px;
    margin: 1rem;
  }
`;
