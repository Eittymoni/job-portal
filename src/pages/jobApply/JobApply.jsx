import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const JobApply = () => {
  const { id } = useParams();
  const {user} = useAuth()
const navigate = useNavigate()

  const submitJobApplication = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedin = form.linkedin.value;
    const github = form.github.value;
    const resume = form.resume.value;
const jobApplication ={
  job_id: id,
  applicant_email:user.email,
  linkedin,
  github,
  resume
}

fetch('http://localhost:3000/job-application',{
  method:'POST',
  headers:{
    'content-type' : 'application/json'
  },
  body:JSON.stringify(jobApplication)
})
.then(res =>res.json())
.then(data =>{
 if(data.insertedId){
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Your job has been Applied",
    showConfirmButton: false,
    timer: 1500
  });
  navigate('/myApplicatios')
 }
})

  };

  return (
    
        
        <div className="card bg-base-100 w-full shadow-2xl mx-auto">
          <div className="card-body">
          <h1 className="text-5xl font-bold text-center">Apply now!</h1>
            {/* ✅ Wrap inputs in a form and attach onSubmit */}
            <form onSubmit={submitJobApplication}>
              <fieldset className="fieldset ">
                <label className="fieldset-label">LinkedIn URL</label>
                <input
                  type="url"
                  className="input"
                  name="linkedin"
                  placeholder="LinkedIn URL"
                  required
                />

                <label className="fieldset-label">GitHub URL</label>
                <input
                  type="url"
                  name="github"
                  className="input"
                  placeholder="GitHub URL"
                  required
                />

                <label className="fieldset-label">Resume URL</label>
                <input
                  type="url"
                  name="resume"
                  className="input"
                  placeholder="Resume URL"
                  required
                />

                {/* ✅ Use type="submit" for form submission */}
                <button type="submit" className="btn bg-purple-400 rounded-lg w-1/2 mt-4 ">Apply</button>
              </fieldset>
            </form>
          </div>
        </div>
   
  );
};

export default JobApply;
