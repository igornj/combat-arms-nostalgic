import styled from 'styled-components';
import Headerbg from '../../Assets/lucask4uz3.png';

import { Link } from 'react-router-dom';
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineClose,
} from 'react-icons/ai';
import { BiMenu } from 'react-icons/bi';

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
  display: none;
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
  color: #bdbdbd;
  margin-right: 0.5rem;
  :hover {
    transform: scale(1.2);
    color: #f0f0f0;
  }
`;
export const Instagram = styled(AiOutlineInstagram)`
  font-size: 1.5rem;
  color: #bdbdbd;
  margin-right: 0.5rem;
  :hover {
    transform: scale(1.2);
    color: #f0f0f0;
  }
`;
export const Github = styled(AiOutlineGithub)`
  font-size: 1.5rem;
  color: #bdbdbd;
  :hover {
    transform: scale(1.2);
    color: #f0f0f0;
  }
`;

export const MenuOpenHam = styled(BiMenu)`
  color: white;
  font-size: 2rem;
  cursor: pointer;
  z-index: 9999;
  margin-right: 1rem;
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
    font-size: 3rem;
    font-weight: 600;
    letter-spacing: 0.2rem;
    line-height: 6rem;
    white-space: nowrap;
  }

  img {
    margin-top: 1.2rem;
  }
`;
