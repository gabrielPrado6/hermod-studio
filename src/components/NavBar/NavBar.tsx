import React, { FC } from 'react';
import { NavBarWrapper, NavList, NavItem, NavLogo } from './NavBar.styled';

interface NavBarProps {
  show: boolean;
}

const NavBar: FC<NavBarProps> = ({ show }) => (
 <NavBarWrapper show={show} data-testid="NavBar">
   <NavLogo>Logo</NavLogo>
   <NavList>
      <NavItem>Home</NavItem>
      <NavItem>Sobre</NavItem>
      <NavItem>Contato</NavItem>
   </NavList>
 </NavBarWrapper>
);

export default NavBar;
