import { Button, Container, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addEvent } from '../services/api'
import {eventSchema} from "../Types/EventSchema"
import { zodResolver } from '@hookform/resolvers/zod'
import useEventStore from '../ZustandStores/useEventStore'
 
function AddEvent() {




     const { addEventObject } =  useEventStore();
    const navigate = useNavigate()

    const {register ,handleSubmit ,formState: { errors } } = useForm({
      resolver: zodResolver(eventSchema),
    });
   





    const submit = async (data) => {


      console.log(data)
    const   {name, description, price, nbTickets , img}= data

    const result  = await addEvent({
      name:name,
      description:description,
      price:price,
      img:img[0].name,
      nbTickets:nbTickets,
      nbParticipants: 0,
      like: false
    })

    addEventObject(result.data)

    if (result.status == 201){

        navigate('/events')
    }



    
  };

    
  return (

    <Container className='mt-5'>

        <h1>Add Event</h1>
    <Form onSubmit={handleSubmit(submit)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name </Form.Label>
        <Form.Control type="text" placeholder="Enter name" {...register('name')}/>
        {errors.name && <p style={{color:"red"}}>{errors.name.message}</p>}

      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description </Form.Label>
        <Form.Control type="text" placeholder="Enter description" {...register('description')} />
        {errors.description && <p style={{color:"red"}}>{errors.description.message}</p>}

        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Image </Form.Label>
        <Form.Control type="file" placeholder="Enter image" {...register('img')} />
        {errors.img && <p style={{color:"red"}}>{errors.img.message}</p>}

       
      </Form.Group>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Number of tickets </Form.Label>
        <Form.Control type="number" placeholder="Enter number of tickets" {...register('nbTickets')} />
        {errors.nbTickets && <p style={{color:"red"}}>{errors.nbTickets.message}</p>}

      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>price </Form.Label>
        <Form.Control type="number" placeholder="Enter number" {...register('price')}  />
        {errors.price && <p style={{color:"red"}}>{errors.price.message}</p>}

      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
  )
}

export default AddEvent