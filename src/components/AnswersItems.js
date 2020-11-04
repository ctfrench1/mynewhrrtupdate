import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import { props } from "bluebird"
import styled from "styled-components"



const AnswerItemContainer = styled.section `
  background-color: #d33a2c;
  color: #fff;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
`
const AnswerItemColContainer = styled.div `
position: relative;
background-color: #d33a2c;
display: flex;
flex-wrap: wrap;
min-height: 0;
color: #fff;
}

.ICC{
  background: blue;
}
`

const AnswersThreeColItem = styled.div `
  padding-bottom: 15px;
  background-color: #d33a2c;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.06);
  padding-top: 0;

  @media (min-width: 3000px) {
     {
      width: 25%;
    }
  }

  @media (min-width: 768px) {
     {
      width: 50%;
    }
  }

  @media (min-width: 1920px) {
     {
      width: 33.33%;
    }
  }

  @media screen and (min-width: 64em) {
    :focus,
    :hover {
      transform: scale(1.02);
    }
  }

  h3 {
    font-size: 1.2rem;
    color: #ffffff !important;
    margin-bottom: 5px;
    margin-top: 15px;
  }

  @media (min-width: 1550px) {
    .h3,
    h3 {
      font-size: 2.14857em;
    }
  }

  :nth-of-type(3n + 6) {
    background-color: #133a4b;
  }

  :nth-of-type(3n + 2) {
    background-color: #153f51;
  }
  :nth-of-type(3n + 3) {
    background-color: #b13215;
  }

  :nth-of-type(3n + 4) {
    background-color: #d33a2c;
  }

  :nth-of-type(3n + 5) {
    background-color: #b13215;
  }

  :nth-of-type(3n + 1) {
    background-color: #d33a2c;
  }

  :last-child {
    margin-right: 0;
  }

  transition: color 0.4s ease-in-out, transform 0.2s ease-out,
    background-color 0.4s ease-in-out, border-color 0.4s ease-in-out;
`

const AnswersThreeColText = styled.div `
  font-size: calc(0.85em + 0.2vw);
  margin: auto;
  position: relative;
  padding: 5em 9vw 5em;

  .read-more{
    display: block;
    transition: all .2s ease-out;
    color: #d33a2c;
    font-size: 30px;
    padding: 40px 1.7em;
    width: 120px;
    height: 120px;
    text-align: center;
    text-shadow: none;
    background: 0 0;
    background-color: inherit;
    margin-top: 60px;
    position: absolute!important;
    bottom: 30px;
    left: -30px;
  }
`

const AnswersImage = styled.img `
  max-width: 100%;
  width: 100%;
  height: 300px;
`

const AnswersItems = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          allWordpressWpAnswers {
            edges {
              node {
                id
                title
                slug
                excerpt
                content
                featured_media {
                  source_url
                }
              }
            }
          }
        }
      `}
      render={props => (
        <AnswerItemContainer>
          {" "}
          <AnswerItemColContainer className={'ICC'}>
            {props.allWordpressWpAnswers.edges.map(answersItem => (
              <AnswersThreeColItem key={answersItem.node.id}>
                <AnswersImage
                  src={answersItem.node.featured_media.source_url}
                  alt="Thumbnail"
                />
                <AnswersThreeColText>
                  <h3>{answersItem.node.title}</h3>

                  <div
                    dangerouslySetInnerHTML={{
                      __html: answersItem.node.excerpt,
                    }}
                  />
                 <Link className={'read-more'} to={`/answers/${answersItem.node.slug}`}>
                 → 
                  </Link>
                </AnswersThreeColText>
              </AnswersThreeColItem>
            ))}
          </AnswerItemColContainer>
        </AnswerItemContainer>
      )}
    />
  )
}

export default AnswersItems
