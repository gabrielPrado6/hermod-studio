import React, { FC, useEffect, useState } from 'react';
import { ContentWrapper, HomeWrapper } from './Home.styled';
import BannerInicial from '../../components/BannerInicial/BannerInicial';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const [hasPadding, setHasPadding] = useState(false);
   
   useEffect(() => {
      const handleScroll = () => {
         setHasPadding(window.scrollY > window.innerHeight - 60);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);
   
   return (
      <HomeWrapper data-testid="Home">
         <BannerInicial />
         <ContentWrapper $hasPadding={hasPadding}>
            Home Component
         </ContentWrapper>
      </HomeWrapper>
   )
};

export default Home;
