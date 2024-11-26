import './App.css'
import Home from './pages/Home'
import Events from './pages/Events'
import Pnf from './pages/Pnf'
import { Route, Routes } from 'react-router-dom'

function App() {
 

  return (
    <>
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/events' element={<Events/>} />
        <Route path='/*' element={<Pnf/>} />
      </Routes>
      

    </>
  )
}

export default App
