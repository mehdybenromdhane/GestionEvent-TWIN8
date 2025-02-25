import React, { useEffect, useState } from 'react'


import eventsJson from '../data/events.json';
import Event from './Event';
import { Alert, Row } from 'react-bootstrap';
import { deleteEvent, getallEvents } from '../services/api';
function Events() {


    const [message, setMessage] = useState(false)

    const [welcome, setWelcome] = useState(false)

    const [eventsResult , setEventsResult] =useState([])

   

    useEffect(()=>{

      const fetchEvents = async ()=>{
    

        const listEvents = await getallEvents()
  
        setEventsResult(listEvents.data)
        console.log(eventsResult)
  
      };

      fetchEvents();

    },[])
    useEffect(()=>{
      
     
   

        setWelcome(true)


        setTimeout(()=>{
            setWelcome(false)
        } , 3000)
    },[])



    const deleteE  = async(id)=>{

      await deleteEvent(id)
      setEventsResult(()=>eventsResult.filter((event)=>event.id !== id))

      
    }   


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
    {eventsResult.map((itemEvent, index) => (
    
   <Event  deleteE={deleteE}item={itemEvent} key={index} show={showAlert}/>

    ))}  
    </Row>
    
    {message && <Alert variant="success">
      <Alert.Heading>Hey you book an event</Alert.Heading>
     
    </Alert>}
    </>
  )
}

export default Events