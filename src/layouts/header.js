import React from 'react'
import Logo from '../components/Logo'
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
        <nav className="navbar has-shadow">
          <Logo/>
          <div className="navbar-menu">
            <div className="navbar-start">
              <div className="navbar-item">
                <small>your awesome website</small>
              </div>
            </div>
            <NavProfile data={data[0]}/>
          </div>
        </nav>
    )
}

export default Header