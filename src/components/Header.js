import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"
import Logo from "../components/Logo"
import MainMenu from "../components/MainMenu"
import 'bootstrap/dist/css/bootstrap.min.css'


import { Container, Row, Col, Nav, Navbar, Form, label, Input, FormGroup, Button, FormLabel } from 'react-bootstrap';

const NavSpanWrapper = styled.span `
  z-index: 19;
`

const Header = ({}) => (
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
         <Navbar expand="xs" bg="dark">
          <NavSpanWrapper>
          <Navbar.Brand>
             <Logo />
          </Navbar.Brand>
          </NavSpanWrapper>

          <Container fluid>
        <Row>
          <Col>
            </Col>
            <Col>
            </Col>
            </Row>
            </Container>
            </Navbar>
      )}
    />
  )
  
  export default Header