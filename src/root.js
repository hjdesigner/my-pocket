import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components'
import { AuthProvider, AccountListProvider } from 'contexts'
import App from './App';


function Root () {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AccountListProvider>
          <GlobalStyle />
          <Route component={App} />
        </AccountListProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}
 
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  body {
    font-family: 'Arial';
    font-size: 10px;
  }
`
export default Root;
