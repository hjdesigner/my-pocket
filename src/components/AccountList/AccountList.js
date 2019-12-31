import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import 'boxicons';
import firebase from 'services/firebase';
import { useAuth } from 'hooks';

const AccountList = () => {
  const { userInfo } = useAuth();
  const [list, setList] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    firebase.database().ref('/account-list/')
      .orderByChild('email')
      .equalTo(userInfo.email)
      .once('value').then((snapshot) => {
        if (snapshot.val()) {
          setList(snapshot.val());
        }
        setLoader(false);
      });
  }, [userInfo]);

  return (
    <Element>
      <Tittle>Account List</Tittle>
      {loader && (<Loader>
          <box-icon name='loader-circle' ></box-icon>
        </Loader>
      )}
      {list.length === 0 && !loader && <Empty>Account list empty</Empty>}
      <List>
        {list.map((item) => (
          <ListItem key={item.id}>{item.name}</ListItem>
        ))}
      </List>
    </Element>
  );
}

const Element = styled.section`
  border: 1px solid rgba(72, 94, 144, 0.16);
  border-radius: 0.25rem;
  padding: 20px;
  width: 100%;
`;
const Tittle = styled.h2`
  color: #1b2e4b;
  font-weight: 600;
  font-size: 1.6em;
  position: relative;
  margin: 0 0 24px;

  &:after {
    background-color: #444141;
    content: "";
    position: absolute;
    bottom: -8px;
    left: 0;
    height: 5px;
    width: 10%;
  }
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
const ListItem = styled.li`
  border-bottom: 1px solid rgba(72, 94, 144, 0.16);
  font-size: 1.5em;
  padding: 8px;
`;
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
const Loader = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  box-icon {
    animation: ${rotate} 2s linear infinite;
  }
`;
const Empty = styled.p`
  font-size: 1.6em;
  text-align: center;
`;

export default AccountList;
