import React from 'react';
import { NavLink } from "react-router-dom"

const Logo=()=>{
    return(
        <div className="navbar-brand">
            <NavLink to="/" className="navbar-item">
              <img
                src="http://mygroupbd.com/images/mycl_new_logo.jpg"
                alt="brand"
              />
            </NavLink>
          </div>
    )

}

export default Logo