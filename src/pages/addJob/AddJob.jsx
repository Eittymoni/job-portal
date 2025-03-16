import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'; // Import toast
import 'react-toastify/dist/ReactToastify.css'; // Import styles for toast notifications
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';

const AddJob = () => {
    const {user} =useAuth()
    console.log(user.email)
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    jobType: '',
    category: '',
    applicationDeadline: '',
    salaryRange: {
      min: '',
      max: '',
      currency: 'bdt',
    },
    description: '',
    company: '',
    requirements: '',
    responsibilities: '',
    status: 'active', 
    hr_email: user ? user.email : '',
    hr_name: user ? user.displayName:'',
    company_logo: '',
  });

  // Handle change in form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('salaryRange')) {
      setFormData({
        ...formData,
        salaryRange: {
          ...formData.salaryRange,
          [name.split('.')[1]]: value,
        },
      });
    } else if (name === 'requirements' || name === 'responsibilities') {
      setFormData({
        ...formData,
        [name]: value.split(',').map(item => item.trim()), // Convert comma-separated values to an array
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:3000/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Convert formData into JSON
      });
  
      if (!response.ok) {
        throw new Error('Failed to add job');
      }
  
      const responseData = await response.json(); // Assuming the backend sends a response
      console.log('Job added successfully:', responseData);
  
      // Display success toast
      Swal.fire({
        title: 'Success!',
        text: 'Job added successfully.',
        icon: 'success',
        confirmButtonText: 'OK',
      });
      navigate ('/myPostedJobs');

     // Optionally, reset the form after submission
     setFormData({
        title: '',
        location: '',
        jobType: '',
        category: '',
        applicationDeadline: '',
        salaryRange: {
          min: '',
          max: '',
          currency: 'bdt',
        },
        description: '',
        company: '',
        requirements: '',
        responsibilities: '',
        status: 'active',
        hr_email: '',
        hr_name: '',
        company_logo: '',
         hr_email: user ? user.email : '', 
      });
  
    } catch (error) {
      console.error('Error:', error);
      toast.error("Error adding job. Please try again later.");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Job Add Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Job Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border rounded-md"
            placeholder="Software Engineer"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border rounded-md"
            placeholder="Halishohor, Chittagong"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Job Type</label>
          <select
            name="jobType"
            value={formData.jobType}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border rounded-md"
            required
          >
            <option value="">Select Job Type</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Remote">Remote</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Full-Time">Full-Time</option>
            <option value="Contractual">Contractual</option>
            <option value="Intern">Intern</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border rounded-md"
            required
          >
            <option value="">Select Category</option>
            <option value="Engineering">Engineering</option>
            <option value="Marketing">Marketing</option>
            <option value="Finance">Finance</option>
            <option value="Design">Design</option>
            <option value="Data Science">Data Science</option>
            <option value="Management">Management</option>
            <option value="Teaching">Teaching</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Application Deadline</label>
          <input
            type="date"
            name="applicationDeadline"
            value={formData.applicationDeadline}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Salary Range (Min)</label>
          <input
            type="number"
            name="salaryRange.min"
            value={formData.salaryRange.min}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border rounded-md"
            placeholder="40000"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Salary Range (Max)</label>
          <input
            type="number"
            name="salaryRange.max"
            value={formData.salaryRange.max}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border rounded-md"
            placeholder="60000"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border rounded-md"
            placeholder="Job description"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Company</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border rounded-md"
            placeholder="Favorite IT"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Requirements (comma-separated)</label>
          <input
            type="text"
            name="requirements"
            value={formData.requirements}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border rounded-md"
            placeholder="JavaScript, React, Node.js, MongoDB"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Responsibilities (comma-separated)</label>
          <input
            type="text"
            name="responsibilities"
            value={formData.responsibilities}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border rounded-md"
            placeholder="Develop and maintain software, Collaborate with the team, Participate in code reviews"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">HR Email</label>
          <input
       
            type="email"
            name="hr_email"
            value={formData.hr_email}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border rounded-md"
            readOnly
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">HR Name</label>
          <input
            type="text"
            name="hr_name"
            value={formData.hr_name}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border rounded-md"
            placeholder="Farhan Rahman"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Company Logo URL</label>
          <input
            type="url"
            name="company_logo"
            value={formData.company_logo}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border rounded-md"
            placeholder="Company Logo URL"
            required
          />
        </div>

        <div className="mb-4">
          <button type="submit" className="btn bg-purple-400 w-full px-4 py-2 rounded-md text-white">
            Add job
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
