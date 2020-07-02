import React from 'react';
import {  NavLink } from "react-router-dom"

const TablesRecordsItems=(props)=>{
    const {nombre,correo,telefono,totOrd,ordAct,obs} = props.data
    
    
    return(
        <tbody>

                      <tr>
                        <th>1</th>
                        <td>{nombre}</td>
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
                        <td>{obs} </td>
                      </tr>
                      
        </tbody>

    )
}

export default TablesRecordsItems