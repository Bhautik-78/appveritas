import React from 'react'
import '../Adx/Adx.css';
import Navbar from '../../../Navbar/Navbar';
import img1 from '../../images/img1.png';
import img2 from '../../images/img2.png';
import img3 from '../../images/img3.png';
import img4 from '../../images/img4.png';
import img5 from '../../images/img5.png';
import img6 from '../../images/img6.png';
import img7 from '../../images/img7.png';

import img8 from '../../images/img8.png';
import img9 from '../../images/img9.png';
import img10 from '../../images/img10.png';
import img11 from '../../images/img11.png';
export default function Adx() {
  return (
    <>
    <Navbar/>
    <div>
    <div className='adxcolor'>
      <p className='adxtext'>App Growth</p>
    
    <div className='adxtext1'>
      <div>
        <p>Home</p>
      </div>
      <div>
        <p>Archive "App Growth"</p>
      </div>
    </div>
    </div>
    </div>
    <div className='himges'>
    <div className='hhover'>
        <img className='himg' src={img1} alt='img'></img> 
        <div className='hpadding'>
        <p className='htext'>A Guide on Google Ad Exchange Publisher Policies & Restrictions</p>
        <p className='htext1'>Unable to adhere with the Google AdX policies and restrictions? Read this article to learn more or connect with us!</p>
        
        </div>
        </div>
        <div className='hhover'>
        <img className='himg' src={img2} alt='img'></img> 
        <div className='hpadding'>
        <p className='htext'>A Guide on Google Ad Exchange Publisher Policies & Restrictions</p>
        <p className='htext1'>Unable to adhere with the Google AdX policies and restrictions? Read this article to learn more or connect with us!</p>
        
        </div>
        </div>
        
        </div>
    </>
  )
}
