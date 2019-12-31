import React from 'react';
import styled from 'styled-components';
import { useAuth } from 'hooks';

const Header = () => {
  const { userInfo } = useAuth();

  return (
    <HeaderElement>
      <Container>
        <Logo>My <SoonDifferent>Pocket</SoonDifferent></Logo>
        <User>
          <UserImage src={userInfo.photo} />
          <UserText>Olá, {userInfo.name}</UserText>
        </User>
      </Container>
    </HeaderElement>
  );
}

const HeaderElement = styled.header`
  display: flex;
  justify-content: center;
  padding: 0 16px;
  height: 55px;
  border-bottom: 1px solid rgba(72, 94, 144, 0.16);
`;
const Container = styled.div`
  align-items: center;
  display: flex;
  max-width: 1024px;
  justify-content: space-between;
  width: 100%;
`;
const Logo = styled.div`
  color: #031a61;
  font-size: 22px;
  font-weight: 700;
`;
const SoonDifferent = styled.small`
  font-weight: 400;
  color: #0168fa;
`;
const User = styled.section`
  display: flex;
  align-items: center;
`;
const UserImage = styled.img`
  border-radius: 50%;
  margin-right: 8px; 
  width: 28px;
`;
const UserText = styled.p`
  font-size: 1.6em;
`;

export default Header;
