import "./JobCard.css";
import React from 'react'
import StatusBadge from './StatusBadge';
import { FiEdit, FiTrash2,FiBriefcase,
  FiMapPin } from "react-icons/fi";
function JobCard({job, deleteJob, editJob}) {
  return (
    <div className='job-card'>
        <h3> {job.company} </h3>
        <p> <FiBriefcase/>
          <strong>Role:</strong> {job.role} 
        </p>
        <p> <FiMapPin/>
          <strong>Location: </strong>{job.location} 
        </p>
        <StatusBadge status = {job.status}/>

        <div className="job-actions">
          <button className='delete-button' 
            onClick={() => deleteJob(job.id)}>
              <FiTrash2/> Delete</button>

        <button  className='edit-button'
        onClick={() => editJob(job.id)} > <FiEdit/>Edit</button>
        </div>
    </div>
  )
}

export default JobCard
