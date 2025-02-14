import React, { useEffect, useState } from 'react'


import eventsJson from '../data/events.json';
import Event from './Event';
import { Alert, Row } from 'react-bootstrap';
function Events() {


    const [message, setMessage] = useState(false)

    const [welcome, setWelcome] = useState(false)


    useEffect(()=>{

        setWelcome(true)


        setTimeout(()=>{
            setWelcome(false)
        } , 3000)

    },[])


    


    const showAlert = ()=>{

        setMessage(true)

        setTimeout(()=>{

            setMessage(false)
        },2000)
    }
    
  return (
    <>

    {welcome && 
<Alert variant="warning">
      <Alert.Heading>Welcome to our website</Alert.Heading>
     
    </Alert>}
    <h1>List events</h1>


<Row>
    {eventsJson.map((itemEvent, index) => (
    
   <Event item={itemEvent} key={index} show={showAlert}/>

    ))}
    </Row>
    
    {message && <Alert variant="success">
      <Alert.Heading>Hey you book an event</Alert.Heading>
     
    </Alert>}
    </>
  )
}

export default Events