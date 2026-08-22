import "./App.css";
import Home from "./pages/Home";
import AddJob from "./pages/AddJob";
import Applications from "./pages/Applications";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import JobDetails from "./pages/JobDetails";

function App() {
    const [jobs, setJobs] = useState( () => {
        const savedJobs = localStorage.getItem("jobs");
        return savedJobs ? JSON.parse(savedJobs) : [];
    });

    const [selectedJob, setSelectedJob] = useState(null);

    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === "dark"
    );

    useEffect( () => {
        document.body.className = darkMode ? "dark" : "light";
        localStorage.setItem("theme",darkMode ? "dark": "light");
    },[darkMode]);


    const navigate = useNavigate();

    useEffect( () => {
        localStorage.setItem("jobs",JSON.stringify(jobs));
    }, [jobs]);

    function editJob(jobId) {
        const job = jobs.find((job) => job.id === jobId);
        setSelectedJob(job);
        navigate("/add-job");
    }

    function deleteJob(jobId) {
        setJobs(prevJobs =>
            prevJobs.filter(job => job.id !== jobId)
        );

        if (selectedJob?.id === jobId) {
            setSelectedJob(null);
        }
    }

    return (
        <>
            <Navbar
                darkMode={darkMode} setDarkMode={setDarkMode} 
            />
            

            <Routes>

                <Route
                    path="/"
                    element={<Home jobs={jobs} />}
                />

                <Route
                    path="/home"
                    element={<Home jobs={jobs} />}
                />

                <Route
                    path="/applications"
                    element={
                        <Applications
                            jobs={jobs}
                            editJob={editJob}
                            deleteJob={deleteJob}
                        />
                    }
                />

                <Route
                    path="/add-job"
                    element={
                        <AddJob
                            jobs={jobs}
                            setJobs={setJobs}
                            selectedJob={selectedJob}
                            setSelectedJob={setSelectedJob}
                        />
                    }
                />

                <Route path="/applications/:id" 
                    element={<JobDetails jobs = {jobs}
                        editJob = {editJob}
                    />}             
                />

            </Routes>
        </>
    );
}

export default App;