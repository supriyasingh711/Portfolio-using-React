import React from 'react'
import "./Navbar.scss"
import {motion} from "framer-motion";
import { Sidebar } from '../sidebar/Sidebar';

export const Navbar = () => {
  return (
    <div className='navbar'>
      <Sidebar/>
        <div className='wrapper'>
            <motion.span 
            initial={{opacity:0,scale:0.5}}
            animate={{opacity:1,scale:1}}
            transition={{duration:0.2}}
            
            >Supriya Singh</motion.span>
            <div className='social'>
                <a href='#'><img src='./images/instagram.png' alt=''/></a>
                <a href='#'><img src='./images/instagram.png' alt=''/></a>
                <a href='#'><img src='./images/instagram.png' alt=''/></a>
                

            </div>
        </div>

    </div>
  )
}

