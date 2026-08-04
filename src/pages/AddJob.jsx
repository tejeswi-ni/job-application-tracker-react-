import "./AddJob.css";
import { useState,useEffect } from "react"
import JobCard from "../components/JobCard";

function AddJob() {
    const initialFormData = {company:'',role:'',location:'',
        status: 'Applied',dateApplied: '',jobLink:'',notes:''}

    const [ formData, setFormData ]= useState(initialFormData);

    const [jobs,setJobs] = useState([]);
    const [selectedJob, setSelectedJob] = useState(null);
    const [searchJob,setSearchJob] = useState('');
    const [statusFilter,setStatusFilter] = useState('All');

    const handleChange = (e) => {
        
        setFormData((prev) => ({
                ...prev,
                [e.target.name]:e.target.value
            }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(selectedJob){
            const updateJob = {...formData,id: selectedJob.id}
            setJobs(jobs.map( (job) =>{
                if(job.id === updateJob.id){
                    return updateJob;
                }
                return job;
            }))
            setSelectedJob(null);
        }else{
            const newJob = {
                ...formData,id: Date.now()
            }
            setJobs((prev) => [...prev,newJob]);
        }
        
        setFormData(initialFormData);
    }

    function editJob(jobID){
        const job = jobs.find((job) => job.id === jobID);
        setSelectedJob(job); 
    }

    function deleteJob(jobID){
        setJobs( prevJobs => prevJobs.filter(job => job.id !== jobID));

        if(selectedJob.id === jobID){
            setSelectedJob(null);
            setFormData(initialFormData);
        }
    }

    const filteredJobs = jobs.filter(job => {

        const search = searchJob.toLowerCase();

        if(job.status === statusFilter || statusFilter === 'All'){
                return job.company.toLowerCase().includes(search)
           || job.role.toLowerCase().includes(search)
           || job.location.toLowerCase().includes(search)
        }   
    }
    );

    useEffect( () => {
        if(selectedJob){
            setFormData(selectedJob);
        }
    },
    [selectedJob]);

  return (
    <div className="job-container">
        <h1>
            { selectedJob ? "Edit job Application" : "Add Job Application"}
        </h1>
        <form onSubmit={handleSubmit}>
            <div className="form-group companyname">
                <label htmlFor ="companyname">Company Name: </label>
                <input type="text" name = "company" required
                id="companyname" value={formData.company}
                onChange={ handleChange }
                placeholder="Enter company's name..."
                ></input>
            </div>

            <div className="form-group jobrole">
                <label htmlFor="jobrole">Job role: </label>
                <input type="text" name="role" value={formData.role}
                 id="jobrole" required placeholder="Enter your job role"
                 onChange={ handleChange }
                ></input>
            </div>
            
            <div className="form-group joblocation">
                <label htmlFor="location">Job Location: </label>
                <input type="text"required name ="location" value={formData.location}
                 id="location" placeholder="Enter job's location"
                 onChange={ handleChange }></input>
            </div>
            
            <div className="form-group jobstatus">
                <label htmlFor="status" 
                >Job Status: </label>
                <select id ="status" name = "status"
                value={formData.status} onChange={ handleChange }>
                    <option value="Applied">Applied</option>
                    <option value="Screening">Screening</option>
                    <option value="Interview">Interview</option>
                    <option value="Offer">Offer Letter</option>
                    <option value="Rejected">Rejected</option>
                </select>
            </div>
            
            <div className="form-group application-date">
                <label htmlFor="applicationdate">Date Applied:</label>
                <input type="date" name="dateApplied"
                value = {formData.dateApplied}
                onChange={ handleChange }
                id="applicationdate"></input>
            </div>
            
            <div className="form-group joblink">
                <label htmlFor="joblink">Job Link: </label>
                <input type="url" value={formData.jobLink}
                onChange={ handleChange }
                name ="jobLink" id="joblink" placeholder="Enter job's link(Eg:https://...)"></input>
            </div>
            
            <div className="form-group notes">
                <label htmlFor="notes">Notes: </label>
                <textarea id="notes" value={formData.notes}
                onChange={ handleChange }
                 name = "notes" placeholder="Enter your job notes"></textarea>
            </div>
            
            <button type = "submit" className="add-job-button">
               {selectedJob ? "Update Job" : "Add Job"}
            </button>

            {selectedJob && <button type="button"
            onClick={()=>{
                setFormData(initialFormData);
                setSelectedJob(null);
            }} className="add-job-button"
            > Cancel Edit</button>}
        </form>
        
        <label htmlFor="status-filter">Filter by Status:</label>
        <select id="status-filter" value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
        >
            <option value="All">All</option>
            <option value="Applied">Applied</option>
            <option value="Screening">Screening</option>
            <option value="Interview">Interview</option>
            <option value="Offer">Offer Letter</option>
            <option value="Rejected">Rejected</option>
        </select>
        
        <label htmlFor="job-search">Search Jobs:</label>
        <input type="text" value={searchJob} id="job-search"
        onChange={(e)=>{setSearchJob(e.target.value)}}
        placeholder="🔍 Search by Company name or role or location"></input>

        {
            jobs.length === 0 ? 
            <div className="empty-state">
                <h2> 📂 No applications yet</h2>
                <p>Start tracking your first Job application</p>
            </div>
            :
            filteredJobs.length === 0 ? 
            <div className="empty-state">
                <h2> 📂 No Matching Applications found.</h2>
                <p>Try changing your search or filter</p>
            </div>
            
            : filteredJobs.map((job) => (
                <div key={job.id}>
                    <JobCard job = {job} deleteJob = {deleteJob} editJob = {editJob} />
                </div>
                
            )) 
        }

    </div>
  )
}

export default AddJob
