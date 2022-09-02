import React,{useState} from 'react';


import { Resitem } from './Navtm';
import {Link} from 'react-router-dom';
import '../App.css';




export default function Dropdown() {
    const[Dropdown,setDropdown]=useState(false);
  return (
    <>
    <ul className={Dropdown ? 'srvices-submenu clicked': 'srvices-submenu'}
    onClick={() => setDropdown(!Dropdown)}>
      
          {Resitem.map((item, index ) => {
                return(
                    
                    <li key={index} className={item.cName}>
                        <Link  style={{color:'black'}}  to={item.path}>
                        {/* style={{textDecoration: "none"}} */}
                            <span>{item.title}</span>
                        </Link>
                    </li>
                );
            })}

    </ul>
      
    </>
  )
}