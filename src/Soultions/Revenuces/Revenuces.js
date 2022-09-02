import React from 'react';
import Navbar from '../../Navbar/Navbar';
import img from '../../Image/loading.png';
import img2 from '../../Image/analyticc.png';
import img3 from '../../Image/admob.png';
import img4 from '../../Image/touchicon.png';
import img5 from '../../Image/integration.png';
import img6 from '../../Image/planning.png';
import img7 from '../../Image/audit.png';
import img8 from '../../Image/nosdk.png';
import Slide from '../../Home/Slide';
import img9 from '../../Image/quick-results.png';
import img11 from '../../Image/dedicated.png';
import img10 from '../../Image/what.jpg';
import img12 from '../../Image/setting.png';
import './../Soultions.css';

import '../Revenuces/Revenuces.css';
export default function Revenuces() {
  return (
    <>
      <Navbar/>
     <div className='dimo'>
        <div>
            <p className='demo'>Increasing your App's Ad Revenue couldn't be easier.</p>
            <p className='demo1'>Firebase & Admob is all you need. Our product works on your existing setup to give you instant results.</p>
            <button className='demobtn' style={{width:"250px"}}>Optimize my Revenue  </button>
        </div>
        <div>
            <img  className=' demoimg'src={img} alt='img'></img>
        </div>

     </div>
     <div className='dche'>
        <div>
            <p className='yche'>Your Challenges</p>
            <p className='yche1'> ❌Low eCPM and fill rates</p>
            <p className='yche1'>❌  Low performance in the desired country</p>
            <p className='yche1'>❌Managing everything yourself</p>
            <p className='yche1'>❌No support from the existing Ad Partnerr</p>
            <p className='yche1'>❌Hard to keep up with industry trends</p>
      
        </div>
        <div className='color'>
        <p className='yche'>Our Solutions</p>
        <p className='yche1'>✅Optimization experts increase your Ad Revenue</p>
        <p className='yche1'>✅ Geo-wise revenue optimization strategy</p>
        <p className='yche1'>✅Complete Ad Ops support to take care of your day-to-day operations</p>
        <p className='yche1'>✅ Dedicated Account Manager for quick support</p>
         
        <p className='yche1'>✅ Optimization experts increase your Ad Revenue with best practices and existing trends</p>

        </div>
     </div>
     <div className='ssimg'>
        <div>
            <p className='sstext1'>SIMPLER DATA-DRIVEN APPROACH FOR</p>
            <p className='sstext2'>Ad Revenue Growth & Optimised eCPM</p>
            <p className='sstext3'> No need to install heavy SDKs to grow your advertising revenue anymore, all you need is a Firebase integration provided by our experts and get started within minutes.</p>
        </div>
        <div>
            
            <p className='sstext2'>What do we do?</p>
            <p className='sstext3'> We link AdMob/Google AdX, Firebase and Google Analytics, through which our analysts study various app metrics and provide insights on optimizing ad revenues. </p>
        <p className='sstext3'>Our experts run experiments and create revenue optimization strategies to make smarter decisions for you to see overall revenue growth.</p>
        </div>
     </div>
     <div className='start'>
      <p>We use three tools to make this happen</p>
     </div>
     
     <div  className='tche'>
        <div className='tcolor'>
        <img  className='timg' src={img4} alt='img'></img> 
        <p className='ttext'>Firebase Remote Config to configure ads and run experiments</p>
        
        </div>
        <div className='tcolor1'>
        <img  className='timg' src={img3} alt='img'></img> 
        <p className='ttext'>Google AdX or Google AdMob to serve ads</p>
        
        </div>
        <div className='tcolor2'>
        <img  className='timg' src={img2} alt='img'></img> 
        <p className='ttext'>Google Analytics to evaluate and analyse the data</p>
       
        </div>
       
     </div>
     <div className='start'>
      <p>What We Do.</p>
     </div>
     <div className='uback'>
      <div className='ucolor'>
      <img  className='uimg' src={img7} alt='img'></img> 
      <p className='utext'>UI/UX audit by experts</p>
      </div>
      <div className='ucolor1'>
      <img  className='uimg' src={img6} alt='img'></img> 
      <p className='utext'>Create personalised optimization plan to meet your goal</p>
      </div>
      <div className='ucolor2'>
      <img  className='uimg' src={img5} alt='img'></img> 
      <p className='utext'>Google Firebase integration to get granular control over your optimization</p>
      </div>
     </div>
     <div className='start'>
      <p>What We offer.</p>
     </div>
     <div className='sign'>
      <div className='stg'>
      <img  className='immg'src={img8} alt='img'></img>
      <p className='sign2' >
No SDK required</p>
    <p className='sign3'>Plug and play solution as no SDK is required</p>
      </div>
      <div className='stg1'>
      <img  className='immg'src={img12} alt='img'></img>
      <p className='sign2' >Granular Optimization</p>
    <p className='sign3'>Optimization strategies sustained over period long of time</p>
      </div>
      <div className='stg2'>
      <img  className='immg'src={img9} alt='img'></img>
      <p className='sign2' >Quick Results</p>
    <p className='sign3'>Our optimization results are evident from day 1</p>
      </div>
     </div>
     <div className='sign'>
      <div className='stg'>
      <img  className='immg'src={img11} alt='img'></img>
      <p className='sign2' >Dedicated Account Managers</p>
    <p className='sign3'>Get a dedicated account manager for all your needs</p>
      </div>
      <div className='stg1'>
      <img  className='immg'src={img10} alt='img'></img>
      <p className='sign2' >
WhatsApp Support</p>
    <p className='sign3'>Get quick response to your queries with our WhatsApp Support</p>
      </div>
      
     </div>
     {/* <Slide/> */}
     <div className='start'>
      <p>What are you waiting for? Start optimizing your revenue TODAY!</p>
     </div>
     <div className='talkbtn'>
      <button className='talkbtn1'>OPTIMIZE MY REVENUE</button> 
     </div>
    </>
  )
}
