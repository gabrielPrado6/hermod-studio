import styled from 'styled-components';

import './../../App.css';

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: calc(2*100vh);
  width: 100%;
  padding: '0 20px 20px 20px';
`;

export const ContentWrapper = styled.div<{ $hasPadding: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 90%;
  min-height: 60vh;
  padding: ${props => props.$hasPadding ? '120px 20px 20px 20px' : '20px'};
  border-radius: 0 0 8px 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color:  var(--background-content);
  margin-bottom: 4rem;
`;
