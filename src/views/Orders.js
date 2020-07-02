import React from 'react'
import { Link } from "react-router-dom"
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
            <div class="column is-full">
              <div class="card">
              <HeaderTables/>
                <div class="card-content">
                    {/* componente dinamicos tablas */}
                  <div class="media">
                  <table class="table">
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
                   <Link href="#" class="button is-link is-outlined">Ver todos</Link>
                </div>
                </div>
              </div>
              
            </div>
          </div>
          <div class="modal">
            <div class="modal-background"></div>
              <div class="modal-content">
            
              </div>
            <button class="modal-close is-large" aria-label="close"></button>
          </div> 
        </div> 
    )
}

export default Customers