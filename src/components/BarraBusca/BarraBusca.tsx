import React, { FC, useState, KeyboardEvent, useEffect, useRef } from 'react';
import { BarraBuscaWrapper, BarraBuscaInput, BarraBuscaIcon, BarraBuscaResultsList, BarraBuscaResultItem, BarraBuscaErrorMessage } from './BarraBusca.styled';
import searchIcon from '../../assets/icons/search.png'; // Importe a imagem

interface BarraBuscaProps {
   enableSticky?: boolean;
}

const BarraBusca: FC<BarraBuscaProps> = ({ enableSticky = false }) => {
   const [query, setQuery] = useState('');
   const [results, setResults] = useState<string[]>([]);
   const [error, setError] = useState('');
   const [isSticky, setIsSticky] = useState(false); // Estado para sticky
  const wrapperRef = useRef<HTMLDivElement>(null); // Ref para o wrapper

   useEffect(() => {
      if (!enableSticky) return;

      const handleScroll = () => {
         setIsSticky(window.scrollY > (window.innerHeight / 2) && window.scrollY < window.innerHeight);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, [enableSticky])

   useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
         if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
         setResults([]); // Oculta a lista
         setError(''); // Limpa a mensagem de erro
         }
      };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
   }, []);

   useEffect(() => {
      const handleScroll = () => {
         setResults([]);
         setError('');
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   const handleSearch = () => {
      setError('');
      setResults([]);

      // Lógica de busca simulada (substitua por API ou lógica real)
      const mockData: { [key: string]: string[] } = {
         home: ['/home'],
         about: ['/about'],
         contact: ['/contact'],
         blog: ['/blog/post1', '/blog/post2'], // Exemplo de múltiplos
      };

      const found = mockData[query.toLowerCase()];
      if (found) {
         if (found.length === 1) {
            console.log(`Navegando para: ${found[0]}`); // Simula navegação única
            // Aqui você pode usar history.push(found[0]) se tiver router
         } else {
            setResults(found); // Mostra lista para múltiplos
         }
      } else {
         setError('Nada encontrado. Tente outra busca.'); // Mensagem de erro genérica
      }
   };

   const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
         handleSearch();
      }
   };

   return (
      <BarraBuscaWrapper ref={wrapperRef} $isSticky={isSticky} data-testid="BarraBusca">
         <BarraBuscaInput
            type="text"
            placeholder="O que está procurando"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyUp={handleKeyPress}
         />
         <BarraBuscaIcon src={searchIcon} alt="Buscar" onClick={handleSearch} />
         {results.length > 0 && (
            <BarraBuscaResultsList>
               {results.map((result, index) => (
                  <BarraBuscaResultItem key={index} onClick={() => console.log(`Navegando para: ${result}`)}>
                     {result}
                  </BarraBuscaResultItem>
               ))}
            </BarraBuscaResultsList>
         )}
         {error && <BarraBuscaErrorMessage>{error}</BarraBuscaErrorMessage>}
      </BarraBuscaWrapper>
   );
};

export default BarraBusca;