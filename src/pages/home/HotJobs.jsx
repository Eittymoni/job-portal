import React, { useEffect, useState } from 'react'
import HotJobCard from './HotJobCard'

const HotJobs = () => {
    const [jjobs,setJobs]= useState([])
    useEffect(() =>{
        fetch('http://localhost:3000/jobs')
        .then(res =>res.json())
        .then(data => setJobs(data))
    },[])
  return (
    <div>
      <div className="">
        {
            jjobs.map(job=><HotJobCard  job={job}></HotJobCard>)
        }
      </div>
    </div>
  )
}

export default HotJobs
