/* eslint-disable prettier/prettier */
import styled from 'styled-components';


export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1rem;
  color: #0a0a0a;
`;


export const HistoryBtn = styled.button`
  border: none;
  border-radius: 10px;
  padding: 1rem 4rem;
  font-weight: 500;
  font-size: 1.5rem;
  background: #0a0a0a;
  color: white;
  cursor: pointer;
  z-index: 9998;
  margin: 2rem 2rem 3rem 2rem;
  box-shadow: 1px 5px 15px -5px #000000;
  transition: all 0.5s ease;
  &:hover{
    background: #363636;
  }
`;


