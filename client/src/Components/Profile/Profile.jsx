import React, { useEffect, useState } from 'react'
import url from '../url'
import Axios from 'axios'
import './Profile.css'
import { useNavigate } from 'react-router'
function Profile() {
    Axios.defaults.withCredentials = true
    //States
    const navigate = useNavigate()
    const[user, setUser] = useState(null)


    //Funtions\
    const gotoEditProf = ()=>navigate('/editProfile')
    useEffect(() => {
        Axios.get(`${url}/user/getUser`).then(res => {
            Axios.get(`${url}/user/userDetails`, {
                params: {
                    id: res.data[0].idusers
                }
            }).then(result => {
                console.log(result);
                setUser(result.data[0]);
            });
        });
    }, []);

    const gotoLogin = ()=>navigate('/login')
    const gotoScheduler = ()=>navigate('/schedule', {state:{iduser:user.idusers}})
    return (
    <div id='mainProf'>
      <div>
        {user ?(
      <div>
          <div id='displayprofimg'>
            <img src={`${url}/uploads/${user.profileimage}`} alt="this is a user profile image" srcset="" />
            <p>{user.firstname}{user.lastname}</p>
            <button id='editProf' onClick={gotoEditProf}>Edit Profile</button>
            <button id='switchAcc' onClick={gotoLogin}>Switch Account</button>
            <button id='editProf' onClick={gotoScheduler}>Add a Schedule</button>
        </div>
        <div id='Details'>
            <h4>Medical History</h4>
            <p>{user.medicalhistory}</p>
            <h4>Allergies</h4>
            <p>{user.allergies}</p>
            <h4>Age</h4>
            <p>{user.age}</p>
        </div>
      </div>
        ):(
          <>
          <p>To access this page first login to your account</p>
          <button onClick={gotoLogin}>Login</button>
    
          </>
        )}
      </div>
    </div>
  )
}

export default Profile
