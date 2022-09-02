import React from 'react';
import './../Soultions.css';

import '../Mobile/Mobile.css';
import Navbar from '../../Navbar/Navbar';
import img from '../../Image/Growth.png';
import img1 from '../../Image/idea.png';
import img2 from '../../Image/analytic.png';
import img3 from '../../Image/list.png';
import img4 from '../../Image/settings.png';
import img5 from '../../Image/Generating.png';
import Slide from '../../Home/Slide';

export default function Mobile() {
  return (
    <>
     <Navbar/>
     <div className='dimo'>
        <div>
            <p className='demo'>Fast-Track your App Growth with our 360° App Monetization Platform.</p>
            <p className='demo1'>Tailor made ad strategies from AdMob experts for your apps.</p>
            <button className='demobtn'>Setup A Demo  </button>
        </div>
        <div>
            <img  className=' demoimg'src={img} alt='img'></img>
        </div>

     </div>
     <div className='dche'>
        <div>
            <p className='yche'>Your Challenges</p>
            <p className='yche1'> ❌Managing everything yourself</p>
            <p className='yche1'>❌ Unable to scale AdMob revenue</p>
            <p className='yche1'>❌Low eCPM and Fill Rates</p>
            <p className='yche1'>❌ Unable to find right ad partner for mediationr</p>
            <p className='yche1'>❌ Ad placements affects user retention</p>
            <p className='yche1'> ❌Policy Violations causing Roadblocks</p>
        </div>
        <div className='color'>
        <p className='yche'>Our Solutions</p>
        <p className='yche1'>✅Ad Ops support to takes care of your day-to-day operations</p>
        <p className='yche1'>✅ AdMob experts makes personalised optimization strategy</p>
        <p className='yche1'>✅  Set up Mediation and Open Bidding to increase Fill Rate and eCPM</p>
        <p className='yche1'>✅  Tailored-Tactics to increase ARPDAU</p>
        <p className='yche1'>✅ Explore the best app monetization platforms</p>
        <p className='yche1'>✅A/B test different ad placements to increase user experience and retention</p>
        <p className='yche1'>✅ Solve policy violations instantly with AdMob experts  </p>
        </div>
     </div>
     <div className='start'>
      <p>How to Get Started</p>
     </div>
     <div className='sign'>

<div className='signn' >
  <p className='sign1'>1</p>
  <p className='sign2' style={{color:"blue"}}>Setup A Free Consultation</p>
  <p className='sign3'>Connect & schedule a free consultation with our experts to gather all the required data</p>
</div>
<div className='signn' >
  <p className='sign1'>2</p>
  <p className='sign2' >Audit</p>
  <p className='sign3'>Our experts audit your app and identify gaps to create a personalised optimization plan and explore new revenue opportunities.</p>
</div>
<div className='signn'>
  <p className='sign1'>3</p>
  <p className='sign2' >Earn More</p>
  <p className='sign3'>Make the required changes and start earning more revenue everyday.</p>
</div>
   </div>
   <div className='start'>
      <p>Our Innovative Features</p>
     </div>
     <div className='ourr'>
        <div className='our'>
        <div>
        <img  className='oimg' src={img2} alt='img'></img> 
        </div>
        <div>
            <p className='otext1'>Dedicated Account Manager</p>
            <p className='otext'>Get a dedicated account manager and Ad ops support for all your needs</p>
        </div>
        </div>
        <div className='our'>
        <div>
        <img className='oimg' src={img3} alt='img'></img> 
        </div>
        <div>
            <p className='otext1'>UI/UX Recommendation</p>
            <p className='otext'>Grow your app’s revenue keeping user experience & retention in mind    </p>
        </div>
        </div>
        <div className='our'>
        <div>
        <img className='oimg' src={img4} alt='img'></img> 
        </div>
        <div>
            <p className='otext1'>A/B Testing</p>
            <p className='otext'>We conduct A/B tests to get optimum ad placements for higher revenue</p>
        </div>
        </div>
        <div className='our'>
        <div>
        <img className='oimg' src={img1} alt='img'></img> 
        </div>
        <div>
            <p className='otext1'>Grow ARPDAU</p>
            <p className='otext'>We make strategies to increase the average revenue per daily active user by increasing overall eCPM and retention</p>
        </div>
        </div>
     </div>

     <div className='dimo'>
      <div>
      <img  className='bimg'src={img5} alt='img'></img>
      </div>
      <div>
    <p className='gtext'>Accelerate Your App Growth with Personalized App Monetization Strategy.</p>
    <p className='gtext1'>Robust App Monetization Strategy</p>
    <p className='demo1'>We help you build strong app monetization strategies based on app metrics and defined goals.</p>
    <p className='gtext1'>Maximize Your ROI</p>
    <p className='demo1'>With AppBroda, you can leverage Google AdX and multiple app monetization platforms to maximize your ROI.</p>
    <p className='gtext1'>Beat Your Competition</p>
    <p className='demo1'>Publishers can follow the best app monetization trends to stay one step ahead of their competition.</p>
    <button className='demobtn'>Connect Now!</button>
      </div>
      <div>
        
      </div>
     </div>
     {/* <Slide/> */}
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
