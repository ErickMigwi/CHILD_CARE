import React, { useState } from 'react'
import '../Signup/Signup.css'
import { useLocation, useNavigate } from 'react-router'
import Axios from 'axios'
import url from '../url'
import {toast} from 'react-toastify'
function Scheduler() {
  //States
  const location = useLocation()
  const navigate = useNavigate()
  const[scheduledate, setscheduledate] = useState(null)
    //Funcitons
    console.log(location.state.iduser);
    const takeschedule = (e)=>setscheduledate(e.target.value)
    const addScheduleDate = ()=>{
        Axios.post(`${url}/schedule/setschedule`, {
            id:location.state.iduser,
            date: scheduledate
        }).then(res=>{
          toast.success(res.data, {
            autoClose:2000
          })
           navigate('/profile')
        })
    }
  return (
    <div id='mainsignup'>
      <div id="createanacc">
        <p>Set Meeting Date</p>
        <p id='childDet'>
            Set a Date For a Meeting
        </p>
        <div id='childDetails'>
            <p>Set Date</p>
            <input type="datetime-local"onChange={takeschedule}/>
            <button onClick={addScheduleDate}>Add Scheduled Date</button>
        </div>
      </div>
    </div>
  )
}

export default Scheduler
