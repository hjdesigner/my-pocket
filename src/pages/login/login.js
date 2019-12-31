import React from 'react';
import styled from 'styled-components';
import 'boxicons';
import { useAuth } from 'hooks';

const Login = () => {
  const { login } = useAuth();

  return (
    <Container>
      <ContainerLogin>
        <Title>Login</Title>
        <ButtonLogin onClick={login}>
          <box-icon type='logo' name='google' />
          <Text>Google</Text>
        </ButtonLogin>
      </ContainerLogin>
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ContainerLogin = styled.div`
  padding: 16px;
  max-width: 400px;
  width: 100%;
  height: 200px;
`;
const Title = styled.h1`
  text-align: center;
  margin: 8px 0 24px;
  font-size: 2.6em;
`;
const ButtonLogin = styled.button`
  align-items: center;
  background-color: #DC4A38;
  border: 0;
  display: flex;
  padding: 16px 0;
  justify-content: center;
  width: 100%;

  box-icon {
    fill: #FFFFFF;
    margin-right: 8px;
  }
`;
const Text = styled.p`
  color: #FFFFFF;
  font-size: 2em;
  margin: 0;
`;

export default Login;
