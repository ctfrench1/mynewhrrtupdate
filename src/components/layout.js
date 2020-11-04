/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useState } from 'react';
import Header from "./Header"
import styled, {createGlobalStyle} from 'styled-components';
import Burger from '../components/Burger'
import Menu from '../components/Menu'

const GlobalStyles = createGlobalStyle `
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
  body{
    font-family: 'Open Sans', sans-serif;
    background-color: #fff;
    margin:0;
    padding: 0;
  }
  p {
    line-height:1.4em;
    font-weight: normal;
  }5


`
const LayoutWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`
function Layout({ children }) {
  const [open, setOpen] = useState(false);
  return (  
  <div className={`main`}>
    <GlobalStyles />
    <Burger open={open} setOpen={setOpen} />
    <Menu open={open} setOpen={setOpen} />
    <Header />
    <LayoutWrapper>
    {children}
    </LayoutWrapper>
  </div>
)}



export default Layout;
