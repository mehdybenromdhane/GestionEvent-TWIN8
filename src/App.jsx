
import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavigationBar from './components/Navbar'
import Welcome from './components/Welcome'
import EventDetails from './components/EventDetails'
import React from 'react'
import AddEvent from './components/AddEvent'

function App() {
  const Events = React.lazy(()=>import('./components/Events'))

  return (
    <>

<React.Suspense fallback={<h1>Loading ... </h1>}>
    <NavigationBar/>
    <Routes>
      <Route path="/events">

          <Route index element={<Events/>}/>
          <Route path=':id' element={<EventDetails/>}/>
          <Route path='/events/add' element={<AddEvent/>}/>

      </Route>

      <Route path='' element={<Welcome/>}/>


      <Route path="*" element={<img src='/images/notfound.jpeg' width="100%"/>}/>
    </Routes>
    </React.Suspense>

    </>
  )
}

export default App
