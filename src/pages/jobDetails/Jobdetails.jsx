import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const Jobdetails = () => {
    const {_id,title,company, deadline} = useLoaderData()

  return (
    <div className='m-10'>
      <h2 className='text-3xl'> Job details for {title}</h2>
      <p>Apply for:{company}</p>
    <Link to={`/jobApply/${_id}`}>  <button className='btn  bg-purple-500 text-white rounded-lg'> Apply Now</button></Link>
    
    </div>
  )
}

export default Jobdetails
 