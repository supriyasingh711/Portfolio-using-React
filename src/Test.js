import React, { useState } from 'react'
import {motion} from "framer-motion";
export const Test = () => {

  const variants={
    visible:(i)=>({opacity:1,
    x:100,
    transition:{delay:i*0.3,staggerChildren:0.2}
    
    }),
    hidden:{opacity:0}
  }
  const [open,setOpen]=useState(false)

const items=[
  "item1","item2","item3","item4"
]

  return (
    <div>Testing
        <div className='course'>
              <motion.ul initial="hidden" animate="visible" variants={variants}>
                {items.map((item,i)=>
                (
                  <motion.li variants={variants} key={item} custom={i}>{item}</motion.li>
                ))
                }
              </motion.ul>
           
        </div>
    </div>
  )
}
