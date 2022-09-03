import React from 'react';
import './Footer.css';
import logo from '../Image/logo.png';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';



// import { SocialIcon } from 'react-social-icons';
export default function Footer() {
  return (
    <>
      <div className='footer'>
        <div className='footer1'>
<div className='ft1'>
<img  src={logo} alt="logo" style={{width:"100px",height:"62px"}} />

<div className='icon'>
<h3 style={{color:'blue'}}><AiFillLinkedin  /></h3>
<h3 style={{color:'#5050e8'}}><AiFillFacebook  /></h3>
<h3 style={{color:'#ff5252'}}><AiOutlineInstagram  /></h3>
<h3 style={{color:'#0090ff'}}><AiOutlineTwitter  /></h3>
</div>


</div>
<div className='footertext'>
    <h3>Menu</h3>
    <p>Home</p>
    <p>About US</p>
    <p>Success Stories</p>
    <p>Blog</p>
    <p>Guides</p>
    <p>FaQs</p>
    <p>Privact Policy</p>
    <p>Contact Us</p>

        </div>
        <div className='footertext'>
        <h3>Solutions</h3>
    <p>Monetize With Google Adx</p>
    <p>Mobile App Monetization</p>
    <p>User Growth</p>
    <p>Ad Revenue optimization</p>
    <p>Manged ASO</p>
    
        </div>
        <div className='footertext'>
        <h3>Contacts</h3>
    <p>Publiser@Appveritas.com</p>
    <p>Appveritas Tech FZCO DSO_IFZA,Surat,Gujart-395010</p>
    
    
        </div>
        </div>
        </div>
    </>
  )
}
