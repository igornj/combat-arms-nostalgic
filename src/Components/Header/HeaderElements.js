import styled from 'styled-components';
import Headerbg from '../../Assets/lucask4uz.png';

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
  position: absolute;
`;

export const NavElements = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 1.5rem;
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
    color: #f0f0f0;
  }
`;

export const Socials = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
`;

export const Twitter = styled(AiOutlineTwitter)`
  font-size: 1.5rem;
  color: #f0f0f0;
  margin-right: 0.5rem;
`;
export const Instagram = styled(AiOutlineInstagram)`
  font-size: 1.5rem;
  color: #f0f0f0;
  margin-right: 0.5rem;
`;
export const Github = styled(AiOutlineGithub)`
  font-size: 1.5rem;
  color: #f0f0f0;
`;

export const HeaderContainer = styled.div`
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.9) 0%,
      rgba(255, 255, 255, 0.5) 100%
    ),
    url(${Headerbg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h1 {
    color: #f0f0f0;
    font-size: 4rem;
    font-weight: 600;
    letter-spacing: 0.2rem;
    line-height: 6rem;
  }

  h2 {
    font-weight: 400;
    color: #f0f0f0;
    font-size: 4rem;
    letter-spacing: 3rem;
  }
`;
