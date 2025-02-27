import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"

const Logo = () => (
  <StaticQuery
    query={graphql`
      {
        allWordpressWpLogo {
          edges {
            node {
              url {
                source_url
              }
            }
          }
        }
      }
    `}
    render={props => (
      <div>
        <img
          src={props.allWordpressWpLogo.edges[0].node.url.source_url}
          alt="logo"
        />
      </div>
    )}
  />
)

export default Logo


