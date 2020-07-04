import React from 'react'
import { Link } from "react-router-dom"
import Header from '../layouts/header';
import Asidebar from '../layouts/asidebar'
import TableTitlesItems from '../components//TablesTitlesItems';
import TablesRecordsItemsOrders from '../components//TablesRecordsItmesOrders';
import HeaderTables from '../components/TablesHeader'

//data

const data=[
  {
      Idx:0,
      title:'#', 
  },
  {
      Idx:1,
      title:'Miembro', 
  },
  {
      Idx:2,
      title:'Libro', 
  },
  {
      Idx:3,
      title:'Fecha', 
  },
  {
      Idx:4,
      title:'Status', 
  },
  {
      Idx:5,
      title:'Acciones', 
  },
  {
      Idx:6,
      title:'Observaciones', 
  },



]

const dataMiembros=[
   {
       Idx:1,
       IdMiembro:1,
       nombre:'Efren Almanza Lamas',
       IdBook:2,
       book:'Expert Angular',
       fecha:'2020-07-02',
       status:'Aprobada',
       obs:"loremww sffhkwhwfk",
   },
   {
    Idx:2, 
    IdMiembro:1,
    nombre:'Karla Almanza Morales',
    IdBook:2,
    book:'Eloquent JavaScript',
    fecha:'2020-07-02',
    status:'Pendiente',
    obs:"loremww sffhkwhwfk",
  },
  {
    Idx:2, 
    IdMiembro:3,
    nombre:'Daniel Almanza Morales',
    IdBook:3,
    book:'PHP,MySQL, JavaScript & CSS',
    fecha:'2020-07-02',
    status:'Entregado',
    obs:"loremww sffhkwhwfk",
  },
]
//data

const Customers=()=>{
    return(
      <>
      <Header/> 
        
        <div className="columns is-variable is-0">
      <Asidebar/>
      <div className="column is-10-desktop is-offset-2-desktop is-9-tablet is-offset-3-tablet is-12-mobile">
        <div className="p-1">
          
          <div className="columns is-variable is-desktop">
            <div className="column">
              <h1 className="title">
                Customer
              </h1>
            </div>
          </div>
          <div className="columns  is-variable is-desktop">
            <div className="column">
            <div className="column is-full">
              <div className ="card">
              <HeaderTables/>
                <div className="card-content">
                    {/* componente dinamicos tablas */}
                  <div className="media">
                  <table className="table">
                  <thead>
                    <tr>
                    
                        {data.map((item, idx)=>{
                                return <TableTitlesItems key={idx}data={item}/>
                        })}   
                    
                    
                    </tr>
                </thead>   

                        {dataMiembros.map((item, idx)=>{
                                return <TablesRecordsItemsOrders key={idx}data={item}/>
                        })}    
                                             
                      
                                      
                  </table>
               </div>
                    {/* componente dinamicos tablas */}
                   <Link href="#" className="button is-link is-outlined">Ver todos</Link>
                </div>
                </div>
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
      </div>   
      </>
    )
}

export default Customers