import React from 'react'
import NavMenuItem from '../components/NavMenuItem';


const Asidebar=()=>{

    const data=[
        {
            Id:1,
            link:'/',
            icon:'fas fa-home',
            menu:'Home'
        },
        {
            Id:2,
            link:'/books',
            icon:'fas fa-book',
            menu:'Books'
        },
        {
            Id:3,
            link:'/customers',
            icon:'fas fa-address-book',
            menu:'Customers'
        },
        {
            Id:4,
            link:'/orders',
            icon:'fas fa-file-alt',
            menu:'Orders'
        },
      ]
        return(
            
            
              <nav className="menu">
                
                      {data.map((item, idx)=>{
                          return <NavMenuItem key={idx}data={item}/>
                      })}  
                
              </nav>
           
           
    
        )

}

export default Asidebar