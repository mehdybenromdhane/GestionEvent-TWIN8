import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import events from "../data/events.json";
import { Card, Col, Container, Row } from 'react-bootstrap';
import { getallEvents } from '../services/api';
import useEventStore from '../ZustandStores/useEventStore';
function EventDetails() {

    const {id} =useParams()



    const events =  useEventStore((state)=>state.events)


    const event = events.find((item)=>item.id == id)
    // const [event , setEvent]= useState({})

//      const fetchEventDetails= async()=>{

//         const eventDetails = await getallEvents(id)

//         setEvent(eventDetails.data)


//     }
// useEffect(()=>{

   

//     fetchEventDetails()


// },[])

    console.log(event)
  return (
    <Container style={{ marginTop: "30px" }}>
    <Row>
      <Col md={4}>
        <Card.Img
          variant="top"
          src={`/images/${event.img}` }         alt="event Img"
          height="300"
        />
      </Col>
      <Col md={8}>
        <Row>
          <Col md={12}>
            <h1>{event.name}</h1>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <h5>{event.description}</h5>
          </Col>
          <Col>
            <p style={{ marginLeft: "50px" }}></p>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <h5>Price</h5>
          </Col>
          <Col>
            <p style={{ marginLeft: "50px" }}> {event.price} DT</p>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
  )
}

export default EventDetails