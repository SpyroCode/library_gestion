import React from 'react'

import { Link, NavLink } from "react-router-dom"

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
              <header class="card-header">
                <div class="card-header-title has-background-info has-text-light">
                  <div class="field is-horizontal">
                  <div class="field-label is-normal">
                    <label class="label has-text-info-light">Buscar</label>
                  </div>
                  <div class="field-body">
                    <div class="field">
                      <p class="control">
                        <input class="input" type="text" placeholder="Nombre"/>
                      </p>
                    </div>
                  </div>
                </div>
                </div>
                
              </header>
                <div class="card-content">
                  
                  <div class="media">
                  <table class="table">
                    <thead>
                      <tr>
                        <th><abbr title="Counter">#</abbr></th>
                        <th>Miembro</th>
                        <th>Correo</th>
                        <th>Telefono</th>
                        <th>Direccion</th>
                        <th>Ordenes Totales</th>
                        <th>Ordenes Activas</th>
                        <th>Acciones</th>
                        <th>Observaciones</th>
                      </tr>
                    </thead>
                    
                    <tbody>
                      <tr>
                        <th>1</th>
                        <td><NavLink to="memberdetails">Tony Stark</NavLink> 
                        </td>
                        <td>mail@domain.com</td>
                        <td>+52 462 206 8377</td>
                        <td>Cuatro No. 39 San Marcos Irapuato, gto</td>
                        <td>12</td>
                        <td>3</td>
                        <td>
                          <div class="buttons">
                            <button class="button is-warning"><i class="fas fa-edit"></i></button>
                            <button class="button is-danger"><i class="fas fa-user-times"></i></button>
                          </div>
                        </td>
                        <td>lorem lorem lorem </td>
                      </tr>
                      <tr>
                      <th>2</th>
                        <td><NavLink to="memberdetails">Tony Stark</NavLink> 
                        </td>
                        <td>mail@domain.com</td>
                        <td>+52 462 206 8377</td>
                        <td>Cuatro No. 39 San Marcos Irapuato, gto</td>
                        <td>12</td>
                        <td>3</td>
                        <td></td>
                        <td>lorem lorem lorem </td>
                      </tr>
                      <tr>
                      <th>3</th>
                        <td><NavLink to="memberdetails">Tony Stark</NavLink> 
                        </td>
                        <td>mail@domain.com</td>
                        <td>+52 462 206 8377</td>
                        <td>Cuatro No. 39 San Marcos Irapuato, gto</td>
                        <td>12</td>
                        <td>3</td>
                        <td></td>
                        <td>lorem lorem lorem </td>
                      </tr>
                      <tr class="is-selected">
                      <th>4</th>
                        <td><NavLink to="memberdetails">Tony Stark</NavLink> 
                        </td>
                        <td>mail@domain.com</td>
                        <td>+52 462 206 8377</td>
                        <td>Cuatro No. 39 San Marcos Irapuato, gto</td>
                        <td>12</td>
                        <td>3</td>
                        <td></td>
                        <td>lorem lorem lorem </td>
                      </tr>
                      
                      
                    </tbody>
                  </table>
                   </div>
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