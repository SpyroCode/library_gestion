import React from 'react';
import {  NavLink } from "react-router-dom"

const TablesRecordsItems=(props)=>{
    const {nombre,correo,telefono,totOrd,ordAct} = props.data
    
    
    return(
        <tbody>

                      <tr>
                        <th>1</th>
                        <td><NavLink to="memberdetails">{nombre}</NavLink> 
                        </td>
                        <td>{correo}</td>
                        <td>{telefono}</td>
                        
                        <td>{totOrd}</td>
                        <td>{ordAct}</td>
                        <td>
                          <div class="buttons">
                            <button class="button is-warning"><i class="fas fa-edit"></i></button>
                            <button class="button is-danger"><i class="fas fa-user-times"></i></button>
                          </div>
                        </td>
                        <td>lorem lorem lorem </td>
                      </tr>
                      
        </tbody>

    )
}

export default TablesRecordsItems