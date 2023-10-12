import React, { useState, useEffect } from 'react'
import logo from '../../Images/logo1.png'
import './NavBar.css'
import { useNavigate } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Axios from 'axios'
import url from '../url'
function NavBar() {
  //States
  Axios.defaults.withCredentials = true

  const navigate = useNavigate()
  const [opts, setshowopts] = useState(false)
  const [userAuthenticate, setUserAuthenticated] = useState(null)
  //Functions

  const gotoHome = ()=>navigate('/')
  const showOpts = ()=>setshowopts(!opts)
  const gotoLogin =()=>navigate('/login')
  const gotoProfile = ()=>navigate('/profile')
  const gotoPrograms = ()=>navigate('/development')
  useEffect(()=>{
    Axios.get(`${url}/user/getUser`).then(res=>{
        console.log(res);
        setUserAuthenticated(res.data[0])
    })

   },[])
  return (
    <div id='mainNav'>
      <div id='navBar1'>
    <p id='projectTitle' onClick={gotoHome}>CHILD CARE</p>
    <p id='childrenzone'>Children Zone</p>
      </div>
      <div id="navBar2">
        <button id='home' onClick={gotoHome}>HOME</button>
        <button id='about'>ABOUT</button>
        <button id='ourprograms' onClick={gotoPrograms}>OUR PROGRAMS</button>
        {userAuthenticate ? (
          <button id='login' onClick={gotoProfile}>PROFILE</button>
        ):(
          <button id='login' onClick={gotoLogin}>LOGIN</button>
        )}
        <button id='contact'>CONTACT</button>
        <button onClick={showOpts} id='bars'><FontAwesomeIcon className='bars' icon={faBars} /></button>
        { opts &&
          <div id='opts'>
            <button onClick={gotoHome}>Home</button>
            <button>Login</button>
            <button>Our Programs</button>
            <button>Contact</button>
          </div>
        }
      </div>
      
    </div>
  )
}

export default NavBar
