import { useState } from 'react'
import { Route, Routes } from 'react-router'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Home from './Components/Home/Home'
import Signup from './Components/Signup/Signup'
import Login from './Components/Login/Login'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import Development from './Components/Development/Development.jsx/Development'
import Profile from './Components/Profile/Profile'
import EditProfile from './Components/EditProfile/EditProfile'
import Scheduler from './Components/Scheduler/Scheduler'
import Milestones from './Components/Milestones/Milestones'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div id='app'>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element = {<Signup/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/development' element = {<Development/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/editProfile' element={<EditProfile/>}/>
        <Route path='/schedule' element= {<Scheduler/>}/>
        <Route path = '/milestone' element={<Milestones/>}/>
        </Routes> 
        <ToastContainer/>
    </div>
  )
}

export default App
