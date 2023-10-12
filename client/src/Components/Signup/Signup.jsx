import React, { useState } from 'react'
import './Signup.css'
import Axios from 'axios'
import url from '../url'
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router'
function Signup() {
    //States
    const navigate = useNavigate('')
    const [firstname, setfirstname] = useState(null)
    const [lastname, setlastname] = useState(null)
    const [age, setage] = useState(null)
    const [medicalHistory, setMedicalHistory] = useState(null)
    const [allergies, setallergies] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setpassword] = useState(null)
    //Funtions
    const takeFirstName =e=>setfirstname(e.target.value)
    const takeLastName = e=>setlastname(e.target.value)
    const takeAge = e=>setage(e.target.value)
    const takeMedicalHistory = e=>setMedicalHistory(e.target.value)
    const takeAllergies = e=>setallergies(e.target.value)
    const takeEmail = e=>setEmail(e.target.value)
    const takePassword = e=>setpassword(e.target.value)
    const createAccount = ()=>{
        console.log(email, password, medicalHistory, firstname, lastname, allergies, age);
        Axios.post(`${url}/user/createaccount`, {
            email:email,
            password:password,
            medicalhistory:medicalHistory,
            allergies:allergies,
            firstname:firstname,
            lastname:lastname,
            age:age
        }).then(res=>{
            toast.success(`${res.data.msg}`, {
                autoClose:2000
            })
            navigate('/login')
        })
    }
  return (
    <div id='mainsignup'>
      <div id='createanacc'>
      <p >Create an Account</p>
      <p id='childDet'>Enter the Child Details Below</p>
      </div>
      <div id='childDetails'>
        <p>Email</p>
        <input type="email" onChange={takeEmail}/>
        <p>First Name</p>
        <input type="text" onChange={takeFirstName} />
        <p>Last Name</p>
        <input onChange={takeLastName} type="text" />
        <p>Age</p>
        <input type="number"  onChange={takeAge}/>
        <p>Medical History</p>
        <textarea onChange={takeMedicalHistory}></textarea>
        <p>Allergies</p>
        <textarea onChange={takeAllergies}></textarea>
        <p>Password</p>
        <input type="password" onChange={takePassword} />
        <button onClick={createAccount}>Create Account</button>
      </div>
    </div>
  )
}

export default Signup
