import React, { FC } from 'react';
import { NavBarWrapper, NavList, NavItem, NavLogo, NavLogoItem } from './NavBar.styled';
import BarraBusca from '../BarraBusca/BarraBusca';
import logoText from '../../assets/icons/logo texto.png';

interface NavBarProps {
  show: boolean;
}

const NavBar: FC<NavBarProps> = ({ show }) => (
  <NavBarWrapper $show={show} data-testid="NavBar">
    <NavLogoItem>
      <NavLogo src={logoText} alt="Logo Texto" />
    </NavLogoItem>
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
