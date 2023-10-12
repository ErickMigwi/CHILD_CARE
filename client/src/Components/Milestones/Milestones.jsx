import React, { useState } from 'react'
import './Milestones.css'
import { useLocation, useNavigate } from 'react-router'
import { age1to2Intellectual,
    age2to3Intellectual,
    age3to4Intellectual,
    age4to5Intellectual,
    age5Intellectual,
    age1to2Physical,
    age2to3Physical,
    age3to4Physical,
    age4to5Physical,
    age5Physical,
    age0to1Emotional,
    age1to2Emotional,
    age2to3Emotional,
    age3to4Emotional,
    age4to5Emotional,
    age5Emotional,
    age0to1Physical,
    age0to1Intellectual} from './data'
function Milestones() {
    //States
    const navigate =useNavigate()
    const location = useLocation()
    console.log(age0to1Intellectual);
    console.log(location.state.value);
    const[todisplay, setToDisplay] = useState(location.state.value)
    //Funtions
    const back = ()=> navigate('/development')
  return (
    <div id='milestone'>
   {todisplay === '0-1' ? (
  <div>
    <p>Age 0-1 Intellectual</p>
    {age0to1Intellectual.map(e => (
      <div key={e}>
        
        <ul>
          <li>{e}</li>
        </ul>
      </div>
    ))}
    <p>Physical</p>
    {age0to1Physical.map(e => (
      <div key={e}>
        
        <ul>
          <li>{e}</li>
        </ul>
      </div>
    ))}
    {age0to1Intellectual.map(e => (
      <div key={e}>
        
        <ul>
          <li>{e}</li>
        </ul>
      </div>
    ))}
    <p>Emotional</p>
    {age0to1Emotional.map(e => (
      <div key={e}>
        
        <ul>
          <li>{e}</li>
        </ul>
      </div>
    ))}
    <button onClick={back}>Back</button>
  </div>
) : todisplay === '1-2' ?(
    <div>
    <p>Age 1-2 Intellectual</p>
    {age1to2Intellectual.map(e => (
      <div key={e}>
        
        <ul>
          <li>{e}</li>
        </ul>
      </div>
    ))}
    <p>Phyisical</p>
    {age1to2Physical.map(e => (
      <div key={e}>
        
        <ul>
          <li>{e}</li>
        </ul>
      </div>
    ))}
    <p>Emotional</p>
    {age1to2Emotional.map(e => (
      <div key={e}>
        
        <ul>
          <li>{e}</li>
        </ul>
      </div>
    ))}
    <button onClick={back}>Back</button>
  </div>
):todisplay ==='2-3' ?(
<div>
    <p>Age 2-3 Intellectual</p>
    {age2to3Intellectual.map(e => (
      <div key={e}>
        
        <ul>
          <li>{e}</li>
        </ul>
      </div>
    ))}
    <p>Phyisical</p>
    {age2to3Physical.map(e => (
      <div key={e}>
        
        <ul>
          <li>{e}</li>
        </ul>
      </div>
    ))}
    <p>Emotional</p>
    {age2to3Emotional.map(e => (
      <div key={e}>
        
        <ul>
          <li>{e}</li>
        </ul>
      </div>
    ))}
    <button onClick={back}>Back</button>
  </div>
):todisplay === '3-4'?(
    <div>
    <p>Age 3-4 Intellectual</p>
    {age3to4Intellectual.map(e => (
      <div key={e}>
        
        <ul>
          <li>{e}</li>
        </ul>
      </div>
    ))}
    <p>Phyisical</p>
    {age3to4Physical.map(e => (
      <div key={e}>
        
        <ul>
          <li>{e}</li>
        </ul>
      </div>
    ))}
    <p>Emotional</p>
    {age3to4Emotional.map(e => (
      <div key={e}>
        
        <ul>
          <li>{e}</li>
        </ul>
      </div>
    ))}
    <button onClick={back}>Back</button>
  </div>
):todisplay ==='4-5'?(
    <div>
    <p>Age 4-5 Intellectual</p>
    {age4to5Intellectual.map(e => (
      <div key={e}>
        
        <ul>
          <li>{e}</li>
        </ul>
      </div>
    ))}
    <p>Phyisical</p>
    {age4to5Physical.map(e => (
      <div key={e}>
        
        <ul>
          <li>{e}</li>
        </ul>
      </div>
    ))}
    <p>Emotional</p>
    {age4to5Emotional.map(e => (
      <div key={e}>
        
        <ul>
          <li>{e}</li>
        </ul>
      </div>
    ))}
    <button onClick={back}>Back</button>
  </div>
):(
    <p></p>
)}

    </div>
  )
}

export default Milestones
