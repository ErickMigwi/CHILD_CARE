import React from 'react'
import './Development.css'
import image1 from '../../../Images/0-1.jpg'
import image2 from '../../../Images/1-2.jpg'
import image3 from '../../../Images/2-3.jpg'
import image4 from '../../../Images/3-4.jpg'
import image5 from '../../../Images/4-5.png'
import { useNavigate } from 'react-router'
function Development() {
    //States
    const navigate = useNavigate()
    const age0to1 = ()=>{
        navigate('/milestone', {state:{value:'0-1'}})
    }
    const age1to2 = ()=>{
        navigate('/milestone', {state:{value:'1-2'}})
    }
    const age2to3 = ()=>{
        navigate('/milestone', {state:{value:'2-3'}})
    }
    const age3to4 = ()=>{
        navigate('/milestone', {state:{value:'3-4'}})
    }
    const aget4to5 = ()=>{
        navigate('/milestone', {state:{value:'4-5'}})
    }
  return (
    <div id='devMain'>
        <div>
        <p id='heading'>Development Milestone</p>
        <p id='childdevelopment'>
        Child development refers to the process of growth and maturation that occurs in children physically, cognitively, socially, and emotionally from infancy through adolescence. This intricate journey encompasses a series of milestones and stages, each playing a crucial role in shaping a child's overall well-being and capabilities.

<p id="childdevelopment">
Physically, child development involves the advancements in motor skills, coordination, and sensory perception. From the moment of birth, infants begin to explore and interact with their environment, gradually refining their abilities to crawl, walk, and manipulate objects. These physical milestones are not only indicators of a child's physical health but also contribute to their cognitive and social development.

</p>
<p id="childdevelopment">
Cognitive development involves the acquisition of knowledge, problem-solving skills, and intellectual capabilities. Children exhibit a remarkable capacity to learn and adapt as they progress through stages such as sensorimotor, preoperational, concrete operational, and formal operational thinking, as proposed by Jean Piaget. Cognitive development is influenced by both genetics and environmental factors, including exposure to stimuli, educational experiences, and supportive relationships.

</p>

<p id="childdevelopment">
Social and emotional development encompasses the formation of relationships, self-awareness, and the ability to regulate emotions. Children develop attachments to caregivers, peers, and others, forming the foundation for future social interactions. Emotional intelligence, self-esteem, and empathy are vital components of healthy social and emotional development, impacting a child's ability to navigate relationships and cope with life's challenges.
</p>
 
 <br />
 <p>Below are Development Milestones</p>
 <br />
        </p>
        </div>
      <div id="setToGrid">
      <div >
        <p>0-1years</p>
        <img src={image1} alt="" srcset="" onClick={age0to1} />
      </div>
      <div>
        <p>1-2years</p>
        <img src={image2} alt="" srcset="" onClick={age1to2}/>
      </div>
      <div>
        <p>2-3years</p>
        <img src={image3} alt="" srcset="" onClick={age2to3}/>
      </div>
      <div>
        <p>3-4years</p>
        <img src={image4} alt="" srcset="" onClick={age3to4} />
      </div>
      <div>
        <p>4-5years</p>
        <img src={image5} alt="" srcset="" onClick={aget4to5} />
      </div>
      </div>
    </div>
  )
}

export default Development
