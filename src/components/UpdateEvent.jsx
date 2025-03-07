import React, { useEffect, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom'
import { editEvent, getallEvents } from '../services/api';
import useEventStore from '../ZustandStores/useEventStore';

function UpdateEvent() {

    const {id}= useParams();
    const {  events , updateEventObject } =  useEventStore();
    const event = events.find((item)=>item.id == id)

   const navigate = useNavigate()

    // const [eventItem, setEventItem]= useState({
    //     name:"",
    //     description:"",
    //     img:"",
    //     price:0,
    //     nbTickets:0,
    //     nbParticipants:0,
    //     like: false
    // })

    const { register, handleSubmit, reset } = useForm({
        defaultValues: event,
    });
    useEffect(() => {
        // const fetchEvent = async (id) => {
        //     const event = await getallEvents(id);
        //     console.log(event.data);
        //     setEventItem(event.data);
        //     reset(event.data);
        // };
    
        // fetchEvent(id);
    }, [id, reset]); //
  


    
        const submit = async (data) => {
    
        const   {name, description, price, nbTickets , img}= data
    
        const result  = await editEvent(id, {
          id:id,
          name:name,
          description:description,
          price:price,
          img:img[0].name,
          nbTickets:nbTickets,
          nbParticipants: 0,
          like: false
        })
    
    

        updateEventObject(result.data)
        if (result.status == 200){
    
            navigate('/events')
        }
    
    
    
        
      };
    
  return (
    
 
    <Container className='mt-5'>

        <h1>Update  Event with id {id}       {event.name}
         </h1>
    <Form onSubmit={handleSubmit(submit)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name </Form.Label>
        <Form.Control type="text" placeholder="Enter name" {...register('name')}/>

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description </Form.Label>
        <Form.Control type="text" placeholder="Enter description" {...register('description')} />
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Image </Form.Label>
        <Form.Control type="file" placeholder="Enter image" {...register('img')} />
       
      </Form.Group>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Number of tickets </Form.Label>
        <Form.Control type="number" placeholder="Enter number of tickets" {...register('nbTickets')} />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>price </Form.Label>
        <Form.Control type="number" placeholder="Enter number" {...register('price')}  />
       
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>

  )
}

export default UpdateEvent