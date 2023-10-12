import React, { useEffect, useState } from 'react'
import './Home.css'
import image1 from '../../Images/slider_1.jpg'
import image2 from '../../Images/slider_2.jpg'
import image3 from '../../Images/slider_3.jpg'
import image4 from '../../Images/slider4.jpg'
import image5 from '../../Images/slider1.jpg'
import section from '../../Images/section2.png'
import infant from '../../Images/infant.png'
import enrollment from '../../Images/enrollment.jpg'
import aboutus from '../../Images/aboutus.jpg'
import photogallery from '../../Images/photogallery.jpg'
import logoft from '../../Images/logoft.png'
import { useNavigate } from 'react-router'
function Home() {
    const navigate = useNavigate()
    const [activeSlide, setactiveSlide] = useState(1)
    const next = '>'
    const nextSlide = ()=>{
       if(activeSlide<5){
        setactiveSlide(activeSlide+1)
       }else{
        setactiveSlide(1)
       }
    }
 
    const gotoDevelopment = ()=>{
        navigate('/development')
    }
    setInterval(()=>{
        nextSlide()
      
    }, 25000)
    useEffect(()=>{
       
        return ()=>clearInterval(activeSlide)
    }, [activeSlide])
  return (
    <div id='mainHome'>
   {activeSlide === 1 ?(
       <div id='homeDetails'>
       <img id='sliderimg' src={image1} alt="" srcset="" />
       <div id="details">
       <p id='pdetails'>High-Quality Child Care & Early Education
       </p>
       <button onClick={nextSlide} id='next'>{next}</button>
       </div>
       <button id='homeDetailsbutton' onClick={gotoDevelopment}>ENQUIRE NOW</button>
       </div>
   ):activeSlide === 2 ?(
    <div id='homeDetails'>
    <img id='sliderimg' src={image2} alt="" srcset="" />
    <div id="details">
    <p id='pdetails'>High-Quality Child Care & Early Education
    </p>
    <button id='next' onClick={nextSlide}>{next}</button>
    </div>
    <button id='homeDetailsbutton' onClick={gotoDevelopment}>ENQUIRE NOW</button>
    </div>
   ):activeSlide === 3 ?(
    <div id='homeDetails'>
    <img id='sliderimg' src={image3} alt="" srcset="" />
    <div id="details">
    <p id='pdetails'>High-Quality Child Care & Early Education
    </p>
    <button id='next' onClick={nextSlide}>{next}</button>
    </div>
    <button id='homeDetailsbutton' onClick={gotoDevelopment}>ENQUIRE NOW</button>
    </div>
   ):activeSlide ===4 ?(
    <div id='homeDetails'>
    <img id='sliderimg' src={image4} alt="" srcset="" />
    <div id="details">
    <p id='pdetails'>High-Quality Child Care & Early Education
    </p>
    <button id='next' onClick={nextSlide}>{next}</button>
    </div>
    <button id='homeDetailsbutton' onClick={gotoDevelopment}>ENQUIRE NOW</button>
    </div>
   ):(
    <div id='homeDetails'>
    <img id='sliderimg' src={image5} alt="" srcset="" />
    <div id="details">
    <p id='pdetails'>High-Quality Child Care & Early Education
    </p>
    <button id='next' onClick={nextSlide}>{next}</button>
    </div>
    <button id='homeDetailsbutton' onClick={gotoDevelopment}>ENQUIRE NOW</button>
    </div>
   )}
   <div id='section2'>
    <div id="section2_1">
        <p id='sectionHeading'>Welcome to Child Care </p>
        <p id='sectionDetails'>A quality learning program locaties in Nyeri Kenya, it's a truly innovative childcare educative website.We offer programs for children ranging from the age of 0 years to 5 years</p>
        <p id='highlights'>Highlights/Quick Facts:</p>
        <ul id='ul' style={{listStyle:'square inside'}}>
        <li>Enrollment of an infant</li>
        <li>Attendace tracking</li>
        <li>Scheduling of Infants activities</li>
        <li>Ensuring Child Safety</li>
        <li>Adding Medical History</li>
        <li>Generating Accurate Reports</li>
        </ul>
        <p id="webDesc">
        Welcome to our Childcare Management Platform, a dedicated online solution designed to streamline and enhance the management of childcare facilities. Our platform caters specifically to the needs of parents, caregivers, and childcare providers, offering a range of features to ensure a secure, organized, and nurturing environment for infants.
        </p>
        <p id='webDesc'>
        Our user-friendly interface simplifies the enrollment process, allowing parents and guardians to seamlessly register their infants into the childcare system. The platform collects essential information and ensures a smooth onboarding experience.
        </p>
    </div>
    <div id='section2_2'>
        <img id='sectionimg' src={section} alt="a child's image" srcset="" />
        <img id='infant' src={infant} alt="" srcset="" />
    </div>
   </div>
   <div id='section3'>
    <div id="abouttheapp">
        <img src={enrollment} alt="" />
        <p>We invite you to learn about our simple enrollment process, our tuition rates and how to get added to our waiting list.   <button>Learn More</button> </p>
      
    </div>
    <div id="abouttheapp">
        <img src={aboutus} alt="" />
        <p>Explore our teaching and care philosophy, our experienced staff credentials and about the learning environment at Children's Zone Home Daycare.<button>Learn More</button></p>
        
    </div>
    <div id="abouttheapp">
        <img src={photogallery} alt="" />
        <p>Take a peak inside our learning center, our outside play area, and our children engaged in fun, age-appropriate learning activities. 
        <button>Learn More</button>
        </p>
        
    </div>
   </div>
   <div id='footer'>
    <div id='footerBtn'>
        <button>Home  /</button>
        <button>About /</button>
        <button>Infants & Toddlers /</button>
        <button>Preschool /</button>
        <button>Enrollment & Tution /</button>
        <button>Gallery /</button>
        <button>Contact /</button>
    </div>
    <div id='copyright'>
        <p>© Copyright 2023 ChildCare</p>
        <img src={logoft} alt="" srcset="" />
    </div>
   </div>
    </div>
  )
}

export default Home
