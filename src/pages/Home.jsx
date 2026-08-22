import StatCard from "../components/StatCard"
import "./Home.css"

function Home({jobs}) {

  const stats = {
    applied: 0,
    interview: 0,
    offer: 0,
    screening: 0,
    rejected: 0,
  };

  jobs.forEach( job => {
    if(job.status === 'Applied'){
      stats.applied += 1
    }
    else if(job.status === 'Interview'){
      stats.interview += 1
    }
    else if(job.status === 'Offer'){
      stats.offer += 1
    }
    else if(job.status === 'Screening') {
      stats.screening += 1
    }
    else if(job.status === 'Rejected'){
      stats.rejected += 1
    }
  })

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title" >Job Dashboard</h1>
      <div className="stats-container">

        <div className="wide-card">
          <StatCard title="Total Applications"  count = {jobs.length} className="total-card"/>
        </div>
        <div className="wide-card">
          <StatCard title="Offers" count={stats.offer}  className="offer-card" />
        </div>
        
        <StatCard title="Applied" count={stats.applied}  className="applied-card"/>
        <StatCard title="Interviews" count={stats.interview} className="interview-card"/>
        <StatCard title="Screenings" count={stats.screening} className="screening-card"/>
        <StatCard title="Rejected" count={stats.rejected} className="rejected-card" />

      </div>
      
    </div>
  )
}

export default Home
