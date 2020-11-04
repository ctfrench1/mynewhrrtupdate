import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"
import SiteInfo from "../components/Siteinfo"
import Logo from "../components/Logo"
import 'bootstrap/dist/css/bootstrap.min.css'


import { Container, Row, Col, Nav, NavItem, NavLink } from 'react-bootstrap';

const MainMenuWrapper = styled.header`
    height: auto;
    pointer-events: none;
    position: absolute;
    width: 100%;   
    z-index: 100;


  .closeButton {
    color: #fff;
    font-size: 48px;
    margin: 0;
    position: absolute;
    top: 10px;
    right: 30px;
    cursor: pointer;
  }

  .burgerIcon {
    position: absolute;
    top: 30px;
    right: 36px;
    cursor: pointer;
    z-index: 20;
  }

  .burgerLine {
    width: 3rem;
    height: 0.25rem;
    background-color: #fff;
    margin-bottom: 10px;
  }
`
const MainWrappper_Interior = styled.div `
    display: flex;
    flex-direction: column;
    height: 30vh;
    position: relative;
`

const MainWrappper_Interior_Wrap = styled.div `
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
    overflow: hidden;
    position: relative;
`

const Menu_Bar = styled.div `
  pointer-events: all;
  position: relative;
  z-index: 100;

  @media (min-width: 1280px){
  content-contain--no-max {
      max-width: 90%;
      width: 100%;
  }
}
  @media (min-width: 1440px){
  content-contain {
      width: 75%;
  }
}
  @media (min-width: 1280px){
  content-contain {
      max-width: 1440px;
      width: 90%;
  }
}

 content-contain {
      margin-left: auto;
      margin-right: auto;
      max-width: 90%;
      overflow: visible;
      padding-left: .625rem;
      padding-right: .625rem;
      position: relative;
      width: 100%;
      z-index: 1;
  }
`
const NavWrapper = styled.nav`
  position: fixed;
  height: 30vh;
  width: 100%;
  z-index: 1000;
  visibility: visible;
 
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #0074c4;

  .closeButton {
    color: #fff;
    font-size: 48px;
    margin: 0;
    position: absolute;
    top: 10px;
    right: 30px;
    cursor: pointer;
  }
`
const UlWrapper = styled.ul`
  flex-flow: column wrap;

  li {
    list-style: none;
  }

  li a {
    color: #fff;
    text-decoration: none;
    font-size: 2rem;
    display: inline-block;
    padding: 15px 50px;
    text-transform: uppercase;
    border-bottom: 1px solid #142d5f;
  }

  li:last-child a {
    border-bottom: none;
  }

  li:hover a {
    background-color: #ff6500;
  }
`
const MainMenu = ({}) => (
  <StaticQuery
    query={graphql`
      {
        allWordpressWpApiMenusMenusItems(
          filter: { name: { eq: "Main Menu" } }
        ) {
          edges {
            node {
              name
              items {
                title
                object_slug
              }
            }
          }
        }
      }
    `}

    render={props => (
      <MainMenuWrapper>
        <MainWrappper_Interior>
        <Menu_Bar className={'content-contain content-contain--no-max'}>
        <Logo />
        <div className={`burgerIcon`}>
          <div className={`burgerLine`}></div>
          <div className={`burgerLine`}></div>
          <div className={`burgerLine`}></div>
        </div>
        </Menu_Bar>
        <NavWrapper>
          <UlWrapper className={`navMenu`}>
            {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
              item => (
                <li>
                  <Link to={`/${item.object_slug}`} key={item.title}>
                    {item.title}
                  </Link>
                </li>
              )
            )}
          </UlWrapper>
        </NavWrapper>
        </MainWrappper_Interior>
      </MainMenuWrapper>
    )}
  />
)

export default MainMenu


