import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router'
import '../Signup/Signup.css'
import Axios, { all } from 'axios'
import url from '../url'
import {toast} from 'react-toastify'
function EditProfile() {
    Axios.defaults.withCredentials = true
     //States
     const navigate = useNavigate('/')
     const [firstname, setfirstname] = useState(null)
     const [lastname, setlastname] = useState(null)
     const [age, setage] = useState(null)
     const [medicalHistory, setMedicalHistory] = useState(null)
     const [allergies, setallergies] = useState(null)
     const [email, setEmail] = useState(null)
     const [showeditImage, setShowEditImage] = useState(false)
     const [user,setUser] = useState(null)
     const [profileimg, setProfileimg] = useState(null)
        //Funtions
    const takeFirstName =e=>setfirstname(e.target.value)
    const takeLastName = e=>setlastname(e.target.value)
    const takeAge = e=>setage(e.target.value)
    const takeMedicalHistory = e=>setMedicalHistory(e.target.value)
    const takeAllergies = e=>setallergies(e.target.value)
    const takeEmail = e=>setEmail(e.target.value)
    const takeProfileImg = (e)=>setProfileimg(e.target.files[0])
    

    const editAccount = ()=>{
        Axios.post(`${url}/user/updateprofile`, {
            email:email,
            medicalhistory:medicalHistory,
            allergies:allergies,
            firstname:firstname,
            lastname:lastname,
            age:age,
            id:user.idusers
        }).then(res=>{
            toast.success(res.data.msg, {
                autoClose:2000
            })
        })
    }
    const getUser = ()=>{
        
        Axios.get(`${url}/user/getUser`).then(res=>{
            setUser(res.data[0])
            console.log(res);
            setEmail(res.data[0].email)
            setMedicalHistory(res.data[0].medicalhistory)
            setage(res.data[0].age)
            setallergies(res.data[0].allergies)
            setfirstname(res.data[0].firstname)
            setlastname(res.data[0].lastname)

        })
    }
    const showEditImage =()=>setShowEditImage(!showeditImage)
    useEffect(()=>{
    getUser()
    },[])
    const updateProfile = ()=>{
        
       if(profileimg){
        console.log(user.idusers);
        const formData = new FormData()
        formData.append('idusers', user.idusers)
        formData.append('image',profileimg)
        Axios.post(`${url}/user/updateprofileimage`,formData, {
            headers:{
                'Content-Type':'multipart/form-data'
              }
        }).then(res=>{
            toast.success(res.data.msg, {
                autoClose:2000
            })
        })
       }else{
        toast.warning('input cant be empty')
       }
    }
  return (
    <div>
        {user &&
        <div id='mainsignup'>
        <div id='createanacc'>
        <p >Edit Account</p>
        <p id='childDet'>Enter New Details Below</p>
        </div>
        <div id='childDetails'>
          <p>Email</p>
          <input type="email" onChange={takeEmail} value={email}/>
          <p>First Name</p>
          <input value={firstname} type="text" onChange={takeFirstName} />
          <p>Last Name</p>
          <input onChange={takeLastName} value={lastname} type="text" />
          <p>Age</p>
          <input type="number" value={age}  onChange={takeAge}/>
          <p>Medical History</p>
          <textarea onChange={takeMedicalHistory} value={medicalHistory}></textarea>
          <p>Allergies</p>
          <textarea onChange={takeAllergies} value={allergies}></textarea>
         {user.profileimage ? (
             <button onClick={showEditImage}>Edit Profile Image</button>
         ):(
            <button onClick={showEditImage}>Add Profile Image</button>
         )}
         {showeditImage &&
         <div id='editImage'>
            <input type="file" onChange={takeProfileImg} />
            <button onClick={updateProfile}>Edit Image</button>
         </div>
         }
          <button onClick={editAccount}>Edit Account</button>
        </div>
      </div>
        }
    </div>
  )
}

export default EditProfile
