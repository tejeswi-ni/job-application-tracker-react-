import appList from "../data/appList.json";

function Applications() {
  return (
    <ol>
      {
        appList.map( (app) =>(
            <li key = {app.id}>
                {app.companyName} and status is {app.status} 
                <a href = {app.jobLink}>Link</a>
            </li>
        ))
      }
    </ol>
  )
}

export default Applications
