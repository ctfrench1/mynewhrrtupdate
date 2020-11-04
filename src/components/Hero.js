import React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css'


import { Container, Row, Col, Jumbotron, CardGroup, CardColumns, CardImg, Button, ButtonGroup, Card, Image, Carousel, CarouselItem } from 'react-bootstrap';

const JumbotronWrapper = styled.section `
  padding: 0 0 40px;
  position: relative;
  height: 70vh;


h2{
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  font-family: Alright Sans Ultra,Verdana,Geneva,sans-serif;
}

@media (min-width: 1024px){
 {
    line-height: .91765;
    min-height: 300px;
    padding-bottom: 150px;
}
}
@media (min-width: 768px){
h2 {
    font-size: 60px;
    font-size: 6rem;
    line-height: .93333;
}
}


h2 {
    font-size: 38px;
    font-size: 3.8rem;
    line-height: 1;
}

.content-contain{
  padding-top: 195px;
}

@media (min-width: 1440px){
.content-contain {
    width: 75%;
}
}
`

const PageShapes = styled.div `
  overflow: hidden;
  position: absolute;
  height: 100%;
  pointer-events: none;
  top: 0;
  width: 100%;


`
const PageShapes_Hero_Img_FCW = styled.div `
  @media (min-width: 1280px){
   {
      padding-bottom: 790px;
  }
}

@media (min-width: 1024px){
  {
     padding-bottom: 720px;
 }
}

@media (min-width: 768px){
  {
     padding-bottom: 790px;
 }
}

.page-shapes__img {
  position: absolute;
  z-index: -1;
}
`
const ImageTri = styled.img `
max-width: 592px;
top: 0;

@media (min-width: 1024px){
 {
    min-width: auto;
    width: 70%;
}
}
@media (min-width: 768px){
 {
    max-width: 105%;
}
}
@media (min-width: 580px){
 {
    max-width: 102%;
}
}
`

const ImageTri_2 = styled.img `
@media (min-width: 1024px){
{
    min-width: 40%;
}
}
 {
    bottom: 0;
    right: 0;
}
`

const Hero = () => (
<JumbotronWrapper className={'jumbotron jumbotron-fluid'}>
<PageShapes className={'page-shapes'}>
        <ImageTri src="\static\pink-tri.svg" className={'page-shapes__img'}/>
        <ImageTri_2 src="\myhrrtupdate\src\static\purple-tri.svg" className={'page-shapes__img'}/>
  </PageShapes>
  <Container className={'pt-5 pb-5 content-contain'}>

    <h2 className={'h1'}>Welcome to the HIV Risk Reduction Tool</h2>
    <p>
    Use this tool to access tailored information about your risk of getting or transmitting HIV, and how you can reduce your risk
    </p>
    <Button variant="primary" size="lg" disabled>
    Primary button
  </Button>{' '}
  <Button variant="primary" size="lg" disabled>
    Primary button
  </Button>{' '}
    <Carousel className="mx-auto mt-5">
    <Carousel.Item>
    <CardGroup>
      <Card className="mr-2">
        <Row>
          <Col>
          <p>some random text part three</p>
          </Col>
          <Col>
          <Image src="/" fluid />     
          </Col>
        </Row>
      </Card>
      <Card>
        <Row>
          <Col>
          <p>some random text part three</p>
          </Col>
          <Col>
          <p>some random text part three</p>   
          </Col>
        </Row>
      </Card>
    </CardGroup>
    </Carousel.Item>
    <Carousel.Item>
    <CardGroup>
      <Card className="mr-2">
        <Row>
          <Col>
<p>some random text part three</p>
          </Col>
          <Col>
          <Image src="/" fluid />     
          </Col>
        </Row>
      </Card>
      <Card>
        <Row>
          <Col>
          <p>some random text part three</p>
          </Col>
          <Col>
          <p>some random text part three</p>  
          </Col>
        </Row>
      </Card>
    </CardGroup>
    </Carousel.Item>
    </Carousel>
  </Container>
</JumbotronWrapper>
)

export default Hero
