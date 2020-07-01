import React from 'react'
import Logo from '../components/Logo'
import { Link } from "react-router-dom";
import NavProfile from '../components/NavProfile';



const Header=()=>{
    const data=[ 
        {
          name:'Efren Almanza Lamas',
          user:'efren',
          email:'efren@gmail.com',
          role:'admin'  
        },
    ]
    return(
        
        <nav className="navbar is-fixed-top box-shadow-y">
          
          <div className="navbar-brand">
            <a
              role="button"
              className="navbar-burger toggler"
              aria-label="menu"
              aria-expanded="false"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
            <Logo/>
            <Link to="/" className="navbar-item has-text-weight-bold has-text-black">
              Admin Library
            </Link>
            <a
              role="button"
              className="navbar-burger nav-toggler"
              aria-label="menu"
              aria-expanded="false"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div className="navbar-menu has-background-white">
            <div className="navbar-start">
              <Link to="/" className="navbar-item">
                <i className="fas fa-home icon"></i> Inicio
              </Link>
              <Link to="page1" className="navbar-item">
                page1
              </Link>
              <Link to="page2" className="navbar-item">
                page2
              </Link>
              <Link to="page3" className="navbar-item">page3</Link>
            </div>
            <div className="navbar-end">
              <Link to="notifications" className="navbar-item">
              <i class="fas fa-bell icon"></i>
              </Link>
              {/* <div class="navbar-item has-dropdown is-hoverable">
                <a href="#" class="navbar-link">
                  Admin
                </a>
                <div class="navbar-dropdown is-right">
                  <a href="#" class="navbar-item">
                    Profile
                  </a>
                  <a href="#" class="navbar-item">Settings</a>
                  <hr class="navbar-divider" />
                  <a href="#" class="navbar-item">Log Out</a>
                </div>
              </div> */}
              <NavProfile data={data[0]}/>
            </div>
          </div>
        </nav>
    )
}

export default Header