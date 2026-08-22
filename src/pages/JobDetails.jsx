import { useNavigate, useParams } from "react-router-dom";
import "./JobDetails.css";

function JobDetails({ jobs, editJob }) {
    const { id } = useParams();
    const navigate = useNavigate();

    const job = jobs.find(
        (job) => job.id === Number(id)
    );

    return (
        <div className="job-details-container">

            <h1 className="job-details-title">
                Job Details
            </h1>

            {job ? (
                <div className="job-details-card">

                    <h2>{job.company}</h2>

                    <div className="job-detail">
                        <strong>Role</strong>
                        <span>{job.role}</span>
                    </div>

                    <div className="job-detail">
                        <strong>Location</strong>
                        <span>{job.location}</span>
                    </div>

                    <div className="job-detail">
                        <strong>Status</strong>
                        <span>{job.status}</span>
                    </div>

                    <div className="job-detail">
                        <strong>Date Applied</strong>
                        <span>{job.dateApplied}</span>
                    </div>

                    <div className="job-notes">
                        <strong>Notes</strong>
                        <p>
                            {job.notes || "No notes added."}
                        </p>
                    </div>

                    <div className="job-detail">
                        <strong>Job Link</strong>
                        {job.jobLink ? (
                            <a
                                className="job-link"
                                href={job.jobLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Job ↗
                            </a>
                        ): (
                            <span className="no-link">
                                No job link provided.
                            </span>
                        )}
                        
                    </div>

                    <div className="job-details-actions">
                        <button
                            className="details-edit-button"
                            onClick={() => editJob(job.id)}
                        >
                            Edit Application
                        </button>
                    </div>

                </div>
            ) : (
                <div className="job-details-card">
                    <h2>🔍 Application Not Found</h2>
                    <p>
                        This application doesn't exist or may have been deleted.
                    </p>
                    <button className="details-edit-button"
                     onClick={() => navigate("/applications")}>
                        Back to Applications
                    </button>
                </div>
            )}

        </div>
    );
}

export default JobDetails;