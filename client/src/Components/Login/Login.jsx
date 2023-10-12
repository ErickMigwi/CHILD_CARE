import React, { useEffect, useState } from 'react'
 import url from '../url'
 import Axios from 'axios'
 import '../Signup/Signup.css'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router'
 Axios.defaults.withCredentials = true
function Login() {
    const navigate = useNavigate()
 const [email, setemail] = useState(null)
 const [password, setpassword] = useState(null)
 //Funtions
 const takePassword = e=>setpassword(e.target.value)
 const takeEmail = e=>setemail(e.target.value)
   const login  = ()=>{
    Axios.post(`${url}/user/login`, {
        email:email,
        password:password
    }).then(res=>{
        if(res.data.msg == 'successfull login'){
            toast.success(res.data.msg, {
                autoClose:2000
            })
            navigate('/')
            window.location.reload()
        }else{
            toast.warning(res.data.msg, {
                autoClose:2000
            })
        }
    })
   }
   useEffect(()=>{
    Axios.get(`${url}/user/getUser`).then(res=>{
        console.log(res);
    })

   },[])
   const gotoSignUp  = ()=>navigate('/signup')
  return (
    <div id='mainsignup'>
    <div id='createanacc'>
        <p>Login to Your Account</p>
        <p id='childDet'>Welcome Back</p>
        </div>  
        <div id="childDetails">
        <p>Email</p>
        <input type="email" onChange={takeEmail} />
        <p>Password</p>
        <input type="password" onChange={takePassword}/>
        <button onClick={login}>Login</button>
        <p onClick={gotoSignUp} id='childDet'>SignUp</p>
        </div>
        
    </div>
  )
}

export default Login
