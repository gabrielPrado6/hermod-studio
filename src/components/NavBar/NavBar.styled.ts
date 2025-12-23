import styled from 'styled-components';

interface NavBarWrapperProps {
  $show: boolean;
}

export const NavBarWrapper = styled.nav<NavBarWrapperProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: calc(100vw - 10px);
  height: 60px;
  background-color: var(--background-content); /* Use uma variável CSS para consistência */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  z-index: 1000; /* Alto z-index para ficar acima de outros elementos */
  transition: transform 0.3s ease-in-out; /* Transição suave para aparecer */
  transform: translateY(${props => props.$show ? '0' : '-100%'}); /* Esconde/mostra com slide */
`;

export const NavLogoItem = styled.div`
  margin-left: 20px;
  flex: 1;
  align-items: center;
  justify-content: start;
  flex-direction: row !important;
`;
export const NavLogo = styled.img`
  width: auto;
  height: 40px;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: end;
  flex:1;
  list-style: none;
  margin: 0 20px 0 0;
  padding: 0;
  gap: 20px;
`;

export const NavItem = styled.li`
  font-size: calc(8px + 1vmin);
  cursor: pointer;
  color: var(--text-color);
  width: fit-content;
  &:hover {
    color: var(--accent-color);
  }
`;