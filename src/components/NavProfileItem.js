import React from 'react';
import { Link } from "react-router-dom"

const NavProfileItem =(props)=>{
    const {url, icon, menu} = props.data
    return(
                <>
                    <Link to={url} className="navbar-item">
                    
                        <div>
                        <span><i className={icon}></i></span>
                            {menu}
                        </div>
                    </Link>
                    
                </>
                   
    )
}

export default NavProfileItem