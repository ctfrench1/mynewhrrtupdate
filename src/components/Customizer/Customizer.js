// Menu.js
import React from 'react';
import { CustomizerStyled } from './Customizer.styled';
import 'bootstrap/dist/css/bootstrap.min.css'


import { Form, FormLabel, Button } from 'react-bootstrap';

const Customizer = () => (
<CustomizerStyled>
<Form>
<p class="h3 mb-4">Customize Your Experience</p>
<Form.Group controlId="formGroupGender">
<p class="h6">Tell us about yourself</p>
{['radio'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
     <Form.Label className="pr-5">Gender</Form.Label>
      <Form.Check inline label="M" type={type} id={`inline-${type}-2`} />
      <Form.Check inline label="F" type={type} id={`inline-${type}-3`} />
      <Form.Check inline label="TM" type={type} id={`inline-${type}-4`} />
      <Form.Check inline label="TW" type={type} id={`inline-${type}-5`} />
    </div>
  ))}
  </Form.Group>
  <Form.Group controlId="sexAssignedAtBirth">
{['radio'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
    <Form.Label className="pr-5">Sex Assigned At Birth</Form.Label>
      <Form.Check inline label="M" type={type} id={`inline-${type}-6`} />
      <Form.Check inline label="F" type={type} id={`inline-${type}-7`} />
    </div>
  ))}
  </Form.Group>
  <Form.Group controlId="formPartnerGroupGender">
  <p class="h6">Tell us about your partners</p>
{['radio'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
     <Form.Label className="pr-5">Gender</Form.Label>
      <Form.Check inline label="M" type={type} id={`inline-${type}-8`} />
      <Form.Check inline label="F" type={type} id={`inline-${type}-9`} />
      <Form.Check inline label="TM" type={type} id={`inline-${type}-10`} />
      <Form.Check inline label="TW" type={type} id={`inline-${type}-11`} />
    </div>
  ))}
  </Form.Group>
  <Button className="mr-4" type="submit" size="lg">Finished</Button>
  <Button type="submit" size="lg">Reset</Button>
</Form>
</CustomizerStyled>
)


export default Customizer;
