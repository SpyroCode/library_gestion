import React from 'react';
import { Link } from "react-router-dom";
import NavProfileItem from './NavProfileItem';

const NavProfile=(props)=>{
    const {name} = props.data
    const data=[
        {
            Id:1,
            url:'profile',
            icon:'fas fa-user icon',
            menu:'Perfil'
        },
        {
            Id:2,
            url:'settings',
            icon:'fas fa-cog icon',
            menu:'Configuracion'
        },
        
    ]
    return(
        <div className="navbar-end">
              <div className="navbar-item has-dropdown is-hoverable">
                <div className="navbar-link">{name}</div>
                <div className="navbar-dropdown">
                        
                        {data.map((item, idx)=>{
                                    return <NavProfileItem key={idx}data={item}/>
                            })}  
                        <hr className="navbar-divider" />
                        <Link to="logoff" className="navbar-item">

                            <div>
                            <span><i className="fas fa-sign-out-alt icon"></i></span>
                                Salir
                            </div>       
                        </Link>
                </div>
              </div>
        </div>
    )

}

export default NavProfile