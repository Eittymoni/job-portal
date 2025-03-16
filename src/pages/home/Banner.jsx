import React from 'react';
import { motion } from "motion/react"
import { easeOut } from 'motion';
import team from "../../assets/team.jpg"
import office from "../../assets/office.jpg"

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-96">
    <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
        <motion.img
        animate={{y:[50,100,50]}}
        transition={{duration:10, repeat:Infinity}}
        src={team }
        className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] shadow-2xl border-l-4 border-b-4  border-purple-400" />
        
        <motion.img
        animate={{x:[100,150,100]}}
        transition={{duration:10,delay:5, repeat:Infinity}}
        src={office }
        className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] shadow-2xl border-l-4 border-b-4  border-purple-400" />
        </div>
      <div className='flex-1'>
   
        <motion.h1 
        animate={{x:50,}}
        transition={{duration:2, delay:1, ease:easeOut,repeat:Infinity }}
        className="text-5xl font-bold">Latest<motion.span
        animate={{color:['#ecff33','#33ffe3','#ff6133']}}
        transition={{duration : 1.5, repeat: Infinity}}
        >Job </motion.span>For You!</motion.h1>
    
        <p className="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
          quasi. In deleniti eaque aut repudiandae et a id nisi.
        </p>
        <button className="btn  bg-purple-500 text-white rounded-lg">Get Started</button>
      </div>
    </div>
  </div>
  );
}

export default Banner;
