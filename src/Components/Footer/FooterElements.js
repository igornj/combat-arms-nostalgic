import styled from 'styled-components';
import { FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';

export const FooContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  margin-bottom: 2.5rem;
  background: #0a0a0a;
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
  margin: 1rem 2rem;
  white-space: nowrap;

  h1 {
    font-size: 1.2rem;
    font-weight: 200;
    color: #fff;
    margin-bottom: 1rem;
  }
`;

export const Nicks = styled.div`
  margin: 1rem 2rem;
  h1 {
    font-size: 1rem;
    color: #c0c0c0;
  }
`;

export const Instagram = styled(FaInstagram)`
  font-size: 1.5rem;
  color: #fff;
  margin-right: 1rem;
`;
export const Twitter = styled(FaTwitter)`
  font-size: 1.5rem;
  color: #fff;
  margin-right: 1rem;
`;
export const Git = styled(FaGithub)`
  font-size: 1.5rem;
  color: #fff;
  margin-right: 1rem;
`;
