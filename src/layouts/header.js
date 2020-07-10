import React,{useContext } from 'react'
import Logo from '../components/Logo'
import { Link } from "react-router-dom";
import { UserContext } from "../helpers/auth";
import NavProfile from '../components/NavProfile';



const Header=()=>{
  const {userAuth}=useContext(UserContext);
    const name=userAuth.name
    const data=[ 
        {
          name,
         
        },
    ]
    return(
        
        <nav className="navbar is-fixed-top box-shadow-y">
          
          <div className="navbar-brand">
            <Link
              to="/"
              role="button"
              className="navbar-burger toggler"
              aria-label="menu"
              aria-expanded="false"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </Link>
            <Logo/>
            <Link to="/" className="navbar-item has-text-weight-bold has-text-black">
              Admin Library
            </Link>
            <span
              role="button"
              className="navbar-burger nav-toggler"
              data-target="navMenu"
              aria-label="menu"
              aria-expanded="false"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </span>
          </div>
          <div id="navMenu" className="navbar-menu has-background-white">
            <div className="navbar-start">
              <Link to="/" className="navbar-item">
                <i className="fas fa-home icon"></i> Inicio
              </Link>
              <Link to="forums" className="navbar-item"><i className="fas fa-comments icon"></i> Foros</Link>
              <Link to="blog" className="navbar-item"><i className="fas fa-blog icon"></i> Blog</Link>
              <Link to="support" className="navbar-item"><i className="far fa-life-ring icon"></i> Soporte</Link>
              <Link to="contact" className="navbar-item"><i className="fas fa-envelope icon"></i> Contacto</Link>
            </div>
            <div className="navbar-end">
              <Link to="notifications" className="navbar-item">
              <i className="fas fa-bell icon"></i>
              </Link>
              
              <NavProfile data={data[0]}/>
            </div>
          </div>
        </nav>
    )
}

export default Header