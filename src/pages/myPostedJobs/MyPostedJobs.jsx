import React, { useEffect, useState } from 'react'
import useAuth from '../../hooks/useAuth'

const MyPostedJobs = () => {
    const [jobs,setJobs]= useState([])
    const {user} = useAuth()

    useEffect(() =>{
        fetch(`http://localhost:3000/jobs?email=${user.email}`)
        .then(res => res.json())
        .then(data => setJobs(data))
    },[user.email])
  return (
    <div>MyPostedJobs:{jobs.length}</div>
  )
}

export default MyPostedJobs