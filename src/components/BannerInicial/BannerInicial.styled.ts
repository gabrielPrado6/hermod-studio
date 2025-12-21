import bannerImage from '../../assets/banner/capa de Deviant.png';
import styled from 'styled-components';
import './../../App.css';

export const BannerInicialWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--background-content);
    background-image: url("${bannerImage}"); /* Use a imagem como fundo */
    background-size: cover; /* Ajusta o tamanho da imagem */
    background-position: center; /* Centraliza a imagem */
    background-attachment: fixed; /* Mantém a imagem fixa durante o scroll */
    background-repeat: no-repeat; /* Evita repetição */

`;

export const BannerImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;