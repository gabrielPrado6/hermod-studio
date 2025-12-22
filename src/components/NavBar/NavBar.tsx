import React, { FC } from 'react';
import { NavBarWrapper, NavList, NavItem, NavLogo } from './NavBar.styled';
import BarraBusca from '../BarraBusca/BarraBusca';

interface NavBarProps {
  show: boolean;
}

const NavBar: FC<NavBarProps> = ({ show }) => (
  <NavBarWrapper $show={show} data-testid="NavBar">
    <NavLogo>Logo</NavLogo>
    <div style={{ flex: 1 }}>
      <BarraBusca />
    </div>
    <NavList>
      <NavItem>Home</NavItem>
      <NavItem>Sobre</NavItem>
      <NavItem>Contato</NavItem>
    </NavList>
  </NavBarWrapper>
);

export default NavBar;
