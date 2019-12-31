import React from 'react';
import styled from 'styled-components';
import { AccountList } from 'components';

const Home = () => (
  <Main>
    <Container>
      <AccountList />
    </Container>
  </Main>
);

const Main = styled.main`
  display: flex;
  justify-content: center;
  padding: 0 16px;
  margin-top: 24px;
`;
const Container = styled.div`
  max-width: 1024px;
  width: 100%;
`;

export default Home;
