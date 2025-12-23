import React, { FC } from 'react';
import { BannerInicialWrapper, LogoContainer, LogoImage, StudioName } from './BannerInicial.styled';
import BarraBusca from '../BarraBusca/BarraBusca';
import logoImage from '../../assets/icons/logo.png'; 

interface BannerInicialProps {}

const BannerInicial: FC<BannerInicialProps> = () => (
 <BannerInicialWrapper data-testid="BannerInicial">
   <LogoContainer>
      <LogoImage src={logoImage} alt="Hermod Studio Logo" />
      <StudioName>Hermod Studio</StudioName>
   </LogoContainer>
   <BarraBusca enableSticky={true}></BarraBusca>
 </BannerInicialWrapper>
);

export default BannerInicial;
