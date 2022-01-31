import styled from 'styled-components';
import Headerbg from '../../Assets/lucask4uz3.png';

import { Link as LinkS } from 'react-scroll';
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineClose,
} from 'react-icons/ai';
import { BiMenu } from 'react-icons/bi';

export const NavContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 9999;
  background: ${({ changeColor }) => (changeColor ? '#383838' : 'transparent')};
`;

export const NavElements = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 1.5rem;
  width: 100%;
`;

export const Logo = styled.div`
  cursor: pointer;
  transition: opacity 0.2s ease;

  img {
    width: 40px;
    border-radius: 50px;
  }
  &:hover {
    opacity: 0.8;
  }
`;

export const NavMenu = styled.div`
  display: none;
  column-gap: 1rem;
  justify-content: center;
  width: 100%;
  margin-left: 1.5rem;

  @media screen and (min-width: 1000px) {
    display: flex;
  }
`;

export const NavScroll = styled(LinkS)`
  cursor: pointer;
  font-size: 1rem;
  font-weight: 100;
  color: #f0f0f0;
  transition: all 0.2s ease;
  :hover {
    font-weight: 300;
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
  color: #bdbdbd;
  margin-right: 0.5rem;
  transition: all 0.2s ease;
  :hover {
    color: #f0f0f0;
  }
`;
export const Instagram = styled(AiOutlineInstagram)`
  font-size: 1.5rem;
  color: #bdbdbd;
  margin-right: 0.5rem;
  transition: all 0.2s ease;
  :hover {
    color: #f0f0f0;
  }
`;
export const Github = styled(AiOutlineGithub)`
  font-size: 1.5rem;
  color: #bdbdbd;
  transition: all 0.2s ease;
  :hover {
    color: #f0f0f0;
  }
`;

export const MenuOpenHam = styled(BiMenu)`
  color: white;
  font-size: 2rem;
  cursor: pointer;
  z-index: 9999;
  margin-right: 1rem;

  @media screen and (min-width: 1000px) {
    display: none;
  }
`;

export const MenuClosedHam = styled(AiOutlineClose)`
  color: white;
  font-size: 2rem;
  cursor: pointer;
  z-index: 9999;
  margin-right: 1rem;
`;

export const HeaderContainer = styled.div`
  background-image: url(${Headerbg});
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
    font-size: 2.5rem;
    font-weight: 600;
    letter-spacing: 0.2rem;
    white-space: nowrap;
  }

  img {
    margin-top: 2rem;
    width: 90%;
  }

  @media screen and (min-width: 1000px) {
    height: 100vh;
    h1 {
      font-size: 4rem;
      letter-spacing: 0.5rem;
    }
  }
`;
