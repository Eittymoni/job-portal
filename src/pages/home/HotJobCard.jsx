import { p } from 'motion/react-client';
import React from 'react'
import { FaDollarSign, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
const HotJobCard = ({job}) => {
  const{_id,title,company,company_logo,requirements,description,salaryRange,location}= job;
  return (
    <div className="card bg-base-100  shadow-sm">
    <div className=" flex gap-2 m-2">
     
      <figure>
      <img
        src={company_logo}
        alt="Shoes" />
    </figure>
    <div className="">
      <h4 className='text-2xl'>{company}</h4>
      <p className='flex gap-1 items-center'><FaMapMarkerAlt />{location}</p>

      </div>
    </div>
    <div className="card-body">
      <h2 className="card-title">{title}
      <div className="badge badge-secondary">NEW</div>
      </h2>
      <p>{description}</p>
      <div className=" flex gap-2 flex-wrap">
        {
        requirements.map(skill => <p className='border rounded-md text-center px-2 hover:text-purple-600 hover:bg-gray-300'>{skill}</p>)
        }
        </div>
      <div className="card-actions justify-end items-center mt-4">

        <p className='flex items-center'>Salary:<FaDollarSign />{salaryRange.min} - {salaryRange.max} { salaryRange.currency}</p>
   <Link to={`/jobs/${_id}`}>     <button className="btn bg-purple-500 text-white rounded-lg">Apply</button></Link>
      </div>
    </div>
  </div>
  )
}

export default HotJobCard
