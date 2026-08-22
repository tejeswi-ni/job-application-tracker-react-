import "./StatusProgress.css";

function StatusProgress({ status }) {
    const stages = ["Applied", "Screening", "Interview", "Offer"];
    const currentIndex = stages.indexOf(status);

    return (
        <div className="status-progress-container">

            <div className="status-progress">
                {stages.map((stage, index) => {
                    const isActive = index <= currentIndex;

                    return (
                        <div key={stage} className="stage-container">

                            <div className={`stage ${isActive ? "active" : ""}`}>
                                <div className="circle">
                                    {isActive ? "✓" : index + 1}
                                </div>
                                <p>{stage}</p>
                            </div>

                            {index !== stages.length - 1 && (
                                <div
                                    className={`line ${
                                        index < currentIndex ? "active-line" : ""
                                    }`}
                                ></div>
                            )}

                        </div>
                    );
                })}
            </div>

            {status === "Rejected" && (
                <div className="rejected-badge">
                    ❌ Application Rejected
                </div>
            )}

        </div>
    );
}

export default StatusProgress;