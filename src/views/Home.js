import React from 'react'
import Asidebar from '../layouts/asidebar'
import DashBoard from '../components/Dashboard'
import Avisos from '../components/Avisos'

const Home=()=>{
    return(
      <>
      <Asidebar/>
      <div className="column is-10-desktop is-offset-2-desktop is-9-tablet is-offset-3-tablet is-12-mobile">
        <div className="p-1">
          
          <DashBoard/>
          <Avisos/>
        </div>
      </div> 
      </> 
    )
}

export default Home