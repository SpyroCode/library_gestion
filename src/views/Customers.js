import React from 'react'
import { Link } from "react-router-dom"
import TableTitlesItems from '../components//TablesTitlesItems';
import TablesRecordsItems from '../components//TablesRecordsItmes';
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
      title:'Correo', 
  },
  {
      Idx:3,
      title:'Telefono', 
  },
  {
      Idx:4,
      title:'Totales', 
  },
  {
      Idx:5,
      title:'Activas', 
  },
  {
      Idx:6,
      title:'Acciones', 
  },
  {
      Idx:7,
      title:'Observaciones', 
  },



]

const dataMiembros=[
   {
       Idx:1,
       nombre:'Efren Almanza Lamas',
       correo:'efren@gmail.com',
       telefono:'46212345678',
       totOrd:12,
       ordAct:5,
       activo:1,
       obs:"loremww sffhkwhwfk",
   },
   {
      Idx:1,
      nombre:'Karla Almanza Morales',
      correo:'karla@gmail.com',
      telefono:'46252345678',
      totOrd:22,
      ordAct:1,
      activo:1,
      obs:"loremww sffhkwhwfk",
  },
  {
      Idx:1,
      nombre:'Carlos Almanza Morales',
      correo:'dany@gmail.com',
      telefono:'46214345678',
      totOrd:12,
      ordAct:0,
      activo:1,
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
            <div className="column is-full">
              <div className="card">
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
                                return <TablesRecordsItems key={idx}data={item}/>
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
    )
}

export default Customers