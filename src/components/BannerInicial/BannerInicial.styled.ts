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
    background-image: url("${bannerImage}");
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
`;

export const LogoContainer = styled.div`
    text-align: center;
    margin-bottom: 20px;
`;

export const LogoImage = styled.img`
    width: 250px;
    height: auto;
    margin-bottom: 10px;
`;

export const StudioName = styled.h1`
    color: var(--foreground);
    font-size: 2rem;
    margin: 0;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
    -webkit-text-stroke: 1px rgba(0, 0, 0, 0.5);
`;