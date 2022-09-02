import React,{useState} from 'react';
import './Home.css';

export default function Slide() {


  const [step,setstep]=useState(1);



  const gotoslide2=()=>{
      if(step===1){
          setstep(2);
      }
      else{
          setstep(step -1);
      }
  
  }
  
  
  
  
  
  
  const gotoslide3=()=>{
      if(step===2){
          setstep(1);
      }
      else{
          setstep(step +1);
      }
     
  }

  return (
    <>
    <div className='bg' >
      
      
        <div className='top'>
          
          <div >
            <p className='test'>TESTIMONIALS</p>
            <p className='test1'>What our clients say</p>
            <button className='button1'>CONTACT US</button>
            </div>
            <div className='img-box'>
            {step===1&&     <div className='scolor'>
          <h1>,,</h1>
         <p className='stext' >AppBroda's optimization team helped me make my app profitable by optimizing the eCPM and overall Ad Revenue to get a better ROAS. Really thankful to the team for giving these results with their optimization product.</p>
       <div>
        <h4>Maulik</h4>
        <h3>CEO, Capset Infotech</h3>
        </div>
        </div>}
       
        {step===1&&    
        <div className='scolor'>
          <h1>,,</h1>
         <p className='stext' >I was facing low eCPM issues in most of my apps. I tried using a few strategies of my own but could not do much. With AppBroda's Plug-and-Play optimization suit, I saw great results and could't be happier</p>
       <div>
        <h4>Nayan</h4>
        <h3>CEO, Logicbuzz Infotech</h3>
        </div>
        </div>}
        {step===2&&  <div className='scolor'>
          <h1>,,</h1>
         <p className='stext' >We are thankful to the AppBroda team for helping us to grow our revenue. Support team is very active and they are ready to help at any time.</p>
       <div>
        <h4>Chirag</h4>
        <h3>CEO, Qtonz Infotech</h3>
        </div>
        </div>}
        {step===2&&  <div className='scolor'>
          <h1>,,</h1>
         <p className='stext' >Really amazed by the returns the optimization team has given! Great work and thank you.</p>
       <div>
        <h4>Vivek Hirpara</h4>
        <h3>CEO, Pthink Infotech</h3>
        </div>
        </div>}
        
        </div>
        
        
        </div>
       
        
     </div>
     <div className='indicators-box'>
            
            <div className='indicator' onClick={gotoslide2}  ></div>
            <div className='indicator' onClick={gotoslide3}></div>
            
            </div>


</>
  )
}
