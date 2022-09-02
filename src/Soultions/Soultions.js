import React from 'react';
import './Soultions.css';
import Navbar from '../Navbar/Navbar';
import img from '../Image/google.png';
import img1 from '../Image/lock.png';
import img2 from '../Image/Graf.png';
import img3 from '../Image/setting.png';
import img4 from '../Image/what.jpg';
import img5 from '../Image/accout.png';
import img6 from '../Image/bubble.png';
import img7 from '../Image/faq.png';
import Slide from '../Home/Slide';
import Divider from '@mui/material/Divider';

export default function Soultions() {
  
  return (
    <>
    <Navbar/>
     <div className='dimo'>
        <div>
            <p className='demo'>Unleash the full value of your inventory with Google AdX.</p>
            <p className='demo1'>Get the Highest eCPM and the Fill Rate that your content deserves by the best Google AdX partner for publishers.</p>
            <button className='demobtn'>Setup A Demo  </button>
        </div>
        <div>
            <img  className=' demoimg'src={img} alt='img'></img>
        </div>

     </div>
     <div className='dche'>
        <div>
            <p className='yche'>Your Challenges</p>
            <p className='yche1'> ❌Ad serving limit on AdMob/AdSense</p>
            <p className='yche1'>❌ Managing everything yourself</p>
            <p className='yche1'>❌Managing multiple ad partners</p>
            <p className='yche1'>❌SDK integration for every ad Partner</p>
            <p className='yche1'>❌No support from the existing ad Partner</p>
            <p className='yche1'> ❌Low eCPM and Fill Rates</p>
        </div>
        <div className='color'>
        <p className='yche'>Our Solutions</p>
        <p className='yche1'>✅Scale your app without the fear of Ad serving</p>
        <p className='yche1'>✅Complete Ad Ops support to takes care of your day-to-day operations</p>
        <p className='yche1'>✅ Access to 10+ app advertising demand partners</p>
        <p className='yche1'>✅ No additional SDK Integration required</p>
        <p className='yche1'>✅ Analysis, consultation, payments and ad quality issues are handled by our hands-on team of experts</p>
        <p className='yche1'>✅ Dedicated Account Manager for quick support</p>
        <p className='yche1'>✅ Optimization experts increase your Ad Revenue</p>
        </div>
     </div>
     <div className='start'>
      <p>How to Get Started</p>
     </div>
     <div className='sign'>

  <div className='signn' >
    <p className='sign1'>1</p>
    <p className='sign2' style={{color: "blue"}}>Signup</p>
    <p className='sign3'>Fill out a small form to help us understand you better.</p>
  </div>
  <div className='signn' >
    <p className='sign1'>2</p>
    <p className='sign2' >Onboard</p>
    <p className='sign3'>Discuss your goals and performance benchmark with our expert.</p>
  </div>
  <div className='signn'>
    <p className='sign1'>3</p>
    <p className='sign2' >Get App Approval</p>
    <p className='sign3'>Get your app audited upfront to ensure uninterrupted monetization.</p>
  </div>
     </div>
     <div className='sign'>
     <div className='signn'>
    <p className='sign1'>4</p>
    <p className='sign2' >Integrate Ad units</p>
    <p className='sign3'>Solve all your ad serving problems with a single Ad Tag.</p>
  </div>
  <div className='signn'>
    <p className='sign1'>1</p>
    <p className='sign2' >And Monetize!</p>
    <p className='sign3'>Start earning from your app from Day 1 after integrating our Ad Tags.</p>
  </div>
     </div>
     <div className='start'>
      <p>What We Offer.</p>
     </div>
     <div className='sign'>
      <div className='stg'>
      <img  className='immg'src={img3} alt='img'></img>
      <p className='sign2' >Best-In-Class Optimization</p>
    <p className='sign3'>Years of experience being Google AdX Partners & AdMob Veterans</p>
      </div>
      <div className='stg1'>
      <img  className='immg'src={img1} alt='img'></img>
      <p className='sign2' >Policy Compliance
Support</p>
    <p className='sign3'>Resolve your AdMob or AdSense policy violations within minutes</p>
      </div>
      <div className='stg2'>
      <img  className='immg'src={img5} alt='img'></img>
      <p className='sign2' >Dedicated Account Managers</p>
    <p className='sign3'>Get a dedicated account manager for all your needs</p>
      </div>
     </div>
     {/* <div className='signn'>
     <div className='stg2'>
      <img  className='immg'src={img4} alt='img'></img>
      <p className='sign2' >Real-time Dashboard</p>
    <p className='sign3'>Get real-time data and insights through AppBroda’s console</p>
      </div>
      <div className='stg2'>
      <img  className='immg'src={img2} alt='img'></img>
      <p className='sign2' >WhatsApp Support</p>
    <p className='sign3'>Get a quick response to your queries with our WhatsApp Sup</p>
      </div>
     </div> */}
     <div className='sign'>
      <div className='stg'>
      <img  className='immg'src={img2} alt='img'></img>
      <p className='sign2' >Real-time Dashboard</p>
    <p className='sign3'>Get real-time data and insights through AppBroda’s console</p>
      </div>
      <div className='stg1'>
      <img  className='immg'src={img4} alt='img'></img>
      <p className='sign2' >
WhatsApp Support
</p>
    <p className='sign3'>Get a quick response to your queries with our WhatsApp Support</p>
      </div>
      
     </div>
     <div className='dimo'>
      <div>
      <img  className='bimg'src={img6} alt='img'></img>
      </div>
      <div>
    <p className='gtext'>Reasons our Publishers prefer us over anyone else.</p>
    <p className='gtext1'>Google ADX Partner</p>
    <p className='demo1'>We are a trusted Google partner which ensures authenticity, policy compliance and scale for our publishers</p>
    <p className='gtext1'>No SDK integration</p>
    <p className='demo1'>Integrating our platform takes 5 min. Just add a few lines of code to your app and you are ready to go</p>
    <p className='gtext1'>Quick Payments</p>
    <p className='demo1'>Automated invoices, quick payments - just like AdMob</p>
     <button className='demobtn'>Connect Now!</button>
      </div>
      <div>
        
      </div>
     </div>
     {/* <Slide/> */}
     <div className='dimo'>
      <div>
        <p className='gtext'>Frequently Ask Questions</p>
        <div >
          <div className='show'>
         
          <p className='hide ' style={{color:"blue"}}>How to get started with app/web monetization? </p>
          <p>+</p>
          </div>
  
        <p className='hide1'>Visit our Contact Us page and provide the following details: Name, work email, phone number, app/website link and your estimated monthly revenue. Our team will contact you for further steps.</p>
        </div>
        <div >
          <div className='show'>
         
          <p className='hide '>What are the minimum requirements? </p>
          <p>+</p>
          </div>
  
        <p className='hide1'>We accept all apps/websites which comply with Google Play and AdMob policies.</p>
        </div>
        <div >
          <div className='show'>
         
          <p className='hide '>What is the payment timeline? </p>
          <p>+</p>
          </div>
  
        <p className='hide1'>We pay every 30 days, between the 21st-30th of every month, just like AdMob.</p>
        </div>
        <div >
          <div className='show'>
         
          <p className='hide '>How do I track performance & revenue? </p>
          <p>+</p>
          </div>
  
        <p className='hide1'>We provide you with a reporting dashboard where you can see detailed stats on both performance & revenue. The data refresh is currently every 15 minutes.</p>
        </div>
        <div >
          <div className='show'>
         
          <p className='hide '>How to choose best performing ad formats? </p>
          <p>+</p>
          </div>
  
        <p className='hide1'>We have a team of monetization & Ad Operations experts here to help you. Just Contact Us and we can take it from there.</p>
        </div>
      </div>
      <div>
      <img  className='faq'src={img7} alt='img'></img>
      </div>
     </div>
     <div className='start'>
      <p>
Still not sure?</p>
     </div>
     <div className='talkbtn'>
      <button className='talkbtn1'>TALK TO OUR EXPERTS</button>
     </div>
     
    </>
  )
}
