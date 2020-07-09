import React from 'react'
//import NavMenuItem from '../components/NavMenuItem';
import { NavLink } from 'react-router-dom';


const Asidebar=()=>{

    // const data=[
    //     {
    //         Id:1,
    //         link:'/',
    //         icon:'fas fa-home',
    //         menu:'Home'
    //     },
    //     {
    //         Id:2,
    //         link:'/books',
    //         icon:'fas fa-book',
    //         menu:'Books'
    //     },
    //     {
    //         Id:3,
    //         link:'/customers',
    //         icon:'fas fa-address-book',
    //         menu:'Customers'
    //     },
    //     {
    //         Id:4,
    //         link:'/orders',
    //         icon:'fas fa-file-alt',
    //         menu:'Orders'
    //     },
    //   ]
        return(
            
            
            //   <nav className="menu">
                
            //           {data.map((item, idx)=>{
            //               return <NavMenuItem key={idx}data={item}/>
            //           })}  
                
            //   </nav>
            <div>
        <div className="menu-container px-1 has-background-white">
          <div className="menu-wrapper py-1">
            <aside className="menu">
              <p className="menu-label has-text-lighter">General</p>
              <ul className="menu-list">
                <li>
                  <NavLink to="/home" className="has-text-black" activeClassName="is-active">
                    <i className="fas fa-tachometer-alt icon"></i>
                    Dashboard</NavLink>
                </li>
              </ul>
              <p className="menu-label has-text-lighter">Administracion</p>
              <ul className="menu-list">
                <li>
                  <NavLink to="settings" className="has-text-black" activeClassName="is-active">
                    <i className="fas fa-cogs icon"></i>
                    Configuraciones</NavLink>
                </li>
                <div className="navbar-item has-dropdown is-hoverable"> 
                <li>
                <div className="navbar-link">
                    <i className="fas fa-users-cog icon"></i>
                    Panel de Administracion</div>
                  <div className="navbar-dropdown">  
                  <ul>
                    <li>
                      <NavLink to="customers" className="has-text-black" activeClassName="is-active">
                        <i className="fas fa-users icon"></i>
                        Miembros</NavLink>
                    </li>
                    <li>
                      <NavLink to="books" className="has-text-black" activeClassName="is-active">
                        <i className="fas fa-book icon"></i>
                        Libros</NavLink>
                    </li>
                    <li>
                      <NavLink to="orders" className="has-text-black" activeClassName="is-active">
                      <i className="fas fa-clipboard-list icon"></i>
                        Ordenes</NavLink>
                    </li>
                  </ul>
                  </div>
                </li>
                </div>
              </ul>
              <p className="menu-label has-text-lighter">Panel de Usuario</p>
              <ul className="menu-list">
                <li>
                  <NavLink to="myBooks" className="has-text-black" activeClassName="has-text-white is-active">
                    <i className="fas fa-book icon"></i>
                    Libros</NavLink>
                </li>
                <li>
                  <NavLink to="myorders" className="has-text-black" activeClassName="is-active">
                    <i className="fas fa-info-circle icon"></i>
                    Mis Ordenes</NavLink>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </div>
           
           
    
        )

}

export default Asidebar