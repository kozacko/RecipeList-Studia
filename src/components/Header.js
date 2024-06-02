
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: #4caf50;
  color: white;
  text-align: center;
  padding: 20px;
  font-size: 24px;
`;

function Header() {
  return (
    <HeaderContainer>
      Szukajka przepisów
      <div>Znajdź swój przepis</div>
    </HeaderContainer>
  );
}

export default Header;
