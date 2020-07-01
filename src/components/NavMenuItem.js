import React from 'react';
import { NavLink } from "react-router-dom"



const NavMenuItem =(props)=>{
  const {Id,link, icon, menu} = props.data
  
  
    return(
            <ul className="menu-list">
              <li>
                <NavLink to={link} id={`menu-${Id}`} activeClassName="is-active">
                
                  <span className="icon">
                    <i className={icon}></i>
                  </span>
                  {menu}
                
                </NavLink>
              </li>
              
            </ul>  
    )

}

export default NavMenuItem