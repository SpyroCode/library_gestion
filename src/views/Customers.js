import React from 'react'

import { Link } from "react-router-dom"
import Tables from '../components/tables'
import HeaderTables from '../components/TablesHeader'

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
                  
                    <Tables/>
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