import React, {useState,useEffect} from 'react'
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


const MyOrders=()=>{

  const [orders,setOrders]=useState([])
  useEffect( ()=>{
    getOrders();
  },[])
  
  //data
    //llamada a backen;
    const getOrders=async()=>{
      
      const token=localStorage.getItem('token')
      const idUser=localStorage.getItem('tokenid')
      const url=`http://127.0.0.1:3500/orders/${idUser}`
      const resp = await fetch(url, {
      method: "GET", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      },
      
    });
    const {result} = await resp.json();
    //console.log("Success:", result);
    const orders=result
    

    //console.log(orders);
    setOrders(orders)
  }
  
    
    
    //llamada a backen
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

                        {orders.map((item, id)=>{
                                return <TablesRecordsItemsOrders key={id}data={item}/>
                        })}    
                                             
                      
                                      
                  </table>
               </div>
                    {/* componente dinamicos tablas */}
                   <Link to="myorders" className="button is-link is-outlined">Ver todos</Link>
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

export default MyOrders