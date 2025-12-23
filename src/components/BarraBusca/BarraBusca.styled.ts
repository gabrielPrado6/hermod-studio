import styled from 'styled-components';
import './../../App.css';

export const BarraBuscaWrapper = styled.div<{ $isSticky?: boolean }>`
  position: ${props => props.$isSticky ? 'fixed' : 'relative'};
  top:  ${props => props.$isSticky ? '20px' : '0'};
  width: 100%;
  max-width: 400px;
  overflow-x: visible !important;
`;

export const BarraBuscaInput = styled.input`
  width: 100%;
  padding: 10px 40px 10px 15px; /* Espaço para o ícone à direita */
  border: 1px solid var(--primario-cor);
  border-radius: 25px; /* Bordas arredondadas */
  background-color: var(--background-content); /* Fundo branco com 80% opacidade */
  font-size: 16px;
  outline: none;
  color: var(--foreground);
  &:focus {
    border-color: var(--active-border-color);
  }
`;

export const BarraBuscaIcon = styled.img` 
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  width: 18px; 
  height: 18px;

  @media (prefers-color-scheme: dark) {
    filter:  invert(1) brightness(0.5);; 
  }
`;

export const BarraBuscaResultsList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 200px;
  overflow-y: auto;
  z-index: 1000;
`;

export const BarraBuscaResultItem = styled.li`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const BarraBuscaErrorMessage = styled.div`
  font-size: calc(10px + 0.5vmin);
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: #ffdddd;
  color: #d8000c;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #d8000c;
  z-index: 1000;
`;