import React from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
function AddEvent() {

    const {register , handleSubmit} =useForm()


    const submit = (data)=>{

        console.log(data)
        
    }
  
  return (

    <Container>
        <h1>Add Event</h1>
    <Form onSubmit={handleSubmit(submit)}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" placeholder="Enter name" {...register('name')} />
      
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>description</Form.Label>
      <Form.Control type="text" placeholder="Enter description" />
      
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Image</Form.Label>
      <Form.Control type="file"/>
      
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Price</Form.Label>
      <Form.Control type="number" placeholder="Enter price" />
      
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Number of tickets</Form.Label>
      <Form.Control type="number" placeholder="Enter number of tickets" />
      
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  </Container>
  )
}

export default AddEvent