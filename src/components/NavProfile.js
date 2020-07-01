import React from 'react';
import NavProfileItem from './NavProfileItem';

const NavProfile=(props)=>{
    const {name} = props.data
    const data=[
        {
            Id:1,
            url:'profile',
            icon:'fas fa-user',
            menu:'Mi Perfil'
        },
        {
            Id:2,
            url:'bug',
            icon:'fas fa-bug',
            menu:'Reportar un Error'
        },
        {
            Id:3,
            url:'logoff',
            icon:'fas fa-sign-out-alt',
            menu:'Salir'
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
                                
                </div>
              </div>
        </div>
    )

}

export default NavProfile