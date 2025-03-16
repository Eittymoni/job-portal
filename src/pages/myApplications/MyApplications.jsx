import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyApplications = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/job-application?email=${user.email}`)
      .then(res => res.json())
      .then(data => setJobs(data));
  }, [user.email]);

  

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4">My Applications: {jobs.length}</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-separate border-spacing-0">
          {/* Table Head */}
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-6 py-3 text-sm font-medium text-gray-600">Job Title</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-600">Location</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-600">Company</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-600">Action</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {jobs.map(job => (
              <tr key={job.id} className="border-b">
                <td className="px-6 py-4 text-sm text-gray-800">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={job.company_logo}
                          alt={job.title}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold">{job.title}</div>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4 text-sm text-gray-600">{job.location}</td>

                <td className="px-6 py-4 text-sm text-gray-600">{job.company}</td>

                <td className="px-6 py-4 text-sm">
                  <button className="btn btn-ghost btn-xs text-red-600 hover:bg-red-100">
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplications;
