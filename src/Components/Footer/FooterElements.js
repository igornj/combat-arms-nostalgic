import styled from 'styled-components';
import { FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';

export const FooContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1.4rem;
  width: 100%;
  height: 150px;
  margin-bottom: 2.5rem;
  background: #000000;
  position: relative;
  bottom: 2.5rem;

  p {
    position: absolute;
    font-size: 10px;
    color: #fff;
    bottom: 5%;
    left: 50%;
    transform: translate(-50%);
  }
`;

export const Socials = styled.div`
  white-space: nowrap;

  h1 {
    font-size: 1.2rem;
    font-weight: 200;
    color: #fff;
    margin-bottom: 1rem;
  }
`;

export const Nicks = styled.div`
  h1 {
    font-size: 0.8rem;
    color: #c0c0c0;
  }
`;

export const Goahead = styled.div`
  img {
    width: 60px;
    filter: invert(95%) sepia(95%) saturate(22%) hue-rotate(61deg)
      brightness(106%) contrast(104%);
  }
`;

export const Instagram = styled(FaInstagram)`
  font-size: 1.5rem;
  color: #bdbdbd;
  transition: all 0.2s ease;
  :hover {
    color: #f0f0f0;
  }
  margin-right: 1rem;
`;
export const Twitter = styled(FaTwitter)`
  font-size: 1.5rem;
  color: #bdbdbd;
  transition: all 0.2s ease;
  :hover {
    color: #f0f0f0;
  }
  margin-right: 1rem;
`;
export const Git = styled(FaGithub)`
  font-size: 1.5rem;
  color: #bdbdbd;
  transition: all 0.2s ease;
  :hover {
    color: #f0f0f0;
  }
  margin-right: 1rem;
`;
