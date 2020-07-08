import React, {useState,useEffect} from 'react'
import { Link } from "react-router-dom"
//import { verify } from 'jsonwebtoken'
import Header from '../layouts/header';
import Asidebar from '../layouts/asidebar'
import TableTitlesItems from '../components/TablesTitlesItems';
import TablesRecordsItems from '../components/TablesRecordsItmes';
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
      title:'Role', 
  },



]



//data

const Customers=()=>{
  const [users,setUsers]=useState([])
  useEffect( ()=>{
    getUsers();
  },[])
  //llamada a backen;

    
    
    const url=`http://127.0.0.1:3500/user`
    console.log(process.env.URL);
    const token=localStorage.getItem('token')
    const getUsers=async()=>{
      const resp = await fetch(url, {
      method: "GET", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      },
      
    });
    const {result} = await resp.json();
    //console.log("Success:", result);
    const user=result
    

    //console.log(books);
    setUsers(user)
  }
  
  
    //console.log(users);
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

                        {users.map((item, idx)=>{
                                return <TablesRecordsItems key={idx}data={item}/>
                        })}    
                                             
                      
                                      
                  </table>
               </div>
                    {/* componente dinamicos tablas */}
                   <Link to="customers" className="button is-link is-outlined">Ver todos</Link>
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