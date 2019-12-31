import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components'
import { AuthProvider } from 'contexts'
import App from './App';


function Root () {
  return (
    <BrowserRouter>
      <AuthProvider>
        <GlobalStyle />
        <Route component={App} />
      </AuthProvider>
    </BrowserRouter>
  )
}
 
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Arial';
    font-size: 10px;
  }
`
export default Root;
