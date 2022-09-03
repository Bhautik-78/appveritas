import React from 'react';
import '../About/About.css';
// import img1 from '../Image/about.png';
import img from '../../Image/about.png';
import img1 from '../../Image/white.png';
import img2 from '../../Image/data.png';
import img3 from '../../Image/supportive.png';
import img4 from '../../Image/evolustin.png';
import img5 from '../../Image/perks.png';
import img6 from '../../Image/perks1.png';







export default function About() {
  return (
    <>
    <div className='dimo'>
    <div>
            <img  className=' demoimg'src={img} alt='img'></img>
        </div>
        <div>
            <p className='demo'>ABOUT US</p>
            <p className='demo1'>We are a SAAS company with a vision to become a one stop solution for an app publisher that fuels their entire mobile App’s Growth. We help app publishers focus on what they do best – creating great apps – while we enable their business expansion in the app economy.</p>
           
        </div>
        

     </div>
     <div className='start'>
      <p>Our Mission</p>
      <p style={{fontSize:"20px"}}>To help app developers turn their apps into scalable and successful businesses.</p>
     </div>
     
     
     <div className='start'>
      <p>Our Values</p>
     </div>
     <div>
        <div className='about'>
            <div className='about1'>
                <p className='abouttext'>Transparent</p>
                <img  className='aboutimg'src={img1} alt='img'></img>
                <p className='abouttext1'>We believe transparency helps everyone grow while avoiding hassles and making operating easier.</p>
            </div>
        
     
       
            <div className='about1'>
                <p className='abouttext'>Data Driven</p>
                <img  className='aboutimg'src={img2} alt='img'></img>
                <p className='abouttext1'>We think creatively and then let the data be our guide.</p>
           
        </div>
        
     </div>
     <div className='about'>
            <div className='about1'>
                <p className='abouttext'>Supportive</p>
                <img  className='aboutimg'src={img3} alt='img'></img>
                <p className='abouttext1'>We believe transparency helps everyone grow while avoiding hassles and making operating easier.</p>
            </div>
        
     
       
            <div className='about1'>
                <p className='abouttext'>Evolution</p>
                <img  className='aboutimg'src={img4} alt='img'></img>
                <p className='abouttext1'>
We love taking the initiative to explore new ideas. We’re adaptable, embrace change and learn from failure.</p>
           
        </div>
        
     </div>
     </div>
     <div className='start'>
      <p>At AppBroda, we want to build a community of people who want to learn new skills, solve interesting problems and work among people who motivate each other to become better versions of themselves.</p>
     </div>
     <div className='bunn'> <button className='button1'>JOIN US!</button></div>

     <div className='dimoo' style={{backgroundColor:"#E2EFFF",marginTop:"80px"}}>
    <div>
            <img  className=' demoimg'src={img5} alt='img'></img>
        </div>
        <div>
            <p className='demo' style={{fontSize:"25px",marginTop:"80px"}}>Perks of working with us</p>
            <p className='demo1'>✔ Work Remotely</p>
            <p className='demo1'>✔ Flexible timing</p>
            <p className='demo1'>✔ No upper cap on leaves</p>
            <p className='demo1'>✔ Work Life Balance</p>
            <p className='demo1'>✔  Focus on Health and Wellbeing</p>
            <p className='demo1'>✔  Autonomy and Ownership</p>

        </div>
        

     </div>
     <div className='dimo' >
      
      <div style={{marginTop:"80px"}}>
    <p className='gtext'>WORK WITH US</p>
    {/* <p className='gtext1'>Robust App Monetization Strategy</p> */}
    <p className='demo1'>We are a budding startup with a team of young and passionate individuals set to revolutionize the AdTech industry.</p>
    {/* <p className='gtext1'>Maximize Your ROI</p> */}
    <p className='demo1'>
Innovation, creativity, and inspiration are part of our every day — and they could be part of yours too!</p>
    
    <button className='demobtn'>JOIN US!</button>
      </div>
      <div>
      <img  className='bimg'src={img6} alt='img'></img>
      </div>
     </div>
    </>
  )
}
