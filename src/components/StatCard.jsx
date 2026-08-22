import "./StatCard.css";

function StatCard({title, count, className= ""}) {
  return (
    <div className= {`stat-card ${className}`}>
      <h3>{title} </h3>
      <p className="stat-count">{count} </p>
    </div>
  )
}

export default StatCard
