import React, { createContext,  useCallback, useState } from 'react';
import { node } from 'prop-types';
import firebase from 'services/firebase';

const AccountListContext = createContext();

function AccountListProvider ({ children }) {
  const [list, setList] = useState([]);
  const [loaderAccountList, setLoaderAccountList] = useState(true);
  
  const getAccoubtList = useCallback((email) => {
    firebase.database().ref('/account-list/')
      .orderByChild('email')
      .equalTo(email)
      .once('value').then((snapshot) => {
        if (snapshot.val()) {
          setList(snapshot.val());
        }
        setLoaderAccountList(false);
      }); 
  }, []);

  return (
    <AccountListContext.Provider value={{
      list,
      loaderAccountList,
      getAccoubtList,
    }}>
      {children}
    </AccountListContext.Provider>
  );
}

AccountListProvider.propTypes = {
  children: node.isRequired,
}

export { AccountListProvider, AccountListContext };
