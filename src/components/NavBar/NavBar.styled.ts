import styled from 'styled-components';

interface NavBarWrapperProps {
  show: boolean;
}

export const NavBarWrapper = styled.nav<NavBarWrapperProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 60px;
  background-color: var(--background-content); /* Use uma variável CSS para consistência */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  z-index: 1000; /* Alto z-index para ficar acima de outros elementos */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out; /* Transição suave para aparecer */
  transform: translateY(${props => props.show ? '0' : '-100%'}); /* Esconde/mostra com slide */
`;

export const NavLogo = styled.div`
  margin-left: 20px; 
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 10px;
  gap: 20px;
`;

export const NavItem = styled.li`
  cursor: pointer;
  color: var(--text-color);
  width: fit-content;
  &:hover {
    color: var(--accent-color);
  }
`;