import React from "react"
import Layout from "../components/layout"
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from "styled-components"
import Hero from "../components/Hero"


import { Row, Col } from 'react-bootstrap';
import AnswersItems from "../components/AnswersItems"

const MainSectionWrapper = styled.section `
height: 40vh;
padding-bottom: 4rem;
margin-bottom: 6rem;

.btn{
  border: 1px solid #666;
  color: #666;
  margin: 4em 0 0 0;
}
`

export default ({ pageContext }) => (
  <Layout>
    <Hero />
    <MainSectionWrapper className={'container'}>
      <Row>
        <Col>
        <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }} />
        <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
      </Col>
      <Col>
        Image Placeholder
      </Col>
    </Row>
    </MainSectionWrapper>
    <AnswersItems />
  </Layout>
)
