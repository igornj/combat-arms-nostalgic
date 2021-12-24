import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavElements = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1.5rem;
  color: #c0c0c0;
`;

export const Title = styled.h1`
  font-size: 1rem;
  font-weight: 300;
`;

export const Avatar = styled(Link)`
  img {
    width: 40px;
    border-radius: 50px;
    margin: 1rem;
  }
`;
