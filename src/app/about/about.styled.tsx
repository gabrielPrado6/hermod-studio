import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

export const AboutWrapper = styled.div`
`;

export const ContentArticleHome = styled.div<{ $reverse?: boolean }>`
  display: flex;
  flex: 1;
  flex-direction: ${({ $reverse }) => ($reverse ? 'row-reverse' : 'row')};
  align-items: flex-start;
  justify-content: left;
  padding-bottom: 3rem;
`;

export const TextArticleHome = styled.div`
  flex: 1;
`;
export const TitleHome = styled.p`
    padding: 0.5rem 1rem;
    align-self: stretch;
    display: flex ;
`;

export const ImageArticleHome = styled.div`
  display: flex;
  flex: 1;
  flex-grow: 1;
  height: stretch;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
`;
export const ImageHome =  styled.img`
  width: 75%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5); /* sombra suave */
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.5); /* efeito ao passar o mouse */
  }

`;
export const MarkdownWrapper = styled.div`
  p {
    text-align: justify;
    padding: 0.5rem 3rem;
    margin: 0 !important;
    font-size: calc(0.25rem + 2vmin);
  }
`;

export const TextHome = ({ children }: { children: string }) => (
  <MarkdownWrapper>
    <ReactMarkdown>{children}</ReactMarkdown>
  </MarkdownWrapper>
);