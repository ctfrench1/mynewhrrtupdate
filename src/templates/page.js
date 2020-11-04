import React from "react"
import Layout from "../components/layout"
import AnswersItems from "../components/AnswersItems"
import Hero from "../components/Hero"
import 'bootstrap/dist/css/bootstrap.min.css'


import { Container, Row, Col } from 'react-bootstrap';

export default ({ pageContext }) => (
  <Layout>
    <Hero />
    <Container>
      <Row>
        <Col>
      <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }} />
      <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
    </Col>
    </Row>
    </Container>
    <AnswersItems />
  </Layout>
)
