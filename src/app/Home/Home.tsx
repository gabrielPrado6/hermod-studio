import React, { FC, useEffect, useState } from 'react';
import { ContentWrapper, HomeWrapper } from './Home.styled';
import BannerInicial from '../../components/BannerInicial/BannerInicial';
import { apiService, ResponseAPI } from '../../service/apiService';
import About from '../about/about.lazy';

interface HomeProps {}

export interface HomeItem {
  titulo: string;
  texto: string;
  imagem: string;
  autor: string;
}


const Home: FC<HomeProps> = () => {
  const [hasPadding, setHasPadding] = useState(false);
  const [posts, setPosts] = useState<ResponseAPI<HomeItem[]>>();
   
   useEffect(() => {
      apiService.get<ResponseAPI<HomeItem[]>>('home')
         .then(data => setPosts(data))
         .catch(err => console.error(err));
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
            <About />
         </ContentWrapper>
      </HomeWrapper>
   )
};

export default Home;
