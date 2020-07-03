import React from 'react'
import { Link } from "react-router-dom"
import TableTitlesItems from '../components//TablesTitlesItems';
import TablesRecordsItemsBooks from '../components//TablesRecordsItmesBooks';
import HeaderTables from '../components/TablesHeader'

//data

const data=[
  {
      Idx:0,
      title:'#', 
  },
  {
      Idx:1,
      title:'Titulo', 
  },
  {
      Idx:2,
      title:'Autor', 
  },
  {
      Idx:3,
      title:'Editorial', 
  },
  {
      Idx:4,
      title:'Imagen', 
  },
  {
      Idx:5,
      title:'Status', 
  },
  {
      Idx:6,
      title:'Acciones', 
  },
  



]

const dataMiembros=[
   {
       Idx:1,
       titulo:'Eloquent JavaScript',
       author:'Marin HaverBeker',
       editorial:'o relly',
       image:'http://www.headsem.com/wp-content/uploads/2015/11/aprender-a-programar-en-JavaScript.png',
       status:'Disponible',
       
   },
   {
    Idx:2,
    titulo:'Expert Angular',
    author:'o relly',
    editorial:'google',
    image:'https://media2.ediciones-eni.com/libro/angular-desarrolle-sus-aplicaciones-web-con-el-framework-javascript-de-google-9782409025303_L.jpg',
    status:'Prestado',
    
  },
  {
    Idx:3,
    titulo:'PHP,MySQL, JavaScript & CSS',
    author:'Robinson Nelson',
    editorial:'o relly',
    image:'http://akamaicovers.oreilly.com/images/0636920023487/lrg.jpg',
    status:'Disponible',
    
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
            <div className ="column is-full">
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
                                return <TablesRecordsItemsBooks key={idx}data={item}/>
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
          <div className="modal">
            <div className="modal-background"></div>
              <div className="modal-content">
            
              </div>
            <button className="modal-close is-large" aria-label="close"></button>
          </div> 
        </div> 
    )
}

export default Customers