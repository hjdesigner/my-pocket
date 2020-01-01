import { useContext } from 'react';
import { AccountListContext } from 'contexts';

function useAccountList () {
  return useContext(AccountListContext);
}

export default useAccountList;
