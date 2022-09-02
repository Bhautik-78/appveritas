import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Home.css';
import Image from '../Image/computer.png';
import Image1 from '../Image/iot.png';
import Image2 from '../Image/til.png';
import Image3 from '../Image/poket.png';
import Image4 from '../Image/appx.png';
import Slider from './Slider';
import Form from './Form';
import Slide from './Slide';




export default function Home() {
  return (
    <>
     {/* <Navbar/> */}
     <div className='header'>
     <div className='text3' >
        <p className='text'>Get down to making great Apps because we take care of the rest!​</p >
        
        <p className='text1' >The 1st platform that fuels your entire mobile app’s growth across App Ideation, User Acquisition, Monetization & Analytics</p>
        <button className='button'>Setup A Demo!</button>
     </div>
     <div>
        <img className='img' src={Image} alt='images'></img>
     </div>
     </div>
     <div>
        <p className='midel'>Empowering Businesses Around The World</p>
     </div>
     <div className='img4'>
     <div >
        <img className='logo' src={Image1} alt='images'></img>
     </div>
     <div>
        <img className='logo' src={Image2} alt='images'></img>
     </div>
     <div>
        <img className='logo' src={Image3} alt='images'></img>
     </div>
     <div>
        <img className='logo' src={Image4} alt='images'></img>
     </div>
     </div>
     {/* <Slide/> */}
    <Slider/>
    <Form/>

    </>
  )
}
