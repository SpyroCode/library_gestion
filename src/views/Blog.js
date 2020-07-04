import React from 'react'
import Header from '../layouts/header';
import Asidebar from '../layouts/asidebar'


const Blog=()=>{

    
    return    (
      <>
      <Header/> 
      
      <div className="columns is-variable is-0">
    <Asidebar/>
    <div className="column is-10-desktop is-offset-2-desktop is-9-tablet is-offset-3-tablet is-12-mobile">
      <div className="p-1">
        
        
      </div>
    </div> 
    </div>
    </>  
    )

}

export default Blog