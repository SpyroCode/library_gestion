import React, {useState,useEffect} from 'react'
import { Link } from "react-router-dom"
import Header from '../layouts/header';
import Asidebar from '../layouts/asidebar'
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


//data

const Books=()=>{
  const [books,setBooks]=useState([])
  useEffect( ()=>{
    getBooks();
  },[])
  
    //llamada a backen;
    const getBooks=async()=>{
      const token=localStorage.getItem('token')
      const resp = await fetch("http://127.0.0.1:3500/book", {
      method: "GET", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      },
      
    });
    const {result} = await resp.json();
    //console.log("Success:", jsonData.result);
    const books=result
    

    console.log(books);
    setBooks(books)
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
              <div className ="column is-full">
                <div className="card">
                <HeaderTables/>
                  <div className="card-content">
                      {/* componente dinamicos tablas */}
                    <div className="media">
                    <table className="table">
                    <thead>
                      <tr>
                      
                          {data.map((item, id)=>{
                                  return <TableTitlesItems key={id}data={item}/>
                          })}   
                      
                      
                      </tr>
                  </thead>   

                          {books.map((item, idx)=>{
                                  return <TablesRecordsItemsBooks key={idx}data={item}/>
                          })}    
                                              
                        
                                        
                    </table>
                </div>
                      {/* componente dinamicos tablas */}
                    <Link to="books" className="button is-link is-outlined">Ver todos</Link>
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

export default Books