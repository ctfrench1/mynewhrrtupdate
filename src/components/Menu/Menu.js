// Menu.js
import React from 'react';
import { bool } from 'prop-types';
import { graphql, StaticQuery, Link } from "gatsby"
import { StyledMenu } from './Menu.styled';
import 'bootstrap/dist/css/bootstrap.min.css'
import Customizer from '../Customizer/Customizer'

import { Container, Row, Col, Button } from 'react-bootstrap';




const Menu = ({open, ...props}) => {

  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
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
     <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
       <Container>
         <Row>
           <Col>
       <ul>
            {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
              item => (
                <li>
                  <Link to={`/${item.object_slug}`} key={item.title}>
                    {item.title}
                  </Link>
                </li>
              )
            )}
        </ul>
        </Col>
        <Col xs={7} className="customizerWrapper noPad">
                <Customizer />
        </Col>
        </Row>
        </Container>
      </StyledMenu>
    )}
    
  />
  )
  } 
  Menu.propTypes = {
    open: bool.isRequired,
  }

export default Menu