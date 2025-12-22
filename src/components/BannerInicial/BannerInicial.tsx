import React, { FC } from 'react';
import { BannerInicialWrapper } from './BannerInicial.styled';
import BarraBusca from '../BarraBusca/BarraBusca';
interface BannerInicialProps {}

const BannerInicial: FC<BannerInicialProps> = () => (
 <BannerInicialWrapper data-testid="BannerInicial">
    <BarraBusca enableSticky={true}></BarraBusca>
 </BannerInicialWrapper>
);

export default BannerInicial;
