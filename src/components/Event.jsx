import React, { useState } from 'react'
import { Alert, Button, Card } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function Event({item , show ,deleteE}) {

    const [event,setEvent] = useState(item)



    const changeLike= ()=>{

        setEvent((prevEvent)=>({

            ...prevEvent,
            like: !prevEvent.like

        }))
    }


    const bookEvent = ()=>{
        show()
        setEvent((prevEvent)=>({
           ...prevEvent,
            nbParticipants: prevEvent.nbParticipants+1,
            nbTickets: prevEvent.nbTickets -1
        }))
    }
  return (

    <>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src= {event.nbTickets >0?`/images/${event.img}`:'/images/sold_out.png'} />
    <Card.Body>

      <NavLink to={`/events/${event.id}`}>
      <Card.Title>{event.name}</Card.Title>

      </NavLink>
      <Card.Text>
       Price :{event.price}
      </Card.Text>
      <Card.Text>
       Number of participants :{event.nbParticipants}
      </Card.Text>
      <Card.Text>
       Number of tickets :{event.nbTickets}
      </Card.Text>
      <Button variant="primary" disabled={!event.nbTickets} onClick={bookEvent}>Book an event</Button>
      <Button variant="warning" onClick={changeLike}  >{event.like ? 'Dislike' : 'Like'}</Button>
      <Button variant="danger" onClick={()=>deleteE(event.id)}  >delete</Button>
      <Button variant="info" as={NavLink} to={`/events/update/${event.id}`}>update</Button>


    </Card.Body>
  </Card>
  
  </>
  )
}

export default Event