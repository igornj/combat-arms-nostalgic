import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineGithub,
} from 'react-icons/ai';

export const NavContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
`;

export const NavElements = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 1.5rem;
  color: #c0c0c0;
  width: 100%;
`;

export const Logo = styled(Link)`
  img {
    width: 40px;
    border-radius: 50px;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  column-gap: 1rem;
  justify-content: center;
  width: 100%;
  padding: 1rem;

  a {
    text-decoration: none;
  }

  h1 {
    font-size: 1rem;
    font-weight: 300;
    color: black;
  }
`;

export const Socials = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
`;

export const Twitter = styled(AiOutlineTwitter)`
  font-size: 1.7rem;
  color: #1f1f1f;
  margin-right: 0.5rem;
`;
export const Instagram = styled(AiOutlineInstagram)`
  font-size: 1.7rem;
  color: #1f1f1f;
  margin-right: 0.5rem;
`;
export const Github = styled(AiOutlineGithub)`
  font-size: 1.7rem;
  color: #1f1f1f;
`;
