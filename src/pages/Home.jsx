import Header from "../components/Header"
import Navbar from "../components/Navbar"
import RecentApplications from "../components/RecentApplications"
import Statistics from "../components/Statistics"
import AddJob from "./AddJob"
import Applications from "./Applications"

function Home() {
  return (
    <div>
      <Navbar/>
      <AddJob/>
      {/* <Header/>
      <Statistics/>
      <RecentApplications/>
      <Applications/> */}
    </div>
  )
}

export default Home
