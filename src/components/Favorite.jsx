import React from 'react'
import useFavoriteStore from '../ZustandStores/useFavoriteStore'
import { Button, Card } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function Favorite() {

    const {favoriteEvents , deleteFavoriteObject} = useFavoriteStore()
  return (

<>
    {favoriteEvents.length ==0 ? (
        <h1> no favorite events</h1>

    ) : 

favoriteEvents.map((event)=> ( 

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

      <Button variant='danger' onClick={()=>deleteFavoriteObject(event.id)}>remove from favorite</Button>
     


    </Card.Body>
  </Card>

))}
    
  </>
  )

 
}

export default Favorite